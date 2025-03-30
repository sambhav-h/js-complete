// immidiately invoked function expressions(IIFE)

// like jse hi hmari application start ho  vse hi hmara database connect hojaye 

// itna hi nahi khi bar kya hota hai
// kuch global variabes hai,hmne kuch function likha,vo global variabkes function me dikkt na de,kuki jo b hm function me declare kr rhe hai vo global scope se pollute ho jata hai -> we dont want like this to hm scopes bna lete h vhi pe and immediately ececute ho jaye

// iife bngya
(function chai(){
    // named iife
    console.log('db connected');  
})();
// yha semicolon lgana zruri hai to stop the invoked execution,vrna use pta ni chlegakha tk uska execution context h isliye error aya tha jb niche wala run kr rhe the


( (name) => {
    // unnamed iife
    console.log(`db connected motu ${name}`)
})('hitesh')




