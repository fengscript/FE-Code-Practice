function Stack() {
  let _stack = [];

  function size() {
    return _stack.length;
  }
  function push(value) {
    _stack.push(value);
    return _stack;
  }
  function pop() {
    return _stack.pop();
  }
  function elements() {
    return _stack;
  }
  function empty() {
    _stack = [];
    return _stack;
  }

  return {
    size,
    push,
    pop,
    elements,
    empty,
  };
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack.elements());

function Quene(stack) {
  let _quene = stack;

  function enter(value) {
    _quene.push(value);
  }

  function out() {
    _quene.elements().reverse().pop().reverse();
  }

  function elements() {
    return _quene.elements();
  }

  return {
    enter,
    out,
    elements,
  };
}

const quene = new Quene(stack);
quene.enter(2);
quene.enter(3);
quene.out();
quene.elements();
