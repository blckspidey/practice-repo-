let arr=[0,1,2,3,4,5,6,7,8,9]
console.log(arr[5])
let multiple_array=['01',1,2,"don",true]
console.log(multiple_array.slice(0,3))

const car=["bmw","audi","dodge"];
const bikes=["gt650","ninjazx10r","h2r"];
const veh=car.concat(bikes);
//console.log(car.push(bikes));
const vehi=[...car,...bikes];
//console.log(vehi)
console.log(veh)