let score= '33';

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=  Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN (not a number)
//true=>1; false=> 0

let isLoggedIn= 0;

let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true
// 0=> false
// ""=>false
// "any string"=>true

let someNumber=undefined

let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//any thing can successfully converted into string