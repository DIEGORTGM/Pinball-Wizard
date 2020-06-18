const Game = {
    name: "Pinball Wizard",
    description: "Basic pinball game",
    version: "1.0.0",
    authors: "Rodrigo Perez & Diego Ortiz",
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    framesCounter: undefined,
    background: undefined,
    player: undefined,
    obstacles: [],
    interval: undefined,
    // obstaclesCounter: undefined,
    lives: 3,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ball: undefined,
    paddle: undefined,
    keys: {
        
        LEFT: 37,
        RIGHT: 39,
    },

    init() {
        this.canvasDom = document.getElementById('myCanvas')
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        // this.livesCounter() = 3
        this.start()
    },


    setDimensions() {
        this.canvasSize.w = window.innerWidth / 2
        this.canvasSize.h = window.innerHeight 
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
    },

    start() {
        this.setEventListeners()
        this.reset()
        this.interval = setInterval(() => {
            this.framesCounter++
            this.clearScreen()
            this.drawAll()
            this.ball.move()
            // this.obstacles.moveObstacles()
            this.paddleObstacle()
            this.wallObstacle()
            this.obstacleCollision()
        }, 1000 / this.FPS)
    },



    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.paddle.move('left') : null
            e.keyCode === 39 ? this.paddle.move('right') : null
            //e.keyCode === this.keys.SPACE ? this.drawBall() : null
        }
        
    },
        


    wallObstacle() {
        //this.ball.ballPos.y > this.canvasSize.h - this.ball.ballSize.h ? this.ball.ballVel.y *= -1 : null 
        this.ball.ballPos.x > this.canvasSize.w - this.ball.ballSize.w ? this.ball.ballVel.x *= -1 : null
        this.ball.ballPos.y + this.ball.ballSize.h/2 < 0 ? this.ball.ballVel.y *= -1 : null
        this.ball.ballPos.x + this.ball.ballSize.w/2 < 0 ? this.ball.ballVel.x *= -1 : null

        if (this.ball.ballPos.y > this.canvasSize.h - this.ball.ballSize.h)  {
            if (this.lives > 1) { 
                this.lives--
                this.reset()  
            } else  {
                (this.lives < 1)
                this.gameOver()
                alert("GAME OVER")
            }
        } 

    },


    paddleObstacle() {
        
        if (this.ball.ballPos.y + this.ball.ballSize.w > this.paddle.posY && 
            this.ball.ballPos.x > this.paddle.posX && 
            this.ball.ballPos.x + this.ball.ballSize.w < this.paddle.posX + this.paddle.paddleW) {
            this.ball.ballVel.y = - this.ball.ballVel.y 
            this.ball.ballVel.x = + this.ball.ballVel.x 
        }
    },
        
    

    obstacleCollision() {
        for (let i = 0; i < this.obstacles.obsCol; i++) {
            for(let j = 0; j < this.obstacles.obsRows; j++) {
                let bricks = this.obstacles[i][j];
                if (this.ball.ballPos.x > bricks.x &&
                   this.ball.ballPos.x < bricks.x + this.obstacles.obsW && 
                   this.ball.ballPos.y > bricks.y - this.obstacles.obsH &&
                   this.ball.ballPos.y < bricks.y + this.obstacles.obsH) {
                        this.ball.ballVel.y = - this.ball.ballVel.y 
                        this.ball.ballVel.x = + this.ball.ballVel.x 
                   }
            }
        }

    },

    reset() {
        this.drawBall()
        this.drawPaddle('../img/BluePaddle.png')
        this.drawObstacles()
        this.obstacles = new Obstacles(this.ctx, '', this.obsX, this.obsY, this.obsW, this.obsH, this.canvasSize)
    },

    drawAll() {
        this.ball.createBall()
        this.paddle.createPaddle()
        this.obstacles.createObstacles()
        this.drawObstacles()
        this.drawLives()
    },

    drawBall() {
        this.ball = new Ball(this.ctx, this.canvasSize)
        //this.ball.generateRandomPosition()
        
    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, this.canvasSize)
    },

    drawObstacles() {
        // console.log("QUE ES",this.obstacles)
        for (let i = 0; i < 3; i++) {
            this.obstacles[i] = [];
            for (let j = 0; j < 3; j++){
                this.obstacles[i][j] = { x: 0, y: 0};
            }
        }
        for (let i = 0; i < this.obstacles.obsCol; i++) {
            for (let j = 0; j < this.obstacles.obsRows; j++) {
                let obstaclesX = (i * (this.obstacles.obsW + this.obstacles.obsPadding)) + this.obstacles.obsOffsetLeft
                let obstaclesY = (j * (this.obstacles.obsH + this.obstacles.obsPadding)) + this.obstacles.obsOffsetTop
                this.obstacles[i][j].x = obstaclesX
                this.obstacles[i][j].y = obstaclesY
                this.ctx.beginPath();
                this.ctx.rect(obstaclesX, obstaclesY, this.obstacles.obsW, this.obstacles.obsH);
                this.ctx.fillstyle = "#0000FF";
                this.ctx.fill();
                this.ctx.closePath()
            }

        }
    },
        
    drawLives() {
        this.ctx.font = "20px Helvetica"
        this.ctx.fillStyle = "white"
        this.ctx.fillText("Lives: " + this.lives, 600, 30);
    
    },



    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    },

    gameOver() {
        clearInterval(this.interval)
    }

}



