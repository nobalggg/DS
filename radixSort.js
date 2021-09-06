let arr = [192,20,2003,47,5,65,98];

function decideBucket(num,place) {
    let remainder;
    place++;
    for(let i = 0; i < place; i++){
        remainder = num % 10;
        num = Math.floor(num / 10);
    }
    return remainder;
}

function maxDigits(arr){
    let maxLength = 0;
    for(let item in arr){
        let length = arr[item].toString().length;
        if(length > maxLength){
            maxLength = length;
        }
    }
    return maxLength;
}


function radixSort(arr){
    let buckets = [];
    let maxDigitsInList  = maxDigits(arr);
    for(let  i = 0 ; i  < maxDigitsInList; i++){
        buckets = [];
        for(let j = 0 ; j  < arr.length ; j++){
            let bucketNum = decideBucket(arr[j],i);
            
            if(buckets[bucketNum]){
                buckets[bucketNum].push(arr[j])
            }else{
                buckets[bucketNum] = [arr[j]];
            }
        }
        //console.log(buckets)
        //construct back array
        arr = [];
        console.log(arr);
        // for(let j = 0; j < buckets.length;j++){
        //     if(buckets[j]){
        //         for(let  k = 0; k < buckets[j].length;k++){
        //             if(buckets[j] && buckets[j][k]){
        //                 arr.push(buckets[j][k]);
        //             }
        //         }
        //     }
            
        // }
        arr = arr.concat(...buckets);
        //console.log('->'+arr)
    }  
    return arr;
}



console.log(radixSort(arr));