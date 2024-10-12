function sayMyName(){
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("b");
    console.log("i");
    console.log("n");
}
sayMyName()// p r a b i n//sayMyName (function definition) itself call as function reference without paranthesis , but with paranthesis it is known as function execution

function addTwoNumbers(number1, number2){//parameters
    console.log(number1 + number2); 
}
addTwoNumbers(3,"4");//arguments


// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Prabin"))//Prabin just logged in

function loginUserMessage(username){
    if(username===undefined)/*or//0101if(!username)*/{
        console.log("Please enter a username");
        return;//to not execute the next line
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())//undefined