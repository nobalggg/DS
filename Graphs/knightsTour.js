/**
 * 
 * This is an incomplete problem
 */


let chessBoard = Array(8).fill().map(() => Array(8).fill(0));
let visited = Array(8).fill().map(() => Array(8).fill(0));


for(let i = 0; i < chessBoard.length; i++){
    for(let j = 0; j< chessBoard[i].length;j++){
        traverse(i,j,visited);
    }
}

function traverse(i,j,visited,psf){
    if(i < 0 || i >= visited.length || j < 0 || j >=visited[0].length || visited[i][j] == 1 ){
        return;
    }
    
    visited[i][j] = 1;
    if(checkIfAllVisited(visited)){
        console.log('here');
        //.log(visited)
    }
    traverse(i+1,j-2,visited);
    traverse(i-1,j-2,visited);
    traverse(i-2,j-1,visited);
    traverse(i-2,j+1,visited);
    traverse(i+2,j-1,visited);
    traverse(i+2,j+1,visited);
    traverse(i+1,j+2,visited);
    traverse(i-1,j+2,visited);
    visited[i][j] = 0;
}

function checkIfAllVisited(visited){
    for(let i = 0; i < visited.length; i++){
        for(let j = 0; j< visited[i].length;j++){
            if(visited[i][j]==0)return false;
        }
    }
    return true;      
}