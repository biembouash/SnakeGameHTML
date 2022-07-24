import { draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import {overBoard} from "./grid.js"

let LastRender = 0;

let GAME_OVER = false;

function game(CurTime){
    if(GAME_OVER){
        if(confirm("YOU JUST LOST MEN KKKJ"))
        window.location = "/snakeGame";
    }
    else{
    window.requestAnimationFrame(game)
    const TimeRender = (CurTime - LastRender)/1000;
    if(TimeRender < 1/SNAKE_SPEED) return;
    LastRender = CurTime;
    
    checkGameOver();
    update();
    draw();
    }
}

function update(){
    updateFood();
    document.getElementById("snakeBoard").innerHTML = "";
    updateSnake();
    
    
}

function draw(){
    let board = document.getElementById("snakeBoard")
    drawSnake(board);
    drawFood(board)
}


function checkGameOver(){
    if(overBoard(getSnakeHead()) || snakeIntersection())
        GAME_OVER =  true;
}

window.requestAnimationFrame(game)