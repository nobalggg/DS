let arr = [1,13,4,47,9,0];

function mergeSort(arr){
   // console.log('-> '+arr)
    if(arr.length <=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let res1 = mergeSort(arr.slice(0,mid));
    let res2 = mergeSort(arr.slice(mid));
   // console.log(res1,res2);
    return merge(res1,res2);
    //console.log(finalArray)
}

function merge(arrayOne,arrayTwo){
    let ptr1 = 0;
    let ptr2 = 0;
    let finalArray = [];
    // if(!arrayOne && !arrayTwo){
    //     return [];
    // }
    // if(!arrayTwo){
    //     return arrayOne;
    // }
    // if(!arrayOne){
    //     return arrayTwo;
    // }
    while(ptr1 < arrayOne.length && ptr2 < arrayTwo.length){
        if(arrayOne[ptr1] < arrayTwo[ptr2]){
            finalArray.push(arrayOne[ptr1]);
            ptr1++;
        }else{
            finalArray.push(arrayTwo[ptr2]);
            ptr2++;
        }
    }
    if(ptr1 < arrayOne.length){
        let localArr = arrayOne.splice(ptr1,arrayOne.length);
        finalArray = finalArray.concat(localArr);
    }
    if(ptr2 < arrayTwo.length){
        let localArr = arrayTwo.splice(ptr2,arrayTwo.length);
        finalArray = finalArray.concat(localArr);
    }
    //console.log(finalArray)
    return finalArray;
}

console.log(mergeSort([1,13,4,47,9,10]));
//console.log(arr);
