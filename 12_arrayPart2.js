const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]    As we know array can take any element of any datatype , here "marvel_heros" take another array inside it. 
// console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);//Here ... is a spread operator

const another_array = [1,2,3,[4,5,6],7,[7,8,[9,10]]];
const real_another_array =another_array.flat(Infinity);
console.log(real_another_array);//[
//     1, 2, 3, 4, 5,
//     6, 7, 7, 8, 9,
//    10
//  ]


console.log(Array.from("Prabin"));//[ 'P', 'r', 'a', 'b', 'i', 'n' ]
console.log(Array.from({name:"Prabin"}));//[] //you need to tell him what type of array you want rather it gives an empty array

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
