let score=69
console.log(typeof score);
let numtostring= String(score);
console.log(typeof numtostring);
//if string has no pure number then how will it convert
let score2=true
console.log(typeof score);
let numtostring2= Number(score2);
console.log(typeof numtostring2);
//it still converts no matter is the number pure or not if we try to print it it will print NaN
console.log(numtostring2);
// //"69"=69
// "69ggg"=NaN
//true=1 , 1=true, 0=false
//numbers do get converted in boolean context(any positive/negative number to true and 0 to false)
let num=-100
console.log(typeof num)
let numtobool=Boolean(num)
console.log(numtobool);
//opertatons

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**3)

console.log(1+"")
console.log(1+"2")
console.log("1"+"2")
console.log(1+"2"+3)
console.log(1+2+"3")
console.log(1+2+3)
console.log(true)
console.log(+true)