// stack using array -1 
class Stack{
  constructor(){
    this.vals= []
  }
  
  push(val){
    this.vals.push(val)
  }
  
  pop(){
    if(!this.vals.length)
      return undefined
    return this.pop()
  }
}

// stack using array -2
class stack{
  constructor(){
    this.vals=[]
  }
  shift(){
    if(!this.vals.length)
      return undefined
    return this.vals.shift()
  }
  unshift(val){
    this.vals.unshift(val)
  }
}
