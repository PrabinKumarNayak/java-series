const person ={
    "first Name": "Ram",
    lastName: "Sahu",
    age: 11
}
person.gender="male";
// delete person.age;//it will delete the respective property
let key = "course";
let value = "javascript";
person[key]=value;
console.log(person);
console.log(typeof (person));
console.log(person["first Name"]);

// console.log(person.firstName);



let arr1=[1,2,3,4];
let arr2=[1,2,7,4];
let arr3=[];
arr3[0]=arr1[0];
arr3[1]=arr1[1];
arr3[2]=arr1[2];
arr3[3]=arr1[3];
arr3[4]=arr2[0];
arr3[5]=arr2[1];
arr3[6]=arr2[2];
arr3[7]=arr2[3];

console.log(arr3);
