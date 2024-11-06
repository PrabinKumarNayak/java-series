//Armstrong
let n= 153;
let m=n;
let c=0;
let s=0;
while(n!=0){
    c=c+1;
    n= parseInt(n/10);
}
n=m;
for(let i=1;i<=c;i++){
    let d= n%10;
    let p=1;
    for(let j=1;j<=c;j++){
        p=p*d;
    }
    s=s+p;
    n=parseInt(n/10);
}
if(m==s){
    console.log("Armstrong");
}else{
    console.log("not an armstrong");
}

//armstrong using callbavk function
function checkArmstrong(){


let n= 153;
let m=n;
let c=0;
let s=0;
while(n!=0){
    c=c+1;
    n= parseInt(n/10);
}
n=m;
for(let i=1;i<=c;i++){
    let d= n%10;
    let p=1;
    for(let j=1;j<=c;j++){
        p=p*d;
    }
    s=s+p;
    n=parseInt(n/10);
}
if(m==s){
    console.log("Armstrong");
}else{
    console.log("not an armstrong");
}