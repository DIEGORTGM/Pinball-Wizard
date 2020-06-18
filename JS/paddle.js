class Paddle {
    constructor(ctx, name, canvasSize) {
        this.ctx = ctx
        this.posX = 285
        this.posY = 650
        this.paddleW = 150
        this.paddleH = 30
        this.paddleVel = 70
        this.canvasSize = canvasSize
        //this.dx = 5
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
  
        // if (dir === "left") {
        //     this.posX -= 70 
        //     this.createPaddle()
        // }
        
        // if (dir === "right") {
        //     this.posX += 70
        //     this.createPaddle()
        // }
        
    }
}


// move(dir) {
//     dir === 'left' && this.posX >= 175 ? this.posX -= this.vel : null
//     dir === 'right' && this.posX <= this.canvasSize.w - this.carW - 175 ? this.posX += this.vel : null
//   }





   





