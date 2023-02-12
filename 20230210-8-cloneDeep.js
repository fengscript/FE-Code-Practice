var obj = {
  name: 'young',
  age: 18,
  item: [1, 2, 3],
  child: {
    name: 'young2',
    age: 18,
    item: [4, 5, 6],
    child: {
      name: 'young3',
    },
  },
};

function cloneDeep(obj) {
  let target = {};

  for (let key in obj) {
    if (isObject(obj[key]) && Object.keys(obj).length > 0) {
      target[key] = cloneDeep(obj[key]);
    } else if (Array.isArray(obj[key])) {
      target[key] = [...obj[key]];
    } else {
      target[key] = obj[key];
    }
  }

  return target;
}
function isObject(target) {
  return typeof target === 'object' && !Array.isArray(target);
}

const newObj = cloneDeep(obj);
console.log(newObj);
