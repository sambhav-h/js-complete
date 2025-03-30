let score = "33bbb"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

//  "33" -> 33
// "33abc" -> NaN
// "true" -> 1, false->0
// null -> 0
// undefined -> Nan


let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//  *************** OPERATIONS ***************

let value = 3
let negvalue = -value
// console.log(negvalue);

// basic operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = " sambhav"

let str3 = str1 + str2
// console.log(str3); // gives helllo sambhav no error
// but problem is when we do like this

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// phle number h to number me convert hojayega agr string h to string me convert hojayega  -> do not depend on this


// ase b conversion ho skta h but bad practise 
// console.log(+true) // gives 1
// console.log(+"") // gives 0

let num1,num2,num3

num1 = num2 = num3 = 2+2 // not the gud way to assign like this bad readability



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
