let arr = [5,6,12,1,2];

function selectionSort(arr){
    let min = Infinity;
    let minIndex = null;
    for(let a = 0; a < arr.length; a++){
        for(let i = a; i < arr.length;  i++){
            if(arr[i] < min){
                min = arr[i];
                minIndex = i;
            }  
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[a];
        arr[a] = temp;
        console.log(arr);
        minIndex = null;
        min = Infinity;
    }
    console.log(arr);
   
}

function optimizedSelectionSort(arr){
    let min = Infinity;
    let minIndex = null;
    for(let a = 0; a < arr.length; a++){
        minIndex = null;
        min = Infinity;
        for(let i = a; i < arr.length;  i++){
            if(arr[i] < min){
                min = arr[i];
                minIndex = i;
            }  
        }
        if(a != minIndex){
            let temp = arr[minIndex];
            arr[minIndex] = arr[a];
            arr[a] = temp;
            console.log(arr);
        }
       
    }
    console.log(arr);
}

optimizedSelectionSort(arr);
