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
    obstacles: [],
    canvasSize: {
        //w: window.innerWidth / 2,
        //h: window.innerHeight
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
        // this.canvasDom.setAttribute('width', this.canvasSize.w)
        // this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')
        //this.drawBall('marble.png')
        //this.drawPaddle('BluePaddle.png')
        this.setDimensions()
        //this.setEventListeners()
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
        // this.paddle.createPaddle()
        this.drawPaddle('BluePaddle.png')
        setInterval(() => {
            this.clearScreen()
            //this.paddle.createPaddle()
            //this.drawPaddle('BluePaddle.png')
            this.ball.createBall()
            this.drawBall('marble.png') 
            this.wallObstacle()
        }, 1000/this.FPS)
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.SPACE ? this.drawBall(name) : null
        },
        document.onkeydown = e => {
            e.keyCode === this.keys.LEFT ? this.drawPaddle(name) : null
            console.log(e.keyCode)
        }
        
    },

    // function keyDownHandler(e) {
    //     if (e.key == "Right" || e.key == "ArrowRight") {
    //         rightPressed = true;
    //     } else if (e.key == "Left" || e.key == "ArrowLeft") {
    //         leftPressed = true;
    //     }
    // }

    // function keyUpHandler(e) {
    //     if (e.key == "Right" || e.key == "ArrowRight") {
    //         rightPressed = false;
    //     } else if (e.key == "Left" || e.key == "ArrowLeft") {
    //         leftPressed = false;
    //     }

    

    wallObstacle() {

        // this.ball.ballPos.x < 0 + this.ball.ballSize.w ? this.ball.ballVel.x *= -1 : null
        // this.ball.ballPos.y < 0 + this.ball.ballSize.h ? this.ball.ballVel.y *= -1 : null
        //this.ball.ballPos.y > this.canvasSize.h - this.ball.ballSize.h ? this.ball.ballVel.y *= -1 : null
        //this.ball.ballPos.x > this.canvasSize.w - this.ball.ballSize.w ? this.ball.ballVel.x *= -1 : null

        //this.ball.ballPos.x < 0 + this.ball.ballSize.w ? this.ball.ballVel.x *= -1 : null
        //this.ball.ballPos.y < 0 + this.ball.ballSize.h ? this.ball.ballVel.y *= -1 : null
        if (this.ball.ballPos.y > this.canvasSize.h - this.ball.ballSize.h) {
            this.ball.ballVel.y *= -1
        }

        if (this.ball.ballPos.x > this.canvasSize.w - this.ball.ballSize.w) {
            this.ball.ballVel.x *= -1
        }

        // if (this.ball.ballPos.x < this.canvasSize.w + this.ball.ballSize.w) {
        //     this.ball.ballVel *= 1
        // }
        // if (this.ball.ballPos.y < this.canvasSize.h + this.ball.ballSize.h) {
        //     this.ball.ballVel.y *= 1
        // }
    },

   

    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 150, 0, 50, 35, this.canvasSize)
        // this.ball.init()
        // console.log(this.ball)
    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, 350, 700, 150, 30, this.canvasSize)
        // this.paddle.init()
        console.log(this.paddle)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}