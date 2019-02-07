var assert = require('assert');
var Stack = require('./Stack').Stack;

function QueueUsingStack() {
  this._dataStack = new Stack();
  this._auxStack = new Stack();

  this.enqueue = function (num) {
    this._dataStack.push(num);
  }

  this.dequeue = function () {
    if (this._auxStack.count() === 0) {
      // copy from data stack to aux stack
      while (this._dataStack.count() > 0) {
        var n = this._dataStack.pop();
        this._auxStack.push(n);
      }
    }

    if (this._auxStack.count() === 0) {
      throw 'QueueUsingStack: No elements'
    }

    return this._auxStack.pop();
  }

  this.count = function () {
    return this._auxStack.count() + this._dataStack.count();
  }
}

function main() {
  testFIFO();
}

function testFIFO() {
  var q = new QueueUsingStack();
  q.enqueue(1);
  q.enqueue(2);
  assert.equal(q.dequeue(), 1);
  assert.equal(q.dequeue(), 2);
  console.log('QueueUsingStack: testFIFO() successful');
}

main();

