// datatype memeory me kis trike se rakh skte hai and kis trike se store hote 
//  -> are categorised in two types
// primitive and non primitive

/*
1. primitive (call by value hote hai) -> 7 types
->string
->number
->boolean
->null(means empty not 0 not empty string)
->undefined
->symbol
->BigInt
*/



// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n

/*
2. Non primitive or reference type
->array
->objcts
->funcytions
*/


// const heros = ["shaktiman", "naagraj", "doga"];

// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
typeof of datatypes
string -> string
number -> number
boolean -> boolean
null -> object
undefined -> undefined
array -> object
object -> object
function -> function object
symbol -> symbol
bigint-> bigint
*/



// ************** MEMORY ****************
// primitive -> stack memory
// non primitive -> heap memory