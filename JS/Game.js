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
        this.drawBall('../img/marble.png') 
        this.drawPaddle('../img/BluePaddle.png')
        setInterval(() => {
            this.clearScreen()
            this.paddle.createPaddle()
            this.ball.createBall()
            this.ball.move()
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
        this.ball.ballPos.x - this.ball.ballSize.w <= 0 ? this.ball.ballVel.x ++: null
        this.ball.ballPos.y - this.ball.ballSize.h <= this.canvasSize.h ? this.ball.ballVel.y ++ : null

    },

    paddleObstacle() {
        if (this.ball.ballPos.x < this.paddle.posX + this.paddle.paddleW && this.ball.ballPos.x > this.paddle.posX && this.ball.ballPos.y < this.paddle.posY + this.paddle.paddleH && this.ball.ballPos.y > this.paddle.posY) {
            
        }
    },
    
    
    //     function ballPaddleCollision(){
    // if(ball.x < paddle.x + paddle.width && ball.x > paddle.x && paddle.y < paddle.y + paddle.height && ball.y > paddle.y)

   

    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 150, 0, 50, 35, this.canvasSize)
        
    },

    drawPaddle(name) {
        this.paddle = new Paddle(this.ctx, name, 350, 700, 150, 30, 50, this.canvasSize)
        // this.paddle.init()
        console.log(this.paddle)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}