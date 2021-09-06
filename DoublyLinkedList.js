class Node{
    constructor(value){
        this.value = value
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return true;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return true;
    }

    pop(){
        if(this.length == 0){
            return undefined;
        }
        let ptr = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        ptr.prev = null;
        this.length--;
        return ptr;
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        if(this.length == 1){
            this.head = null;
            this.tail = null;
            return undefined;
        }
        let ptr = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        ptr.next=null;
        ptr.prev =null;
        this.length--;
        return ptr;
    }

    unShift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return this.head;
        }
        let ptr = this.head ;
        this.head = newNode;
        newNode.next = ptr;
        ptr.prev = newNode;
        return this.head;
    }

    get(index){
        if(index <  0 || index >=  this.length){
            return null;
        }
        let distanceFromTail = this.length - index+1;
        let distanceFromHead = index+1;
        if(distanceFromTail < distanceFromHead){
            console.log('Node is closed to tail');
            let  tailCounter = this.length-1;
            let tailPtr = this.tail;
            while(tailCounter !=index ){
                tailPtr = tailPtr.prev;
                tailCounter--;
            }
            return tailPtr;
        }else{
            console.log('Node is closed to head');
            let headCounter = 0;
            let headPtr = this.head;
            while(headCounter !=index ){
                headPtr = headPtr.next;
                headCounter++;
            }
            return headPtr;
        }
    }

    set(index,val){
        if(index <  0 || index >=  this.length){
            return null;
        }
        let foundNode = this.get(index);
        foundNode.value = val;
        return foundNode;        
    }

    insert(index,val){
        let newNode = new Node(val);
        if(index < 0 || index >= this.length){
            return false;
        }
        if(index == 0){
            this.unShift(val);
            return true;
        }
        if(index == this.length-1){
            this.push(val);
            return true;
        }

        let prevNode = this.get(index-1);
        let tempNextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = tempNextNode;
        tempNextNode.prev = newNode;
        this.length++;
        return true;
    }

    removeAt(index){
        if(index < 0 || index >= this.length){
            return false;
        }
        if(this.length == index+1){
            this.pop();
            return true;
        }
        if(index == 0){
            this.shift();
            return true;
        }
        if(this.length == 0){
            return false;
        }
        let prevNode = this.get(index - 1 );
        let nodeToBeRemoved = prevNode.next;
        let nextOfNodeToBeRemoved = nodeToBeRemoved.next;
        prevNode.next = nextOfNodeToBeRemoved;
        nextOfNodeToBeRemoved.prev = prevNode;
        nodeToBeRemoved.next = null;
        nodeToBeRemoved.prev = null;
        return true;

    }

    printAllNodes(){
        console.log("------print all nodes-------");
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    printAllNodesInReverse(){
        console.log("------print all nodes in reverse-------");
        let currentNode = this.tail;
        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }
}

let doubleList = new DoublyLinkedList();
doubleList.push(1);
doubleList.push(12);
doubleList.push(34);
doubleList.push(45);
doubleList.push(55);

doubleList.printAllNodes();
doubleList.printAllNodesInReverse();


console.log('getting '+doubleList.get(2).value);
doubleList.removeAt(0);

doubleList.printAllNodes();
doubleList.printAllNodesInReverse();




