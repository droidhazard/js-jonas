'use strict';

// console.log(this)

// // * This keyword in a function expression = undefined
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAge(2001)

// // * This keyword in an arrow function = window object
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear)
//     console.log(this)
// }
// calcAgeArrow(1980)

// // * This keyword in a method = object itself
// const zohaib = {
//     year: 2001,
//     calcAge: function () {
//         console.log(this)
//         console.log(2037 - this.year)
//         // console.log(this.calcAge)
//     }
// }
// zohaib.calcAge()

// // * Calling this keyword in method from a difference object
// const matilda = {
//     year: 2017
// }
// matilda.calcAge = zohaib.calcAge
// matilda.calcAge()

// const f = zohaib.calcAge
// f()

// var firstName = 'Matilda'

// const zohaib = {
//     year: 2001,
//     firstName: 'Zohaib',
//     calcAge: function () {
//         console.log(2037 - this.year)
//         // console.log(this.calcAge)


//         // & Solution 1 for using 'this' in child function
//         // const self = this // ^ self or that
//         // const isMillenial = function () {
//         //     console.log(self)
//         //     console.log(self.year >= 1981 && self.year <= 1996)
//         //     // console.log(this.year >= 1981 && this.year <= 1996)
//         // }

//         // & Solution 2 for using 'this' in child function
//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial()
//     },
//     greet: function () {
//         console.log(this)
//         console.log(`Hey ${this.firstName}`)
//     }
// }

// // zohaib.greet()
// zohaib.calcAge()

// // * arguments keyword

// const addExpr = function (a, b) {
//     console.log(arguments)
//     console.log(arguments.length)
//     return a + b;
// }
// addExpr(2, 2, 3)

// var addArrow = (a, b) => {
//     try {
//         console.log(arguments)
//     } catch (err) {
//         console.log(err)
//     }
//     return a + b
// };

// addArrow(1, 2)

// let age = 30
// let oldAge = age
// age = 31
// console.log(age)
// console.log(oldAge)

// const me = {
//     name: 'Zohaib',
//     age: 30,
// }
// const friend = me
// friend.age = 26
// console.log(me)
// console.log(friend)

// * Primitive Types
let lastName = 'Ali'
let oldLastName = lastName
lastName = 'Laghari'
console.log(lastName, oldLastName)

// * Reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log('Before marriage: ', jessica)
console.log('After marriage: ', marriedJessica)

// * Copying objects
let jessica2 = jessica

jessica2 = Object.assign({}, jessica)
jessica2.family.push('Jacob')
jessica2.age = 55
console.log('jessica:', jessica)
console.log('jessica2:', jessica2)
