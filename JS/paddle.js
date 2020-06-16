class Paddle {
    constructor(ctx, name, posX, posY, paddleW, paddleH, paddleVel, canvasSize) {
        this.ctx = ctx
        this.posX = 350
        this.posY = 700
        this.paddleW = 150
        this.paddleH = 30
        this.paddleVel = 100
        this.canvasSize = canvasSize
        this.dx = 5
        this.paddle = undefined
        this.paddle = new Image()
        this.paddle.src = name
    }



    createPaddle() {
        this.ctx.drawImage(this.paddle, this.posX, this.posY, this.paddleW, this.paddleH)
    }
    
    move(dir) {
  
        if (dir === "left") {
            this.posX -= 50
            this.createPaddle
        }
        
        if (dir === "right") {
            this.posX += 50
            this.createPaddle
        }
        
    }
}





   





