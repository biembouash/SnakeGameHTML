import {expandSnake, onSnake} from "./snake.js"
import {getRandomGridPosition} from "./grid.js"

let food = {x:10, y:10}

const EXPANSION_RATE = 1

export function update(){
    console.log("damn")
    console.log(onSnake(food), food)
    if(onSnake(food)){
        console.log("daaaan")
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }

}

export function draw(board){
    let foodLocation = document.createElement("div");
    foodLocation.setAttribute("class", "food");
    foodLocation.style.gridRowStart = food.y;
    foodLocation.style.gridColumnStart = food.x;
    board.appendChild(foodLocation);
}

function getRandomFoodPosition(){
    let pos = getRandomGridPosition();
    while(onSnake(pos))
        pos = getRandomGridPosition();
    return pos;
}