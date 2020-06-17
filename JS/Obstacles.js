class Obstacles {
    constructor(ctx, name, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        this.obs = undefined
        this.obsX = posX
        this.obsY = posY
        this.obsW = 80
        this.obsH = 40
        this.obsPadding = 100
        this.obsOffsetTop = 100
        this.obsOffsetLeft = 180
        this.obsRows = 2
        this.obsCol = 2
        
        this.canvasSize = canvasSize
        this.randomPosition = undefined

     
    
    }

        
    createObstacles() {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(this.obsX, this.obsY, this.obsW, this.obsH)
    }

    


    


}


    

    


