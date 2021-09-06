let arr = [3,2,1,5,-1];

function improvedInsertionSort(arr){
    for(let  i = 1 ; i <  arr.length ; i++){
        let local = i;
        for(let  j = local-1; j >=0,arr[j] > arr[local];j--,local--){
            //if(arr[j] > arr[local]){
                let temp  = arr[j];
                arr[j] = arr[local];
                arr[local] = temp;
            //}
        }
    }
}

improvedInsertionSort(arr);
console.log(arr);