// Remember, we're gonna use strict mode in all scripts now!
// 'use strict'

// const x = 23

// const calcAge = (birthYear) => 2037 - birthYear
// console.log(calcAge(2001))


///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the Problem
// - What is temperature Amplitude ? Answer: difference between highest and lowest temp.
// - How to calculate max and min temperatures?
// - What's a sensor error? and What to do?


// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temperature array ?
// - Find min value in temperature array ?
// - Subtract min from max (amplitude) and return it




const calcTempAmplitude = function (temps) {
  let max = 0;
  let min = 0;
  let amplitude = 0;

  const calcTempMax = function (temps) {
    max = temps[0]
    for (let i = 1; i < temps.length; i++) {
      if (temps[i] === 'error') {
        continue
      }
      if (temps[i] > max) {
        max = temps[i]
      }
    }
  }
  const calcTempMin = function (temps) {
    min = temps[0]
    for (let i = 0; i < temps.length; i++) {
      if (temps[i] === 'error') {
        continue
      }
      if (temps[i] < min) {
        min = temps[i]
      }
    }
  }
  calcTempMax(temps)
  calcTempMin(temps)
  amplitude = max + min
  return amplitude
}

amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)