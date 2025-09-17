const bike={
    username :"duke",
     model:390,
     welcome: function(){
        console.log(`we have ${this.username} bike of model no ${this.model}`)
        console.log(this)
     }

}
// bike.welcome();
// bike.username="Royal Enfiled Classic";
// bike.model=350;
// bike.welcome()


function watch(){
  let username="ganesh";
   // console.log(`${this.username} watch me`)
   console.log(this.username)
}

watch();
/ const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()