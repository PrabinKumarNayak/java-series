function one(){
    const username="prabin"
    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()

if(true){
    const username = "prabin"
    if(username==="prabin"){
        const website = " github"
        //console.log(username+website);
    }
    // console.log(website);//not defined
}
// console.log(username);//not defined

/////////////////////

console.log(addone(5));//6
function addone(num){
    return num + 1
}


addtwo(5)//ERROR
const addtwo = function(num){
    return num + 2
}
