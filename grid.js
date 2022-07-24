let GRID_SIZE = 21;

export function getRandomGridPosition(){
    let r =  Math.floor(Math.random() * GRID_SIZE)+ 1;
    let c =  Math.floor(Math.random() * GRID_SIZE)+ 1;
    return {x: r, y:c};
}

export function overBoard(position){
    if(position.x === GRID_SIZE+1 || position.x === 0 || position.y === GRID_SIZE+1 || position.y === 0) return true; 
    return false;
}