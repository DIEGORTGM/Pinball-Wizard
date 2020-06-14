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
    //FPS:60//
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
    keys: {
        SPACE: 32,
    },

    init(id) {
        this.canvasDom = document.getElementById(id)
        // this.canvasDom.setAttribute('width', this.canvasSize.w)
        // this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')
        this.drawBall('marble.png')
        this.setDimensions()
        this.setEventListeners()
        this.start()
    },

    setDimensions() {
       this.canvasSize.w = window.innerWidth / 2
       this.canvasSize.h = window.innerHeight
       this.canvasDom.setAttribute('width', this.canvasSize.w)  
       this.canvasDom.setAttribute('height', this.canvasSize.h)   
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.SPACE ? this.drawBall(name) : null
        }
    },

    start() {
        setInterval(() => {
            this.clearScreen()
            this.ball.createBall()
        }, 20)
    },


    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 150, 0, 50, 35, this.canvasSize)
        this.ball.init()
        console.log(this.ball)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}