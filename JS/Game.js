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
        w: window.innerWidth / 2,
        h: window.innerHeight
    },
    ball: undefined,
    //     keys: {
    //         TOP: 0,
    //         SPACE: 0,
    //     }

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')
        this.drawBall('marble.png')
    },

    drawBall(name) {
        this.ball =  new Ball (this.ctx, name, 150, 0, 50, 50, this.canvasSize)
        this.ball.init()
        console.log(this.ball)
    }
}




