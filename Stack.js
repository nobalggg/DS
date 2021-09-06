class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}


class Stack{
    constructor(){
        this.head = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.last = newNode;
            
            return  ++this.size;
        }

        let ptr = this.head;
        this.head = newNode;
        this.head.next = ptr;
        return ++this.size;
       
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        if(this.size == 1){
            let ptr = this.head;
            this.head = null;
            this.last = null;
            this.size--;
            return ptr;
        }
        let ptr = this.head;
        this.head = this.head.next;
        ptr.next = null;
        this.size--;
        return ptr.value;
    }

    printStack(){
        let ptr = this.head;
        console.log('---------prntng stack-------');
        while(ptr){
            console.log(ptr.value);
            ptr = ptr.next;
        }
    }
}


let stack = new Stack();
stack.push('hello');
stack.push('Nobal');
stack.push('kaise');
stack.push('are');


stack.printStack();


stack.pop();
console.log('Popped '+stack.pop());
stack.printStack();