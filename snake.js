import { getInput } from "./input.js";

export const SNAKE_SPEED = 6;


let snakeBody = [{x:11, y:11}]

export function update(){
    let input = getInput();
    for(let i =snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }

    snakeBody[0].x +=input.x;
    snakeBody[0].y +=input.y;

}

export function draw(board){
    snakeBody.forEach(seg =>{
        let newBodyPart = document.createElement("div");
        newBodyPart.setAttribute("class", "snake")
        newBodyPart.style.gridRowStart = seg.y;
        newBodyPart.style.gridColumnStart = seg.x;
        board.appendChild(newBodyPart)

    })
}


export function onSnake(pos){
   return snakeBody.some(seg =>{

        return equalPosition(seg,pos);
    })
}

export function expandSnake(amount){
    for(let i = 0; i<amount; i++)
        snakeBody.push({...snakeBody[snakeBody.length-1]})
}

export function getSnakeHead(){
    return snakeBody[0];
}


function equalPosition(pos1, pos2){
    return pos1.x == pos2.x && pos1.y == pos2.y;
}

export function snakeIntersection(){
    for(let i = 1; i<snakeBody.length; i++)
        if(equalPosition(snakeBody[0], snakeBody[i])){
            return true;
        }
        return false;
}