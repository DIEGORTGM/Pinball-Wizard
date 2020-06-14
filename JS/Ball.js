class Ball {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ball = undefined

        // this.image = new Image()
        // this.image.src = "./img/marble.png"
        // console.log(this.ctx)

        this.ballSize = { w: 50, h: 35 }
        this.ballPos = { x: 340, y:0 }
        this.ballVel = { x: 10, y: 10}
        // this.ballPhysics = { gravity: .4 }
    }

    init() {
        this.ball = new Image()
        this.ball.src = "./img/marble.png"
        console.log(this.ball.src)
        this.ball.onload = () => this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
     }
    createBall() {
        this.move()
        this.ctx.drawImage(this.ball, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move() {
        this.ballPos.y += this.ballVel.y
        this.ballPos.x += this.ballVel.x

        this.ballPos.y > this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        
    } 
       
        //this.ballPos.y++
        // this.ballPos.x += this.ballVel.x
        // this.ballVel.y += this.ballPhysics.gravity
        // this.ballPos.y += this.ballVel.y
    
        // this.ballPos.y > this.canvasSize.h - this.ballSize.h ? this.ballVel.y *= -1 : null
        // this.ballPos.x > this.canvasSize.w - this.ballSize.w ? this.ballVel.x *= -1 : null
    
}