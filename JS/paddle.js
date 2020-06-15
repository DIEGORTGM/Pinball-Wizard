class Paddle {
    constructor(ctx, name, posX, posY, paddleW, paddleH, canvasSize) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.paddleW = paddleW
        this.paddleH = paddleH
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

   





