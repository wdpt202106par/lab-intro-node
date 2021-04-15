class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a - b);  
  }

  get(pos) {
    if (pos > this.length){
      throw new Error('OutofBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)

  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    let res = 0
    for (let i = 0; i < this.length; i++) {
      res += this.items[i]
    }
    return res
  }

  avg() {
    if (this.length == 0){
      throw new Error('EmptySortedList');
    }
    let res = 0
    for (let i = 0; i < this.length; i++) {
      res += this.items[i]
    }
    return res / this.length
  }
}

module.exports = SortedList;
