
class Stack {
  stack = [];

  size() {
    return this.stack.length;
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    this.stack.pop();
  }
  elements() {
    return this.stack;
  }
  empty() {
    this.stack = [];
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.pop();
// console.log(stack.elements());

class Quene {
  quene;

  constructor(stack) {
    this.quene = stack;
  }

  enter(value) {
    this.quene.push(value);
  }

  out() {
    this.quene?.reverse().pop().reverse();
  }
}
