class Ball {
    constructor(ctx, name, posX, posY, ballW, ballH, ballVel, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ball = undefined

        this.ballSize = { w: 50, h: 35 }
        this.ballPos = { x: 0, y: 10 }
        this.ballVel = { x: 10, y: 10}

        this.ball = new Image()
        this.ball.src = "./img/marble.png"
        // this.ballPhysics = { gravity: .4 }
    }

    // draw() {
    //     this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    // this.ball.onload = () => this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    //  }

    createBall() {
        // this.move()
        this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.y += this.ballVel.y
        this.ballPos.x += this.ballVel.x

    
        // console.log(this.canvasSize.h)
    } 
       
}