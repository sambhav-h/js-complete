const marvel_heros = ["thor","ironman","spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);


// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

// using spread operator
// const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting we have to tell that ki keys ka aray bnana hai ya values ka otherwise it will give empty array



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

