class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
            this.size++;
            return true;
        }
        this.last.next = newNode;
        this.last = newNode;
        this.size++;
        return true;
    }

    dequeue(){
        if(this.size == 0){
            return undefined;
        }
        if(this.size == 1){
            let ptr = this.first;
            this.last = null;
            this.first = null;
            return ptr;
        }

        let ptr = this.first;
        this.first = this.first.next;
        this.size--;
        ptr.next = null;
        return ptr.value;
    }
}

let queue = new Queue();

queue.enqueue(1)
queue.enqueue(12)
queue.enqueue(123)
queue.enqueue(1234)

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

