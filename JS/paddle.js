class Paddle {
    constructor(ctx, name, canvasSize) {
        this.ctx = ctx
        this.posX = 285
        this.posY = 610
        this.paddleW = 150
        this.paddleH = 30
        this.paddleVel = 70
        this.canvasSize = canvasSize
        this.paddle = undefined
        this.paddle = new Image()
        this.paddle.src = name
    }



    createPaddle() {
        this.ctx.drawImage(this.paddle, this.posX, this.posY, this.paddleW, this.paddleH)
    }
    
    move(dir) {

        dir === 'left' && this.posX >= 25 ? this.posX -= this.paddleVel : null
        dir === 'right' && this.posX <= this.canvasSize.w - this.paddleW - 25 ? this.posX += this.paddleVel : null
  
       
        
    }
}







   





