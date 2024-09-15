// Stack (Primitive), Heap (Non-Primitive)

let myWebName="prabinkucom"

let anothername = myWebName

anothername ="pikachu"

console.log(myWebName);//you got the copy in stack
console.log(anothername);//output->prabinkucom
// pikachu

let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
};
let userTwo=userOne

userTwo.email="prabin@ghghj.com"


console.log(userOne);//you got the reference in heap
console.log(userTwo);//output->{ email: 'prabin@ghghj.com', upi: 'user@ybl' }
//{ email: 'prabin@ghghj.com', upi: 'user@ybl' }