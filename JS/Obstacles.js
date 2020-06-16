class obstacles {
    constructor(ctx, name, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        this.obs = undefined
        this.obsX = posX
        this.obsY = posY
        // this.obsX = [100, 218, 350, 445, 578, 700]
        // this.obsY = [100, 200, 300, 200, 100, 200]
        this.obsW = obsW
        this.obsH = obsH
        this.canvasSize = canvasSize
        // this.obsVel = obsVel
        // this.radius = 35
        this.randomPosition = undefined

        // this.obstacle = new Image()
        // this.obstacle.src = "../img/purplebaloon.png"
    
    }

        
    createObstacles() {
        //this.ctx.drawImage(this.obstacle, this.obsX, this.obsY, this.obsW, this.obsH)
        this.ctx.fillstyle = "green"
        this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH)
    }


    // drawObstacle(randomPosition) {
    //     this.ctx.fillStyle = "red"
    //     this.posY += this.vel
    //     this.ctx.fillRect(this.posX[randomPosition], this.posY, this.width[randomPosition], 50)
    // }



    // this.ballSize = { w: 40, h: 40 }
    // this.ballPos = { x: 600, y: 10 }
    // this.ballVel = { x: 2, y: 5}
    // this.radius = this.ballSize.w / 2


}


    

    


