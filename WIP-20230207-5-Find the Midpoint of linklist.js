// Find the Midpoint of linklist
// 这里面假设这个链表都是奇数的长度，比如长度为7的链表，第四个节点就是middle point。比如长度为3的链表，第二个节点就是middle point。

// 要求：
// 1. 不能通过size的长度来计算！比如先计算链表长度，然后循环链表时看index是否等于长度的中位数。当然把链表转成数组，再取数组的中位数来取到middle point也是一样的是通过size的长度计算的。


const linklist1 = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  },
};

const linklist2 = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

function findMidPoint (linklist) {
  
}