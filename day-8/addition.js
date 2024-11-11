// const summation = require ("./operation");
// summation();


// const add = require ("./operation");
// add(23,34);

// const sub = require ("./operation");
// sub(90,80);

// const add = require ("./operation");
// console.log(add);//{ add: [Function: add], sub: [Function: sub] }
// console.log(typeof add);

const myOpr = require ("./operation");
console.log(myOpr);//{ add: [Function: add], sub: [Function: sub] }
console.log(typeof myOpr);
myOpr.add(50,70);//120
myOpr.sub(50,70);//-20
