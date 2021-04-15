class SortedList {
  constructor(items, length) {
    this.items=[];
    this.length=this.items.length;
  }
  add(item) { 
    this.items.push(item);
    this.length++;
    this.items.sort(function (a,b){
      return a-b;
    })  
  }

  get(pos) {
    if (pos<=this.length-1){
    return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length !== 0){
      return this.items[this.length-1];
    } else {
      throw new Error('EmptySortedList');
    }
  }
  min() {
    if (this.length !== 0){
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length===0){
      return 0;
    } else {
      this.items.reduce((acc,currentVal)=>acc+currentVal,0)
    }
  }

  avg() {
    if (this.length===0){
      return 0;
    } else {
      this.sum()/this.length;
    }
  }
}

module.exports = SortedList;
