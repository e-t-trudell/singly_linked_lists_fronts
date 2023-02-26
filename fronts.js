// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

// 1) Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// 2) Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// 3)Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
class Node {
    constructor(data){
        this.data=data; 
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            // console.log(new_node);
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
    }
    front(){
        let curNode = this.head;
        if(!this.head) {
            return null;
        }
        console.log(curNode.data);
    }
    display() {
        let runner=this.head;
        let arr = [];
        // let string = "";
        // let sum=0
        if(!this.head) {return null;}
        while(runner !== null){
            // console.log(runner.data);
            arr.push(runner.data);
            console.log(arr);
            runner=runner.next
        }
        
        console.log(arr.join(", "));
        // console.log(string);
        return null;
    }
}
let first = new SLL(5);
first.addFront(5).addFront(10);
// console.log("first",first);
// first.removeFront();
console.log("first",first);
// first.front();
first.addFront(8).addFront(10);
first.display();
