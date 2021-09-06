class Node{
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;    
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head)return undefined;
        if(this.length == 1){
            let value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        let ptr = this.head;
        let tailPtr = null;
        while(ptr.next){
            tailPtr = ptr;
            ptr = ptr.next;
        }
        tailPtr.next = null;
        this.length--;
        
        return ptr.value;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        this.ptr = this.head;
        this.head = this.head.next;
        this.ptr = null;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return this.head
    }

    unShift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }
        
        let ptr = this.head;
        this.head = newNode;
        this.head.next = ptr;
        this.length++;
        return this.head;
    }

    get(index){
        if(index < 0 || index >= this.length){return null;}
        if(index == 0){
            return this.head;
        }
        let num = 0;
        let currentNode = this.head
        while(num != index){
            num++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(index,val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.value = val;
            return true;
        }
        return false;
    }

    insert(index,val){
        if(this.length < index || index < 0){
            return undefined;
        }
        if(index == 0){
            this.unShift(val);
            return;
        }if(index == this.length){
            return this.push(val);
        }
        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index <  0|| index >= this.length){
            return false;
        }
        if(index == 0){
            this.shift();
            return true;
        }
        if(this.length == 1 && index == 0){
            this.head = null;
            this.tail = null;
            this.length--;
            return true;
        }
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = temp.next;
        temp = null;
        this.length--;
        return true;
    }

    reverse(){
        let currentNode = this.head;
        let prev;
        let next;
        while(currentNode){
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
            
        }
        this.head = prev;
    }

    printAllNodes(){
        let ptr = this.head;
        while(ptr){
            console.log(ptr.value);
            ptr = ptr.next;
        }
    }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log("----------Print all nodes-------------")
list.printAllNodes();
// console.log("----------Popped up nodes-------------")

// console.log("----------Print all nodes-------------")
// list.printAllNodes();
console.log("---------Reversing-------------")
list.reverse();
console.log("----------Print all nodes-------------")
list.printAllNodes();


