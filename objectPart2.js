const myOper1 = {
    add: function(a,b){
        console.log(a+b);
    },
    sub: function(a,b){
        console.log(a-b);
    }
}




const myOper2 = {
    mul: function(a,b){
        return(a*b);
    },
    div: function(a,b){
        return(a/b);

    }
}

const arithOpr ={ ...myOper1, ...myOper2};
// console.log(arithOpr);
// console.log(arithOpr.add(10,20));//

// console.log(arithOpr);
// const addition = arithOpr.add;
// addition(10,20);

//object destructuring 
console.log(arithOpr);
const {add,sub,multiplication,div} = arithOpr;
console.log(multiplication(10,20));
