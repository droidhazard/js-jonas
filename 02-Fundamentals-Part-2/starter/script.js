'use strict';

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'audio'
// const private = 535
// const if = 23

// function logger() {
//   console.log('My name is Zohaib')
// }

// // calling / running / invoking
// logger(23)
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//   // console.log(apples, oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)

// // Function Declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// const age1 = calcAge1(2001)

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// }

// const age2 = calcAge2(2001)

// console.log(age1, age2)

// Arrow function

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(2004)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2002, 'zohaib'))
console.log(yearsUntilRetirement(2001, 'droid'))