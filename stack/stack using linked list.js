class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  
  push(val){
    let newNode = new Node(val)
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  
  pop(){
    let popped
    if(this.size === 0){
      return undefined;
    }
    if(this.first == this.last){
      popped = this.first;
      this.first = null;
      this.last = null;
    }else{
      popped = this.first;
      this.first = popped.next;
      popped.next = null;
    }
    this.size--;
    return popped
    
  }
}
