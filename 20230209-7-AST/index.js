// var babel = require("./babel_core");
var babel = require('./babel');
// import { transform } from "./babel_core";
// import * as babel from "./babel_core";

// console.log(babel)

var before = `
 var name = 'young';
`;

babel.transform(before, { ast: true }, function (err, result) {
  console.log(1);
  console.log('code', result.code);
  console.log('map', result.map);
  console.log('ast', result.ast);
});

function transform1(str) {
  // Todo
}

transform1(before); // let name = 'YOUNG18';
