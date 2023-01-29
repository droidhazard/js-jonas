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

// const calcAverage = (round_1, round_2, round_3) => {
//   return (round_1 + round_2 + round_3) / 3
// }

// const avgDolphins_match_1 = calcAverage(44, 23, 71)
// const avgKoalas_match_1 = calcAverage(65, 54, 49)

// const avgDolphins_match_2 = calcAverage(85, 54, 41)
// const avgKoalas_match_2 = calcAverage(23, 34, 27)

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphin wins, (${avgDolphins} vs ${avgKoalas})`)
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas wins, (${avgKoalas} vs ${avgDolphins})`)
//   } else {
//     console.log(`Nobody wins, (D: ${avgDolphins}, K: ${avgKoalas})`)
//   }
// }

// checkWinner(avgDolphins_match_1, avgKoalas_match_1)
// checkWinner(avgDolphins_match_2, avgKoalas_match_2)

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)
// console.log(friends[0])
// console.log(friends[2])

// console.log(friends.length)
// console.log(friends.length - 1)

// friends[2] = 'Shan'
// console.log(friends)

// const firstName = 'Zohaib'
// const zohaib = [firstName, 'Ali', 2022 - 2001, 'Programmer', friends]
// console.log(zohaib)
// console.log(zohaib.length)

// // Exercise
// const calcAge = function(birthYear) {
//   return 2037 - birthYear
// }

// const birth_Years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(birth_Years[0])
// const age2 = calcAge(birth_Years[1])
// const age3 = calcAge(birth_Years[years.length - 1])
// console.log(age1, age2, age3)
// const ages = [age1, age2, age3]
// console.log(ages)

// const friends = ['Michael', 'Steven', 'Peter']

// // * Add Elements
// // friends.push('Bilal')
// const newLength = friends.push('Bilal')
// console.log(friends)
// console.log(newLength)
// friends.unshift('John')
// console.log(friends)

// // * Remove Elements
// friends.pop()
// const popped = friends.pop()
// console.log(friends)
// console.log(popped)
// friends.shift()
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Joker'))
// console.log(friends.includes('Michael'))
// console.log(friends.includes('Helena'))
// friends.push(23)
// console.log(friends.includes('23'))

// if (friends.includes('Peter')) {
//   console.log('You have a friend called Peter')
// } else {
//   console.log('You don`t have a friend called Peter')
// }

// const bills = [125, 555, 44]
// const calcTip = (bill) => {
//   let tipPercentage = 0
//   bill >= 300 ? tipPercentage = 20 : tipPercentage = 15
//   const tipAmount = (bill / 100) * tipPercentage
//   console.log(`The Bill value was ${bill}, The Tip being ${tipPercentage}%:${tipAmount}, Your total bill is ${bill+tipAmount}`)
// }
// calcTip(bills[0])
// calcTip(bills[1])
// calcTip(bills[2])

const zohaib = {
  firstName: 'Zohaib',
  lastName: 'Ali',
  age: 2037 - 2001,
  job: 'coder',
  friends: ['Michael', 'Peter', 'Steven']
}

console.log(zohaib)
console.log(zohaib.lastName)
console.log(zohaib['lastName'])
const nameKey = 'Name'
console.log(zohaib['first' + nameKey])
console.log(zohaib['last' + nameKey])

const interestedIn = prompt('What do you want to know about Zohaib ? choose between firstName, lastName, age, job, friends')

if(zohaib[interestedIn]) {
  console.log(zohaib[interestedIn])
} else {
  console.log("Wrong Request!")
}

zohaib.location = 'Mirpur Khas'
zohaib['facebook'] = 'z0335'

console.log(zohaib)

// Zohaib has 3 friends, and his best friends is called Michael

console.log(`${zohaib.firstName} has ${zohaib.friends.length} friends, and his best friend is called ${zohaib['friends'][0]}`)

