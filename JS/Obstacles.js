class Obstacles {
    constructor(ctx, posX, posY, canvasSize) {
        this.ctx = ctx
        this.obs = undefined
        this.obsX = posX
        this.obsY = posY
        this.obsW = 100
        this.obsH = 20
        this.obsPadding = 100
        this.obsOffsetTop = 150
        this.obsOffsetLeft = 115
        this.obsRows = 3
        this.obsCol = 3
        this.obsVel = {x: 5, y: 0}
        this.speed = 20
        
        this.canvasSize = canvasSize
        this.randomPosition = undefined

     
    
    }

        
    createObstacles() {
        this.ctx.fillStyle = "purple"
        this.moveObstacles()
        this.ctx.fillRect(this.obsX, this.obsY, this.obsW, this.obsH)
    }

    
    moveObstacles() {
        this.obsX += this.speed
        console.log('muevete')
        //this.obsy += this.obsVel.y
    }

    


}


    

    


