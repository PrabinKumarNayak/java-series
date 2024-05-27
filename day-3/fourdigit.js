n=3485;
fourth=n%10;
d1=parseInt(n/10);
third=d1%10;
d2=parseInt(n/10);
d3=parseInt(d2/10);
second=d3%10;
first=parseInt(n/1000);
sum=first+third;
multiplication=second*fourth;
console.log("n4=",fourth);
console.log("n3=",third);
console.log("n2=",second);
console.log("n1=",first);

console.log("sum=",sum);
console.log("multiplication=",multiplication);