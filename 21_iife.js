//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
})();//DB CONNECTED

( ()=> {
    console.log(`DB CONNECTED TWO`);
})()