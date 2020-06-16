class Paddle {
    constructor(ctx, name, posX, posY, paddleW, paddleH, canvasSize) {
        this.ctx = ctx
        this.posX = 350
        this.posY = 700
        this.paddleW = 150
        this.paddleH = 30
        this.paddleVel = { x: 40, y: 10}
        this.canvasSize = canvasSize
        this.paddle = undefined

        this.paddle = new Image()
        this.paddle.src = name
    }



    createPaddle() {
        this.ctx.drawImage(this.paddle, this.posX, this.posY, this.paddleW, this.paddleH)
    }
    
    move(dir) {
  
        if (dir === "left") {
            this.posX--
            this.createPaddle
        }
        
        if (dir === "right") {
            this.posX++
            this.createPaddle
        }
        
    }
}





   





