class Paddle {
    constructor(ctx, name, posX, posY, paddleW, paddleH, paddleVel, canvasSize) {
        this.ctx = ctx
        this.name = name
        this.posX = posX
        this.posY = posY
        this.paddleW = paddleW
        this.paddleH = paddleH
        this.paddleVel = 10
        this.canvasSize = canvasSize
        this.paddle = undefined
    }

    init() {
        this.paddle = new Image()
        this.paddle.src = "/img/BluePaddle.png"
        this.paddle.onload = () => this.ctx.drawImage(this.paddle, this.posX, this.posY, this.paddleW, this.paddleH)
    }


    createPaddle() {
        this.ctx.drawImage(this.paddle, this.posX, this.posY, this.paddleW, this.paddleH)
    }

    move(dir) {
        // this.paddlePos.x += this.paddleVel.x
        // dir === 'left' && this.posX >= 275 ? this.posX -= this.paddleVel : null
        // dir === 'right' && this.posX <= this.canvasSize.w - this.paddleW - 275 ? this.posX += this.paddleVel : null
        dir === 'left' ? this.posX -= this.paddleVel : null
    }

}

// move(dir) {
//         if(dir === "left"){

//             if (this.posX == 25){

//                 alert("Te has salido de la carretera")

//             }else{

//                 this.posX --
//                 this.draw()
//             } 

//         } else if (dir === "right") {

//             if (this.posX == 350){

//                 alert("Te has salido de la carretera")

//             }else{

//                 this.posX ++
//                 this.draw()

//             }
//         }
//     }

    
// function keyDownHandler(e) {
//     if (e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = true;
//     } else if (e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if (e.key == "Right" || e.key == "ArrowRight") {
//         rightPressed = false;
//     } else if (e.key == "Left" || e.key == "ArrowLeft") {
//         leftPressed = false;
//     }
// }

   








