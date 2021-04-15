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

    return Math.max(...this.items)

    // if (this.items === 0){
    //   throw new Error('EmptySortedList');
    // }
  }

  min() {
    // if (items === 0){
    //   throw new Error('EmptySortedList');
    // }

    return Math.min(...this.items)
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
