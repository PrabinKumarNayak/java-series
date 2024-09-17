const score = 400

const balance = new Number(100)//new= keyword
console.log(score);//400
console.log(balance);//[Number: 100]

console.log(balance.toString());//100
console.log(typeof(balance.toString()));//string

console.log(balance.toFixed(3));//100.000
console.log(typeof(balance.toFixed(3)));//string

const otherName = 23.8967
console.log(otherName.toPrecision(1));//for toPrcision(1)=2e+1 ,for 2=24 ,for 3=23.9

const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

// ******* MATHS *******//

console.log(Math);//Object [Math] {}
console.log(Math.abs(-5));//in answer the sign will be change //OUTPUT= 5
console.log(Math.round(4.2));//roundoff 4
console.log(Math.ceil(4.2));//ceiling value(upper value) 5
console.log(Math.floor(4.9));//floor value 4
console.log(Math.min(4,3,2,8));//2
console.log(Math.max(4,3,2,8));//8

console.log(Math.random());//0.8187898933459965    ans will allways in between 0 to 1, it will change with each run

console.log(Math.random()*10+1);//1.8653425655118006    ans will allways in between 0 to 1, it will change with each run

console.log((Math.random()*10)+1);//5.687916861013357
console.log(Math.floor(Math.random()*10)+1);//2

const min =10
const max  = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);//19