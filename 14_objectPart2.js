const tinderUser= new Object()//{}//singleton object
const tinderUserr={}//{}  yes both the methods are use for object declaration //non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false//{ id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(tinderUser);

const regularUser = {
    email:"sdhfgfhsgf@.com",
    fullname: {
        userfullname:{
            firstname:"prabin",
            lastname:"Nayak"
        }
    }
}
console.log(regularUser.fullname);//{ userfullname: { firstname: 'prabin', lastname: 'Nayak' } }


const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}//here 1 ,2,3,4, are the key (variable)
const obj4={5: "a", 6:"b"}

// const obj3={obj1, obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign(obj1, obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3=Object.assign({},obj1, obj2, obj4)//here {} is an optional parameter, which is known as target , and the others parameters are the source , which get inside the target, (target,source1....source n)

const obj3 ={...obj1,...obj2,obj4}//{
//     '1': 'a',
//     '2': 'b',
//     '3': 'a',
//     '4': 'b',
//     obj4: { '5': 'a', '6': 'b' }
//   }//using spread operator
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users =[
    {
        id:1,
        email:"hfksdh.com"
    },
    {
        id:1,
        email:"hfksdh.com"
    },
    {
        id:1,
        email:"hfksdh.com"
    }
]//array of object
users[1].email


console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]//*****
console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]//[[key:value],[key:value]]
console.log(tinderUser.hasOwnProperty('name'));//true
