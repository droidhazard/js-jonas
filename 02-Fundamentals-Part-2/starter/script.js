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

// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(2004)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(2002, 'zohaib'))
// console.log(yearsUntilRetirement(2001, 'droid'))

// function cutFruitPieces(fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples)
//   const orangePieces = cutFruitPieces(oranges)

//   const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} orange pieces.`
//   return juice;
// }

// console.log(fruitProcessor(2, 3))

// // const disBtn = document.getElementById('dis-btn')
// // let spanZero = document.getElementById('span-zero').innerHTML
// // function disableMe() {
// //   if (spanZero === '0') {
// //     disBtn.setAttribute('disabled', true)
// //   }
// // }

// const calcAge = function(year) {
//   return 2037 - year
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear)
//   const retirement = 65 - age
//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`)
//   } else {
//     return -1
//   }
// }

// console.log(yearsUntilRetirement(2001, 'Zohaib'))
// console.log(yearsUntilRetirement(1950, 'Mike'))

const calcAverage = (round_1, round_2, round_3) => {
  return (round_1 + round_2 + round_3) / 3
}

const avgDolphins_match_1 = calcAverage(44, 23, 71)
const avgKoalas_match_1 = calcAverage(65, 54, 49)

const avgDolphins_match_2 = calcAverage(85, 54, 41)
const avgKoalas_match_2 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphin wins, (${avgDolphins} vs ${avgKoalas})`)
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas wins, (${avgKoalas} vs ${avgDolphins})`)
  } else {
    console.log(`Nobody wins, (D: ${avgDolphins}, K: ${avgKoalas})`)
  }
}

checkWinner(avgDolphins_match_1, avgKoalas_match_1)
checkWinner(avgDolphins_match_2, avgKoalas_match_2)
