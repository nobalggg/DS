let arr = [5,6,12,1,2];

function normalBubbleSort(arr){
    for(let j = arr.length; j > 0;j--){
        for(let i = 0; i < j;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
}

function optimizeBubbleSort(arr){
    let noSwaps;
    for(let j = arr.length; j > 0;j--){
        noSwaps = true;
        for(let i = 0; i < j;i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                noSwaps = false;        
            }
        }
        if(noSwaps){    
            break;
        }
    }
}

//normalBubbleSort(arr);
optimizeBubbleSort(arr)



