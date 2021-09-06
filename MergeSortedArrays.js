let arrayOne = [1,5,7,8,9];
let arrayTwo = [2,3,4,20,30];

function mergeTwoSortedArrays(arrayOne,arrayTwo){
    let ptr1 = 0;
    let ptr2 = 0;
    let finalArray = [];
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
        let localArr = arrayOne.splice(ptr1,arrayOne.length-1);
        finalArray = finalArray.concat(localArr);
    }
    if(ptr2 < arrayTwo.length){
        let localArr = arrayTwo.splice(ptr2,arrayTwo.length-1);
        finalArray = finalArray.concat(localArr);
    }
    return finalArray;
}

console.log(mergeTwoSortedArrays(arrayOne,arrayTwo));