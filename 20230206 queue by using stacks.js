class Stack {
  _stack = [];

  size() {
    return this._stack.length;
  }
  push(value) {
    this._stack.push(value);
  }
  pop() {
    return this._stack.pop();
  }
  elements() {
    return this._stack;
  }
  empty() {
    this._stack = [];
  }
}

class Quene {
  _stack1;
  _stack2;
  _dequeneValue;
  _queneHead;
  constructor() {
    this._stack1 = new Stack();
    this._stack2 = new Stack();
  }
  enquene(value) {
    this._stack1.push(value);
  }
  dequene() {
    while (this._stack1.size() !== 1) {
      this._stack2.push(this._stack1.pop());
    }
    this._dequeneValue = this._stack1.pop();

    while (this._stack2.size() !== 0) {
      this._stack1.push(this._stack2.pop());
    }
    return this._dequeneValue;
    // this._quene.reverse().pop().reverse();
  }
  elements() {
    return this._stack1._stack;
  }
  empty(){
    while (this._stack1.size() !== 0) {
      this._stack1.pop();
    }
    return this._stack1;
  }
  peek() {
    while (this._stack1.size() !== 1) {
      this._stack2.push(this._stack1.pop());
    }
    this._queneHead = this._stack1.elements()[0];
    this._stack2.push(this._stack1.pop());
    while (this._stack2.size() !== 0) {
      this._stack1.push(this._stack2.pop());
    }

    return this._queneHead;
  }
}

const quene = new Quene();
quene.enquene(1);
quene.enquene(2);
quene.enquene(3);
console.log(quene.elements())
console.log('dequeue:', quene.dequene())
console.log(quene.elements())
console.log('peek:', quene.peek())

/**
 * test stack
const stack = new Stack();
const stack2 = new Stack();
stack1.push(1);
stack2.push(2);
console.log(stack);
console.log(stack2);
 */
