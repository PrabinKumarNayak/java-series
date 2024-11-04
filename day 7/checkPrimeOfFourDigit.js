let n=5223;
let fo=n%10;
let t1=parseInt(n/10);
let th= t1%10;
let t2=parseInt(t1/10);
let se=t2%10;
let fi=parseInt(t2/10);
console.log("Number=",n);
console.log("Fourth Digit=",fo);
console.log("Third Digit=",th);
console.log("Second Digit=",se);
console.log("First Digit=",fi);
let c=0;
let d=0;
let e=0;
let f=0;

let i=1;
let j=1;
let k=1;
let l=1;

for( i=1;i<=fi;i++){
    if(fi%i==0){
        c=c+1;
    }
}
if(c==2){
    console.log("First digit",fi,"is prime");
    
}


for( j=1;j<=se;j++){
    if(se%j==0){
        d=d+1;
    }
}
if(d==2){
    console.log("Second digit",se,"is prime");
    
}


for( k=1;k<=th;k++){
    if(th%k==0){
        e=e+1;
    }
}
if(e==2){
    console.log("Third digit",th,"is prime");
    
}


for( l=1;l<=fo;l++){
    if(fo%l==0){
        f=f+1;
    }
}
if(f==2){
    console.log("Fourth digit",fo,"is prime");
    
}