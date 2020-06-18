class Obstacles {
    constructor(ctx, posX, posY, canvasSize) {
        this.ctx = ctx
        this.obs = undefined
        this.obsX = posX
        this.obsY = posY
        this.obsW = 100
        this.obsH = 15
        this.obsPadding = 100
        this.obsOffsetTop = 130
        this.obsOffsetLeft = 115
        //this.obsRows = 3
        //this.obsCol = 3
        this.obsVel = {x: 5, y: 0}
        this.speed = 2
        
        this.canvasSize = canvasSize
        this.randomPosition = undefined
    }

        

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.obsX, this.obsY, this.obsW, this.obsH);
        this.ctx.fillstyle = "#0000FF";
        this.ctx.fill();
        this.ctx.closePath()
        this.moveObstacles()
    }
        
    setPosition(posX, posY) {
        this.obsX = posX
        this.obsY = posY
        }


    createObstacles() {
        this.ctx.fillStyle = "blue"
        this.moveObstacles()
        this.ctx.fillRect(this.obsX, this.obsY, this.obsW, this.obsH)
    }

    
    moveObstacles() {
        this.obsX += this.speed
        if (this.obsX == 50) {
            this.velY = this.speed * (-1)
            this.obsX += this.speed
        }
        if (this.obsX == 500) {
            this.speed = this.speed * (-1)
            this.obsX += this.speed
        }
        // console.log('muevete')
        //this.obsy += this.obsVel.y
    }

    


}


    

    


