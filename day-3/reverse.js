n=365;
l=(n%10);
d=parseInt(n/10);
f=parseInt(d/10);
s=d%10;
number=l*100+s*10+f;
console.log("Number=",number);