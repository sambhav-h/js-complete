const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); -> empty object in node env 
// but it gives window in browser

// function chai(){
//     let username = "hitesh"
    console.log(this);
    console.log(this.username); // undefined
 // function me mai this use nhi kr pa rha hu ,object me kar para tha
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this); // empty object
//     console.log(this.username); // undefined
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()