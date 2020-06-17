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
    // obstaclesCounter: undefined,
    //livesCounter: undefined o 0 ???
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ball: undefined,
    paddle: undefined,
    keys: {
        SPACE: 32,
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
        setInterval(() => {
            this.framesCounter++
            this.clearScreen()
            this.ball.move()
            this.drawAll()
            this.paddleObstacle()
            this.wallObstacle()
            // if (this.framesCounter % 90 === 0) {
            //     this.obstacles.push(new Obstacles(this.ctx, '', 100, 100, this.obsW, this.obsH, this.canvasSize))
            // console.log("yay")
            // }
        }, 1000 / this.FPS)
    },


    // if (this.frames % 70 === 0 || this.frames === 0) {
    //     const newObs = new Obstacle(this.canvasSize, this.ctx)
    //     newObs.generateRandomPosition()
    //     this.obstacles.push(newObs)
    // }
    // this.frames++
    // this.obstacles.forEach(elm => elm.drawObstacle(elm.randomPosition))
    // }, 50)

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.paddle.move('left') : null
            e.keyCode === 39 ? this.paddle.move('right') : null
            e.keyCode === this.keys.SPACE ? this.drawBall(name) : null
        }
    },

    wallObstacle() {
        this.ball.ballPos.y > this.canvasSize.h - this.ball.ballSize.h ? this.ball.ballVel.y *= -1 : null
        this.ball.ballPos.x > this.canvasSize.w - this.ball.ballSize.w ? this.ball.ballVel.x *= -1 : null
        this.ball.ballPos.y + this.ball.ballSize.h < 0 ? this.ball.ballVel.y *= -1 : null
        this.ball.ballPos.x + this.ball.ballSize.w < 0 ? this.ball.ballVel.x *= -1 : null

    },


    paddleObstacle() {

        if (this.ball.ballPos.x < this.paddle.posX + this.paddle.paddleW &&
            this.ball.ballPos.x > this.paddle.posX &&
            this.paddle.posY < this.paddle.posY + this.paddle.paddleH &&
            this.ball.ballPos.y > this.paddle.posY) {
            this.ball.ballPos.x += this.ball.ballVel.x *= -1
            this.ball.ballPos.y += this.ball.ballVel.y *= -1
        }

    },

    reset() {
        this.drawBall('../img/marble.png')
        this.drawPaddle('../img/BluePaddle.png')
        this.drawObstacles()
        this.obstacles = new Obstacles(this.ctx, '', this.obsX, this.obsY, this.obsW, this.obsH, this.canvasSize)
        // this.obstacles = new Obstacles(this.ctx, '', 300, 400, 80, 40, this.canvasSize)
    },

    drawAll() {
        
        this.paddle.createPaddle()
        this.ball.createBall()
        this.obstacles.createObstacles()
        this.drawObstacles()
    },



    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 150, 0, 40, 40, this.canvasSize)

    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, 350, 700, 150, 30, 600, 5, this.canvasSize)
    },

    generateObstacles() {
        for (let i = 0; i < this.obstacles.obsCol; i++) { 
                obstacles[i] = []
            for (let j = 0; j < this.obstacles.obsRows; j++){
                obstacles[i][j] = {
                    x: 0,
                    y: 0
                }
            }
        }

    },
    
    drawObstacles() {
        for (let i = 0; i < this.obstacles.obsCol; i++) {
            for (let j = 0; j < this.obstacles.obsRows; j++) {
                this.obstacles.obsX = (i * (this.obstacles.obsW + this.obstacles.obsPadding)) + this.obstacles.obsOffsetLeft
                this.obstacles.obsY = (j * (this.obstacles.obsH + this.obstacles.obsPadding)) + this.obstacles.obsOffsetTop
                this.obstacles[i][j].x = this.obstacles.obsX
                this.obstacles[i][j].y = this.obstacles.obsY
                this.ctx.beginPath();
                this.ctx.fillStyle = "green"
                this.ctx.fillRect(this.obsX, this.obsY, this.obsW, this.obsH)
                this.ctx.fill()
                this.this.ctx.closePath()
        }
        
            }
        },

    
    // for (let i = 0; i < 3; i++){
    // this.obstacles.push(new Obstacles(this.ctx, '', 100, 100, this.obsW, this.obsH, this.canvasSize))


    //     for (i = 0; i <= this.obstacles.obsRows; i++) {
    //         for(j = 0; i <= this.obstacles.obsNumber; j++) {
    //             this.obstacles.push(new Obstacles(this.ctx, '', 100, 100, this.obsW, this.obsH, this.canvasSize))
    //             console.log('yay')
    //         }
    //     }
    // },
        

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}



//         this.bricksRows = 2;
//         this.numberOfBricks = 4;
//         this.brickWidth = (this.playableWidth - (this.margin * 2)) / (this.numberOfBricks + 1.6);
//         this.brickGutter = this.brickWidth / (this.numberOfBricks - 1);
//         this.brickHeight = 20;
//         this.bricks = []
//         for (i = 0; i < this.bricksRows; i++) {
//           for (j = 0; j < this.numberOfBricks; j++) {
//             this.bricks.push(new Brick(this.ctx, (this.margin * 2) + this.brickWidth * j + this.brickGutter * j, this.brickHeight * i + i * 15 + 100, this.brickWidth, this.brickHeight))
//           }
//         }
//         break;


// generateBricks: function () {
//   for (i = 0; i < this.numberOfBricks; i++) {
//     if (i === 0) {
//         this.bricks[i] = new Brick(this.ctx, 0, 100, this.brickWidth, 10, this.brickHeight, this.width, this.height)
//     }
//     if (i === this.numberOfBricks - 1) {
//         this.bricks[i] = new Brick(this.ctx, this.brickWidth * i + this.brickGutter * i, 100, this.brickWidth, this.brickHeight, this.width, this.height)
//     }
//     this.bricks[i] = new Brick(this.ctx, this.brickWidth * i + this.brickGutter * i, 100, this.brickWidth, this.brickHeight, this.width, this.height)

// }
// },