function prime(){
    let c=0;
    let n=5;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("Prime");   
    }
    else{
        console.log("Composite");
        
    }
}
function display(callback){
    callback();
}
display(prime);

// method 2

function prime(n){
    let c=0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("Prime");   
    }
    else{
        console.log("Composite");
        
    }
}
function display(callback){
    callback(5);
}
display(prime);

// method 3

function prime(n){
    let c=0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            c=c+1;
        }
    }
    if(c==2){
        console.log("Prime");   
    }
    else{
        console.log("Composite");
        
    }
}
function display(callback,n){
    callback(n);
}
display(prime,5);

//method 4

function prime(n,callback){
    let c=0;
    for(let i=1; i<=n; i++){
        if(n%i==0){
            c=c+1;
        }
    }
    callback(c);
}
function checkPrime(c){
    if(c==2){
        console.log("Prime");   
    }
    else{
        console.log("Composite");
        
    }
}
function display(callback,n){
    callback(n,checkPrime);
}
display(prime,5);

//method 5
function prime(n,callback){
    let c=0;
    for(let i=1;i<=n;i++){
        if(n%i==0){
            c=c+1;
        }
    }
    callback(c);
}
function checkPrime(c){
    if(c==2){
        console.log("Prime");
    }
    else{
        console.log("Composite"); 
    }
}
function display(callback1,n,callback2){
    callback1(n,callback2);
}
display(prime,5,checkPrime);