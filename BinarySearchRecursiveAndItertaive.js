let arr =  [1,2,3,4,5,6,7,8,9,10];

function binarySearch(arr,item){
        let mid = Math.floor(arr.length/2);
        if(mid < 1 ){
            return false;
        }
        if(arr[mid] == item){
            return true;
        }else if(arr[mid] > item){
           let newArr = arr.slice(0,mid);
           return binarySearch(newArr,item);
        }else{
            let newArr = arr.slice(mid,arr.length);
            return binarySearch(newArr,item);
        }
}




function iterativeSearch(arr,item){
    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor(end/2);
    console.log(middle)
    while(start <= end){
        if(arr[middle] == item){
            return true;
        }
        if(arr[middle] < item){
            start = middle+1;
        }else if(arr[middle] > item){
            end = middle -1;
        }
        middle = Math.floor((start+end)/2);
        console.log(middle,start,end,arr[middle])        
    }
    return false;
}

console.log(iterativeSearch(arr,-17));