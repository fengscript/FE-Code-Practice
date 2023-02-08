// function CustomObject(obj) {
//   this._propertys = {};

//   this._flatTarget = function (obj) {
//     for (let key in obj) {
//       if (key !== 'proto' && !(key in this._propertys)) {
//         this._propertys[key] = obj[key];
//       } else {
//         this._flatTarget(obj['proto']);
//       }
//     }
//   };
//   this._flatTarget(obj);

//   return {
//     ...this._propertys,
//   };
// }

function CustomObject(obj) {
  function checkPrototypeByKey(key, obj) {
    if (key in obj) {
      return Reflect.get(obj, key);
    } else {
      if (obj['proto']) {
        return checkPrototypeByKey(key, obj['proto']);
      } else {
        return undefined;
      }
    }
  }

  return new Proxy(obj, {
    get: function (target, propKey) {
      return checkPrototypeByKey(propKey, target);
    },
  });
}

var a = new CustomObject({
  data: 1,
  proto: {
    data: 2,
    proto: {
      data: 3,
      print: () => console.log('77'),
    },
  },
});
a.print(); //  77

var b = new CustomObject({
  data: 1,
  proto: {
    anotherData: 2,
  },
});
console.log(b.anotherData); // 2
