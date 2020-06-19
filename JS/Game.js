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
    obsRows: 3,
    obsCol: 3,
    // obstaclesCounter: undefined,
    score: 0,
    lives: 3,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ball: undefined,
    paddle: undefined,
    randomPosition: undefined,
    keys: {
        
        LEFT: 37,
        RIGHT: 39,
    },

    init() {
        this.canvasDom = document.getElementById('myCanvas')
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
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
            console.log(this.obstacles)
        }, 1000 / this.FPS)
    },



    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.paddle.move('left') : null
            e.keyCode === 39 ? this.paddle.move('right') : null
         
            
        }
        
    },
        


    wallObstacle() {
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

    // obstacleWall() {
    //     this.obstacles.forEach(element => {
    //         element[0].forEach(cv => {
    //             if (cv[2].posX + cv[2].obsW >= this.canvasSize.w) {
    //                 this
    //             }
    //         })
                
    //     });
    // },


    paddleObstacle() {
        
        if (this.ball.ballPos.y + this.ball.ballSize.w > this.paddle.posY && 
            this.ball.ballPos.x > this.paddle.posX && 
            this.ball.ballPos.x + this.ball.ballSize.w < this.paddle.posX + this.paddle.paddleW) {
            this.ball.ballVel.y = - this.ball.ballVel.y 
            this.ball.ballVel.x = + this.ball.ballVel.x 
        }
    },
        
    

    obstacleCollision() {
        for (let i = 0; i < this.obsCol; i++) {
            for (let j = 0; j < this.obsRows; j++) {
                let obstacle = this.obstacles[i][j];
                if (this.ball.ballPos.x > obstacle.obsX &&
                    this.ball.ballPos.x < obstacle.obsX + obstacle.obsW &&
                    this.ball.ballPos.y > obstacle.obsY - obstacle.obsH &&
                    this.ball.ballPos.y < obstacle.obsY + obstacle.obsH) {
                    this.score++
                    this.ball.ballVel.y = - this.ball.ballVel.y
                    //this.ball.ballVel.x = + this.ball.ballVel.x
                }
                
            }
        }
    },

    reset() {
        this.drawBall()
        this.ball.generateRandomPosition()
        this.drawPaddle('./img/BluePaddle.png')
        this.obstacles = []
        for (let i = 0; i < this.obsRows; i++) {
            this.obstacles[i] = [];
            for (let j = 0; j < this.obsCol; j++) {
                let obstacle = new Obstacles(this.ctx, this.canvasSize);
                let posX = (i * (obstacle.obsW + obstacle.obsPadding)) + obstacle.obsOffsetLeft
                let posY = (j * (obstacle.obsH + obstacle.obsPadding)) + obstacle.obsOffsetTop
                obstacle.setPosition(posX, posY)
                this.obstacles[i].push(obstacle)
    
            }
        }
    },

    drawAll() {
        this.ball.createBall()
        this.paddle.createPaddle()
        this.drawObstacles()
        this.drawLives()
        this.drawScore()
    },

    drawBall() {
        this.randomPosition = Math.floor(Math.random() * this.canvasSize.w)
        this.ball = new Ball(this.ctx, this.randomPosition, this.canvasSize)
    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, this.canvasSize)
    },

    drawObstacles() {
        for (let i = 0; i < this.obsRows; i++) {
            for (let j = 0; j < this.obsCol; j++) {
                this.obstacles[i][j].draw();
            }
        }
    },

    // drawObstacles() {
    //     // console.log("QUE ES",this.obstacles)
    //     for (let i = 0; i < 3; i++) {
    //         this.obstacles[i] = [];
    //         for (let j = 0; j < 3; j++){
    //             this.obstacles[i][j] = { x: 0, y: 0};
    //         }
    //     }
    //     for (let i = 0; i < this.obstacles.obsCol; i++) {
    //         for (let j = 0; j < this.obstacles.obsRows; j++) {
    //             let obstaclesX = (i * (this.obstacles.obsW + this.obstacles.obsPadding)) + this.obstacles.obsOffsetLeft
    //             let obstaclesY = (j * (this.obstacles.obsH + this.obstacles.obsPadding)) + this.obstacles.obsOffsetTop
    //             this.obstacles[i][j].x = obstaclesX
    //             this.obstacles[i][j].y = obstaclesY
    //             this.ctx.beginPath();
    //             this.ctx.rect(obstaclesX, obstaclesY, this.obstacles.obsW, this.obstacles.obsH);
    //             this.ctx.fillstyle = "#0000FF";
    //             this.ctx.fill();
    //             this.ctx.closePath()
    //         }

    //     }
    // },
        
    drawLives() {
        this.ctx.font = "20px Helvetica"
        this.ctx.fillStyle = "white"
        this.ctx.fillText("Lives: " + this.lives, 600, 30);
    
    },
    
    drawScore(){
        this.ctx.font = "20px Helvetica"
        this.ctx.fillStyle = "white"
        this.ctx.fillText("Score: " + this.score, 450, 30);
    },


    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    },

    gameOver() {
        clearInterval(this.interval)
    },

    

}