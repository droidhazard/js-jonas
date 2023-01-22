// let js = 'amazing'
// console.log(2 + 2)

// console.log('Jonas')
// console.log(23)

// let firstName = "Matilda"
// console.log(firstName)
// console.log(firstName)
// console.log(firstName)

// // Variable name converntion
// let jonas_matilda = 'JM'
// let $function = 27
// const CONSTANT = 'hello'
// const link = 'bye'

// let myFirstJob = 'Programmer'
// let myCurrentJob = 'Teacher'

// let job1 = 'programmer'
// let job2 = 'teacher'

// console.log(myFirstJob)


// let javascriptIsFun = true
// console.log(javascriptIsFun)
// console.log(typeof false)
// console.log(typeof javascriptIsFun)
// console.log(typeof 23)
// console.log(typeof 'Zohaib')

// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year = 1991

// console.log(typeof null)

// let age = 30
// age = 31
// const birthYear = 1991
// // birthYear = 2001
// // const job;
// var job = 'programmer'
// job = 'teacher'

// lastName = 'Ali'
// console.log(lastName)

// const now = 2037
// const ageZohaib = now - 2001
// const ageSarah = now - 2020
// console.log(ageZohaib, ageSarah)

// console.log(ageZohaib * 2, ageZohaib / 10, 2 ** 3)
// // 2 ** 3 mean 2 to the power of 3 , = 2 * 2 * 2

// const firstName = 'Zohaib'
// const lastName = 'Ali'
// console.log(firstName + " " + lastName)

// let x = 10 + 5
// x += 10  // x = x + 10
// x *= 4
// x++
// x--;x--
// console.log(x)

// console.log(ageZohaib > ageSarah)
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18

// console.log(now - 2001 > now - 2020)

// const now = 2037
// const ageZohaib = now - 2001
// const ageSarah = now - 2018
// console.log(now - 2001 > now - 2018)

// console.log(25 - 10 - 5)

// let x, y
// x = y = 25 - 10 - 5
// console.log(x, y)

// const averageAge = (ageZohaib + ageSarah) / 2
// console.log(averageAge)

// const markMass_test1 = 78
// const markHeight_test1  = 1.69
// const johnMass_test1 = 92
// const johnHeight_test1 = 1.95

// const markBMI_test1 = markMass_test1 / (markHeight_test1 ** 2)
// const johnBMI_test1 = johnMass_test1 / (johnHeight_test1 ** 2)

// const markHigherBMI_test1 = markBMI_test1 > johnBMI_test1
// console.log(markBMI_test1, johnBMI_test1)
// console.log('is mark BMI higher than john ? ', markHigherBMI_test1)

// const markMass_test2 = 95
// const markHeight_test2  = 1.88
// const johnMass_test2 = 85
// const johnHeight_test2 = 1.76

// const markBMI_test2 = markMass_test2 / (markHeight_test2 ** 2)
// const johnBMI_test2 = johnMass_test2 / (johnHeight_test2 ** 2)

// const markHigherBMI_test2 = markBMI_test2 > johnBMI_test2
// console.log(markBMI_test2, johnBMI_test2)
// console.log('is mark BMI higher than john ? ', markHigherBMI_test2)

// const firstName = 'Zohaib'
// const job = 'farigh person'
// const birthYear = 2001
// const year = 2037

// const zohaib = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
// console.log(zohaib)

// const zohaibNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(zohaibNew)

// console.log(`Just a regular string...`)

// console.log('String with \n newline');
// console.log(`String with 
// newline`)

const age = 19

if (age >= 18) {
  console.log('You can start driving license');
} else {
  const yearsLeft = 18 - age
  console.log(`You still have ${yearsLeft} years to go`)
}

let century;
const birthYear = 2001
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(`You were born in ${century} century`)