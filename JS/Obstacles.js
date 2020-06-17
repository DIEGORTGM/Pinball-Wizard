class Obstacles {
    constructor(ctx, name, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        this.obs = undefined
        this.obsX = posX
        this.obsY = posY
        // this.obsX = [100, 218, 350, 445, 578, 700]
        // this.obsY = [100, 200, 300, 200, 100, 200]
        this.obsW = 80
        this.obsH = 40
        this.obsPadding = 10
        this.obsOffsetTop = 30
        this.obsOffsetLeft = 30
        this.obsRows = 2
        this.obsCol = 2
        this.obsNumber = 4
        this.canvasSize = canvasSize
        // this.obsVel = obsVel
        // this.radius = 35
        this.randomPosition = undefined

     
    
    }

        
    createObstacles() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(this.obsX, this.obsY, this.obsW, this.obsH)
    }


    


}


    

    


