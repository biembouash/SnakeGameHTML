window.addEventListener("keydown", Handleinput);

let lastMove = {x:0, y:0}
let moveDirection = {x:0,y:1}


function Handleinput(key){

    switch(key.key){
        case "w" :  
        case "ArrowUp":
            if(lastMove.y ===  1) break;
            moveDirection = {x:0, y:-1};
            break;
        case "d" :
        case "ArrowRight":
            if(lastMove.x ===  -1) break;
            moveDirection = {x:1, y:0};
            break;
        case "s":
        case "ArrowDown":
            if(lastMove.y ===  -1) break;
            moveDirection= {x:0, y:1};
            break;
        case "a":
        case "ArrowLeft":
            if(lastMove.x ===  1) break;
            moveDirection = {x:-1, y:0};
            break;
    }

}

export function getInput(){
    lastMove = moveDirection;
    return moveDirection;
}