const myArr= [0,1,2,3,4]
const myHeros = ["shaktiman","spiderman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) -> we insert the values from left hand side
// myArr.shift() -> we remove the value from keft hand side

// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr); // string

// slice -> do not modify the array
//  splice -> modify the array

console.log("original array :",myArr);

const myn1 = myArr.slice(1,3);
console.log("array after slice method :",myn1);
console.log("original arr after slice method",myArr);


const myn2 = myArr.splice(1,3);
console.log("array after splice method",myn2);
console.log("original arr after splice method",myArr);
