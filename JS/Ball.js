class Ball {
    constructor(ctx, name, posX, posY, ballW, ballH, ballVel, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ball = undefined

        this.ballSize = { w: 40, h: 40 }
        this.ballPos = { x: 600, y: 10}
        //this.ballSize = this.ctx.arc(this.ballPos.x, this.ballPos.y, this.radius, 0, Math.PI*2)    
        this.ballVel = { x: 10, y: 10}
         this.radius = this.ballSize.w / 2
        //this.radius = 20
        // this.dx = 3
        // this.dy = -3
        this.ball = new Image()
        this.ball.src = "./img/pinballBueno.png"
        // this.ballPhysics = { gravity: .4 }
    }

    createBall() {
        this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.y += this.ballVel.y
        this.ballPos.x += this.ballVel.x

        // this.ballPos.y += this.dy
        // this.ballPos.x += this.dx
        // this.ballVel.y += this.ballPhysics.gravity

    
        // console.log(this.canvasSize.h)
    } 
       
}