// const tinderUser = new Object()
// console.log(tinderUser); -> empty object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularuser = {
    email : "sambhav@.com",
    function:{
        userfullname:{
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularuser.function.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

// const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);


const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // gives the array of array (key value pair)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// De-Structure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// manlo mughe course me se courseInstructor chahiye bar bar itna bda  naam nhi likhunga 
// to mai de structure kr skta hu shown below

const{courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);

// json object
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


