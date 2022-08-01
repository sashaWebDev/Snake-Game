<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Snake</title>
</head>
<body>
    <h2>Очки: <span>0</span></h2>
   <canvas id="canv" width="600" height="600"></canvas>
   
    <script src="script.js"></script>
</body>
</html>
let cells = 30;
let cellSize = 20;


let foodX = 20
let foodY = 20

let trail = [];
let tail = 3

let playerX = 15
let playerY = 15

let moveX = 0
let moveY = 0

let scoreBox = document.querySelector('h2 span')

let canv = document.querySelector('#canv');
let ctx = canv.getContext('2d')
let gameTimer;
start()


function start(){

    scoreBox.innerText = 0 
    playerX = 15;
    playerX = 15;

    moveX = 0;
    moveY = 0;

    let background = new Image()
    background.src = 'background.png'
    background.width = 598 + "px"
    background.height = 598 + "px"

    background.onload = function(){
        ctx.drawImage(background, 0, 0)
        ctx.fillStyle = "black";
        ctx.font = "50px monospace"
        ctx.textAlign = 'center'
        ctx.fillText("Start", 300, 500)
    }

    canv.onclick = function(){
        document.addEventListener("keydown", move)
        gameTimer = setInterval(game, 60)
       canv.onclick = null;
    }
}

function game(){
    playerX += moveX
    playerY += moveY

    if(playerX < 0 || playerY < 0 || playerY > cells || playerX > cells){
        endGame()
    }

    ctx.fillStyle = "#422857";
    ctx.fillRect(0, 0, canv.width, canv.height);
   
    ctx.fillStyle = "#fff"
    ctx.fillRect(foodX * cellSize, foodY * cellSize, cellSize, cellSize)

    ctx.fillStyle = "#fe3c70"
    for(let i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x * cellSize, trail[i].y * cellSize, cellSize, cellSize)
        if(playerX === trail[i].x && playerY == trail[i].y){
            tail = 3;
            scoreBox.innerText = 0 
        }
    }
    
    trail.push( {x: playerX, y:playerY})

    if(playerX === foodX && playerY == foodY){
        tail++;
        scoreBox.innerText = +scoreBox.innerText + 1
        foodX = Math.floor(Math.random() * cells)
        foodY = Math.floor(Math.random() * cells)
    }

    while(trail.length > tail) {
        trail.shift()
    }
}

function endGame(){
    clearInterval( gameTimer)
    setTimeout(function(){
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canv.width, canv.height)
    ctx.fillStyle = "#fff"  
    ctx.textAlign = "center"  
    ctx.font = "50px monospace"
    ctx.fillText("End Game", 200, 200)
    }, 100)

  

    canv.onclick = start;
    
}

function move(event){
    switch(event.keyCode){
        case 37:
            moveX = -1
            moveY = 0
            break
        case 38:
            moveX = 0
            moveY = -1
            break
        case 39:
            moveX = 1
            moveY = 0
            break
        case 40:
            moveX = 0
            moveY = 1
            break
    }
}
canvas{
    display: block;
    margin: 0 auto;
    border: 2px solid red;
    cursor: pointer;
}
