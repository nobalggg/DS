class Heap{
    constructor(){
        this.values = [];
    }

    push(val){
        if(this.values.length == 0){
            this.values.push(val);
            return;
        }
        this.values.push(val);
        let lastIndex  = this.values.length - 1;
        let parentIndex = Math.floor((lastIndex-1 )/2);
        while(this.values[parentIndex] < this.values[lastIndex]){
            let temp = this.values[parentIndex];
            this.values[parentIndex] = this.values[lastIndex];
            this.values[lastIndex] = temp;
            lastIndex = parentIndex;
            parentIndex = Math.floor((lastIndex - 1 )/2);   
        }
        
    }

    extractMax(){
        console.log("---------------extracting max-----------");
        let lastIndex = this.values.length -1 ;
        let startIndex = 0;
        this.swap(startIndex,lastIndex);
        this.values[this.values.length - 1] = null
       

        while(true){
            let leftChildIndex = 2 * startIndex + 1;
            let rightChildIndex = 2 * startIndex + 2;
            if((this.values[leftChildIndex] < this.values[startIndex] 
                && this.values[rightChildIndex] < this.values[startIndex])
                ||(!this.values[leftChildIndex] && !this.values[rightChildIndex])){
                
               break;
            }
            else if(this.values[leftChildIndex] && !this.values[rightChildIndex]){
                this.swap(startIndex,leftChildIndex);
                startIndex = leftChildIndex;
            }
            else if(!this.values[leftChildIndex] && this.values[rightChildIndex]){
                this.swap(startIndex,rightChildIndex);
                startIndex = rightChildIndex;
            }
            else if(this.values[leftChildIndex] - this.values[rightChildIndex] > 0){
                this.swap(startIndex,leftChildIndex);
                startIndex = leftChildIndex;
            }else if(this.values[leftChildIndex] - this.values[rightChildIndex] < 0){
                this.swap(startIndex,rightChildIndex);
                startIndex = rightChildIndex;
            }
           
        }
    }

    swap(i,j){
        let temp = this.values[i];
        this.values[i] = this.values[j];
        this.values[j] = temp;
    }

}

let heap = new Heap();
heap.push(10);
heap.push(11);
heap.push(12);
heap.push(13);
heap.push(14);
heap.push(15);
heap.push(16);
heap.push(17);
console.log("max "+heap.extractMax());


