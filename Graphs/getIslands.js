let arr = [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,1,0,0,0,0,0,0],
            [0,1,1,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,1,0,0,0,1,1,0],
            [0,1,0,0,0,1,0,0]];

let visited = [[0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0]];


function traverse(visited,i,j,arr){
    if((visited[i] && visited[i][j] == 1) || i < 0 || i >= arr.length || j >= arr[0].length || j < 0  || arr[i][j] == 0){
       
        return;
    }    
    visited[i][j]=1;
    traverse(visited,i+1,j,arr);
    traverse(visited,i,j+1,arr);
    traverse(visited,i-1,j,arr);
    traverse(visited,i,j-1,arr);
}

let count = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j  < arr[i].length; j++){
        if(visited[i][j] != 1 && arr[i][j] == 1){
            traverse(visited,i,j,arr);
            count++;
        }        
    }
}




console.log(count);
//console.log(visited)