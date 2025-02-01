let n= 364;
let lastDigit=n%10;
let division= parseInt(n/10);
let secondDigit= division%10;
let firstDigit=parseInt(division/10);
let rev=100*lastDigit+10*secondDigit+firstDigit;
console.log("Number=",n);
console.log("Last Digit=",lastDigit);
console.log("Second Digit=",secondDigit);
console.log("First Digit=",firstDigit);
console.log("Reverse of the number is :",rev);




