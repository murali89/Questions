var assert = require('assert');

function Stack() {
  this._count = 0;
  this._data = [];

  this.push = function (num) {
    this._data[this._count++] = num;
  };

  this.peek = function () {
    if (this._count == 0) {
      throw "Stack: No elements to peek"
    }
    return this._data[this._count - 1];
  };

  this.pop = function () {
    if (this._count == 0) {
      throw "Stack: Underflow error"
    }

    this._count--;
    return this._data[this._count];
  };

  this.count = function () {
    return this._count;
  };
}

function main() {
  testLIFO();
}

function testLIFO() {
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  assert.equal(stack.pop(), 2);
  assert.equal(stack.pop(), 1);
}

main();

module.exports = { Stack: Stack };
