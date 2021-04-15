class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length += 1;
  }
  get(pos) {
    if (this.length < pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  sum() {
    let result = this.items.reduce(function (acc, item) {
      return acc + item;
    }, 0);
    return result;
  }
  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let average = this.items.reduce(function (acc, item) {
          return acc + item;
        }, 0) / this.length;
      return average;
    }
  }
}

module.exports = SortedList;
