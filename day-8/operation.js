// function add(){
//     let a=50;
//     let b=70;
//     let s=a+b;
//     console.log("sum is:",s); 
// }
// module.exports = add;


function add(a,b){
        let s=a+b;
        console.log("sum is:",s); 
    }
    // module.exports = add;

function sub(a,b){
        let s=a-b;
        console.log("subtraction is:",s); 
    }
    // module.exports = sub;


    module.exports={add,sub};