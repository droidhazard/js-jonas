'use strict';

// let hasDriversLicense = false
// const passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'audio'
// const private = 535
// const if = 23

function logger() {
  console.log('My name is Zohaib')
}

// calling / running / invoking
logger(23)
logger()
logger()

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges)
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5, 0)
console.log(fruitProcessor(5, 0))

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)


