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
  let max = temps[0];
  let min = temps[0];
  let amplitude = 0;

  const calcTempMax = function (temps) {
    // max = 
    for (let i = 1; i < temps.length; i++) {
      if (typeof temps[0] !== 'number') {
        continue
      }
      if (temps[i] > max) {
        max = temps[i]
      }
    }
  }
  const calcTempMin = function (temps) {
    // min = 
    for (let i = 0; i < temps.length; i++) {
      if (typeof temps[0] !== 'number') {
        continue
      }
      if (temps[i] < min) {
        min = temps[i]
      }
    }
  }
  calcTempMax(temps)
  calcTempMin(temps)
  amplitude = max - min
  return amplitude
}

amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)

// Problem 2
// Function now should receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays should we implement functionality twice? No ! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?


const calcTempAmplitudeNew = function (t1, t2) {

  const temps = t1.concat(t2)
  console.log(temps)

  let max = temps[0];
  let min = temps[0];
  let amplitude = 0;

  const calcTempMax = function (temps) {
    // max = 
    for (let i = 1; i < temps.length; i++) {
      if (typeof temps[0] !== 'number') {
        continue
      }
      if (temps[i] > max) {
        max = temps[i]
      }
    }
  }
  const calcTempMin = function (temps) {
    // min = 
    for (let i = 0; i < temps.length; i++) {
      if (typeof temps[0] !== 'number') {
        continue
      }
      if (temps[i] < min) {
        min = temps[i]
      }
    }
  }
  calcTempMax(temps)
  calcTempMin(temps)
  amplitude = max - min
  return amplitude
}

amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5])
console.log(amplitudeNew)