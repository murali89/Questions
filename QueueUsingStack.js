var assert = require('assert');
var Stack = require('./Stack').Stack;

function QueueUsingStack() {
  this.dataStack = new Stack();
  this.auxStack = new Stack();

  this.enqueue = function (num) {
    this.dataStack.push(num);
  }

  this.dequeue = function () {
    if (this.auxStack.count() === 0) {
      // copy from data stack to aux stack
      while (this.dataStack.count() > 0) {
        var n = this.dataStack.pop();
        this.auxStack.push(n);
      }
    }

    if (this.auxStack.count() === 0) {
      throw 'QueueUsingStack: No elements'
    }

    return this.auxStack.pop();
  }

  this.count = function () {
    return this.auxStack.count() + this.dataStack.count();
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
}

main();

