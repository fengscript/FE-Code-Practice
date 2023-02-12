// Find the Midpoint of linklist
// 这里面假设这个链表都是奇数的长度，比如长度为7的链表，第四个节点就是middle point。比如长度为3的链表，第二个节点就是middle point。

// 要求：
// 1. 不能通过size的长度来计算！比如先计算链表长度，然后循环链表时看index是否等于长度的中位数。当然把链表转成数组，再取数组的中位数来取到middle point也是一样的是通过size的长度计算的。

const linklist1 = {
  head: {
    index: 1,
    next: {
      index: 2,
      next: {
        index: 3,
        next: null,
      },
    },
  },
};

const linklist2 = {
  head: {
    index: 1,
    next: {
      index: 2,
      next: {
        index: 3,
        next: {
          index: 4,
          next: {
            index: 5,
            next: null,
          },
        },
      },
    },
  },
};

function findMidPoint(linklist) {
  let array = recursionObj(linklist.head);

  while (array.length !== 1) {
    array.shift();
    array.pop();
  }

  function recursionObj(obj) {
    if (obj.next !== null) {
      return [obj.index].concat(recursionObj(obj.next));
    } else {
      return obj.index;
    }
  }

  return array[0];
}

findMidPoint(linklist1);
findMidPoint(linklist2);
