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
    //framesCOunter: 0//
    background: undefined,
    player: undefined,
    obstacles: undefined,
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
        // this.drawObstacles('../img/purplebaloon.png')
        setInterval(() => {
            this.clearScreen()
            this.ball.move()
            this.obstacles.createObstacles()
            this.drawAll()
            this.paddleObstacle()
            this.wallObstacle()
        }, 1000/this.FPS)
    },

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
        this.obstacles = new Obstacle (this.ctx, 100, 100, 80, 40, this.canvasSize)
    },

    drawAll() {
        this.paddle.createPaddle()
        this.ball.createBall()
        this.drawObstacles()
    },
    


    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 150, 0, 40, 40, this.canvasSize)
        
    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, 350, 700, 150, 30, 600, 5, this.canvasSize)
        // console.log(this.paddle)
    },

    // drawObstacles() {
    //     this.obstacles = new Obstacle (this.ctx, 100, 100, 80, 40, this.canvasSize)
    // },
        
// drawObstacles(){
//         this.obstacle = new Obstacles (this.ctx, "#870007", 25, 20, 150, 35, 5, this.canvasSize )
//         this.obstacle.drawObstacles()
//     },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}