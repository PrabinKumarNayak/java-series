console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//The reason is that an equality check == and Comparisions >,<,<=,>= works differently.
//Compression convert null to a number , treating it as 0.
//That's why (3)- null>=0 is true and (1)- null>0 is false.

//we can't get the predictable value always because we do the comparision between two different datatypes, which is not a good practice.


console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);

// ===(strict check)

console.log("2"===2);//false