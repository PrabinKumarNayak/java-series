//array

const myArray = [0,1,2,3,4,true,"prabin"];//element can be of different types
const myArr = [0,1,2,3,4,5];
const myHeros = ["Saktimann","nagarjun"];

const myArr2 = new Array(1,2,3,4);
console.log(myArr[0]);//0th element is 0

//Array Method

myArr.push(6)
console.log(myArr);//[
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
myArr.pop()//last element of the array will pop
console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]

myArr.unshift(9);
console.log(myArr);//[ 9, 0, 1, 2, 3, 4, 5 ]

myArr.shift();
console.log(myArr);//[0, 1, 2, 3, 4, 5 ]

console.log(myArr.includes(9));//false
console.log(myArr.indexOf(19));//-1 array don't have -1 as index number

const newArr =myArr.join()

console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);//0,1,2,3,4,5 type of newArr is   string. join() convert it into string

//slice , splice
console.log("A", myArr);//A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3)//it include 1 ,2 but not 3
console.log(myn1);//[ 1, 2 ]
console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log("C", myArr);//C [ 0, 4, 5 ]   //splice manipulates original operation 
console.log(myn2);//[ 1, 2, 3 ]






