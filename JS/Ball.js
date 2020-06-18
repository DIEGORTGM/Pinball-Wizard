class Ball {
    constructor(ctx, randomPosition, canvasSize) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ball = undefined

        this.ballSize = { w: 20, h: 20 }
        this.ballPos = { x: randomPosition, y: 10}    
        this.ballVel = { x: 6, y: 6} 
        this.radius = 20
        this.randomPosition = undefined
        
        
    }

    createBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.ballPos.x + this.ballSize.h / 2, this.ballPos.y + this.ballSize.h / 2, this.ballSize.h / 2, 0, Math.PI * 2)
        this.ctx.fillStyle = 'white';
        this.ctx.fill()
        this.ctx.stroke()
        this.ctx.closePath()    
            
    }
    

    move() {
        this.ballPos.y += this.ballVel.y
        this.ballPos.x += this.ballVel.x
        
    } 

    generateRandomPosition() {
        this.randomPosition = Math.floor(Math.random() * this.canvasSize.w)
        console.log(this.randomPosition)
    }
       
}

