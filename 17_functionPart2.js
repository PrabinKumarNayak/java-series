// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500));//[200, 400, 500]
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500,1000));//[500, 1000]
//////////////////////////////////////////////////////////////////////
const user = {
    username:"prabin",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);//Username is prabin and price is 199
handleObject({
    username:"pk",
    price:66
})//Username is pk and price is 66

/////////////////////////////////////
const myNewArray= [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]//1 is index number here//400
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));//400
