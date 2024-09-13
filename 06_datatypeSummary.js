//Primitive

//7 types : String, Number, Boolean, Null, Undefined, symbol, BigInt

//* JAVA SCRIPT is a dynamic typed language, Bcz we can assign more than one value to a single variable.
// ex- let a=5;
//     a=10;

const score= 100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null // typeof(outsideTemp)=Object
let userEmail;   //undefined

const id = symbol('123')
const anotherId= symbol('123')
console.log(id=== anotherId); //false

bigNumber=4354643465635344323123432423;
console.log(typeof(bigNumber));


//Reference (Non primitive)

//Array, Objects, Function

//types of non primitive datatypes are "object", except function

const heros=("saktiman","najragha","jfdn")

let myObj={
    name: "prabin",
    age:22,
};//Object but it is called "function object"

const myFunction = function(){
    console.log("Hello World");
}//Object but it is called "function object"

console.log(typeof(myFunction));//Function but it is called "object function"

