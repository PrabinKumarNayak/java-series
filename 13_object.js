// singleton
Object.create

// object literals

const mySym = Symbol("key1")


const jsUser= {
    name: "Prabin",//inside an object the key(variable) are supposed to be a string
    [mySym]:"mykey1",//to use it as a symbol we have to put a square bracket across mySym.
    age: 15,
    location:"panapali",
    email: "bhufdii@nn.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"]
}

console.log(jsUser.email);//bhufdii@nn.com
console.log(jsUser["email"]);//bhufdii@nn.com when we use square bracket it is necessary to give "" bcz inside the object the keys are string.

console.log(jsUser.mySym);//mykey1
console.log(typeof(jsUser.mySym));//string
console.log(jsUser[mySym]);//mykey1

// Object.freeze(jsUser);
jsUser.email ="buhbffvb@nj.com";
console.log(jsUser);//there will be no change in object when we freez it

jsUser.greeting = function(){
    console.log("Hello js User");
}

console.log(jsUser.greeting);//[Function (anonymous)]
 jsUser.greetingTwo =function(){
    console.log(`Hello JS user, ${this.name}`);
 }
console.log(jsUser.greeting());//Hello JS user
console.log(jsUser.greetingTwo());//Hello JS user, Prabin
