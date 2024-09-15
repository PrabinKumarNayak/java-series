const name="prabin"
const repoCount = 50

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//Hello my name is prabin and my repo count is 50

const gameName= new String('pra-bin-gm'); //new is keyword to object

//IN CONSOLE SCREEN OF CHROME
// > const gameName= new String('prabingm');
// < undefined
// > gameName
// <▾ String {'prabingm'} i
// 0: "p"            (KEY:"VALUE")
// 1: "p"            (string is not an array it is an object)
// 2: "a"
// 3: "b"
// 4: "i"
// 5: "n"
// 6: "g"
// 7: "m"
// length: 8
//▾[[Prototype]]: String
//[[Prototype]]
// : 
// String
// anchor
// : 
// ƒ anchor()
// at
// : 
// ƒ at()
// big
// : 
// ƒ big()
// blink
// : 
// ƒ blink()
// bold
// : 
// ƒ bold()
// charAt
// : 
// ƒ charAt()
// charCodeAt
// : 
// ƒ charCodeAt()
// codePointAt
// : 
// ƒ codePointAt()
// concat
// : 
// ƒ concat()
// constructor
// : 
// ƒ String()
// endsWith
// : 
// ƒ endsWith()
// fixed
// : 
// ƒ fixed().............................
// [[PrimitiveValue]]: "prabingm"


console.log(gameName[0]);//OUTPUT->p
console.log(gameName.__proto__);//{}

console.log(gameName.length);//8
console.log(gameName.toUpperCase());//PRABINGM
console.log(gameName.charAt(5));//n     0,1,2,3.......
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,4);
console.log(newString);//prab
//we can't start substring from any -ve value bcz it's default value is 0

const anotherString = gameName.slice(-6,4);
console.log(anotherString);//ab

const newStringOne="   prabin   "
console.log(newStringOne);//   prabin   
console.log(newStringOne.trim());//prabin

const url = "https://prabin.com/prabin%20nayak"

console.log(url);//https://prabin.com/prabin%20nayak

console.log(url.replace('%20', '-'));//https://prabin.com/prabin-nayak

console.log(url.includes('sundar'));//false

console.log(gameName.split('-'));//[ 'pra', 'bin', 'gm' ]
