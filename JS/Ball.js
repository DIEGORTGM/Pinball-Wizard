class Ball {
    constructor(ctx, name, posX, posY, ballW, ballH, ballVel, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ball = undefined

        this.ballSize = { w: 50, h: 35 }
        this.ballPos = { x: 600, y: 10 }
        this.ballVel = { x: 2, y: 5}

        this.ball = new Image()
        this.ball.src = "./img/marble.png"
        // this.ballPhysics = { gravity: .4 }
    }

    createBall() {
        this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.y += this.ballVel.y
        this.ballPos.x += this.ballVel.x
        // this.ballVel.y += this.ballPhysics.gravity

    
        // console.log(this.canvasSize.h)
    } 
       
}