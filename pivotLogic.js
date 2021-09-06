let arr = [16,2,15,7,19,20,3];

function pivotIndex(arr,start = 0,end=arr.length){
    let pivotIndex = start;
    for(let i = 1 ; i < end ; i++){
        if(arr[i] < arr[0]){
            pivotIndex++;
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i]=temp;
            
        }
    }

    let temp = arr[pivotIndex];
    arr[pivotIndex] = arr[0];
    arr[0] = temp;
    console.log(arr);
    return pivotIndex;
}

console.log(pivotIndex(arr));