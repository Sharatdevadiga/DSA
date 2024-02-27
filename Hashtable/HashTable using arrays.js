class HashTable{
  constructor(){
    this.table = new Array(127);
    this.size = 0;
  }
  
  _hash(key){
    let hashVal = 0;
    for(let i = 0; i< Math.min(key.length , 100); i++){
      hashVal += key[i].charCodeAt(0)
    }
    return hashVal% this.table.length;
  }
  
  set(key, val){
    const idx = this._hash(key);
    if(!this.table[idx]){
      this.table[idx] = [[key, val]]
      
    }else{
      for(let i = 0; i< this.table[idx].length; i++){
        if(this.table[idx][i][0] === key){
          this.table[idx][i][1] = val;
        }
      }
    }
    return ++this.size;
  }
  
  get(key){
    const idx = this._hash(key);
    if(!this.table[idx]){
      return undefined
    }
    
    for(let i = 0; i< this.table[idx].length; i++){
      if(this.table[idx][i][0] === key){
        return this.table[idx][i][1];
      }
    }
    return undefined
  }
  
  delete(key){
    const idx = this._hash(key);
    if(!this.table[idx]){
      return undefined;
    }
    
    for(let i = 0; i< this.table[idx].length; i++){
      if(this.table[idx][i][0] === key){
        this.table[idx].splice(i, 1);
        return --this.size;
      }
    }
  }
  
  entries(){
    let result = []
    
    for(let i = 0; i< this.table.length; i++){
      result.push([i, [...this.table[i]]])
    }
    return result;
  }
  
}
