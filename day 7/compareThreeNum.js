let a=10;
let b=12;
let c=15;
console.log("First Number=",a);
console.log("Second Number=",b);
console.log("Third Number=",c);

if(a>b){
    if(a>c){
    console.log(a,"is greatest");
    }
    else{
        console.log(c,"is greatest");
        
    }
}
else{
    if(b>c){
        console.log(b,"is greatest");
        }
        else{
            console.log(c,"is greatest");
            
        }
}