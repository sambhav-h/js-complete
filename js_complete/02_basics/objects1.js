// objects are made from two types
// literal ->   singleton
// constructor -> not a singleton

// ✅ Object Literals are Singleton (because there's only one instance).
// ❌ Constructor Functions are NOT Singleton (because each new call creates a new instance).

// Object.create -> not a singleton

const mysym = Symbol("key1")

const jsuser = {
    "name": "Hitesh",
    "full name": "Hitesh Choudhary",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser)
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])


jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(jsuser)
jsuser.email = "hitesh@microsoft.com"
// console.log(jsuser);



jsuser.greeting = function(){
    console.log("Hello JS user");
}
jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
