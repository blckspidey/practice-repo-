let arr=[0,1,2,3,4,5,6,7,8,9]
console.log(arr[5])
let multiple_array=['01',1,2,"don",true]
console.log(multiple_array.slice(0,3))

const car=["bmw","audi","dodge"];
const bikes=["gt650","ninjazx10r","h2r"];
const veh=car.concat(bikes);
//console.log(car.push(bikes));
const vehi=[...car,...bikes];//spread fns
//console.log(vehi)
console.log(veh)
//flatening array
const n=[1,2,3,[5,6],7,8,[9,[10]]]
const m=n.flat(Infinity)
console.log(n)
console.log(m)
// comparing and converting to array 
console.log(Array.isArray("Ganesh"))
console.log(Array.from("Ganesh"))
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));