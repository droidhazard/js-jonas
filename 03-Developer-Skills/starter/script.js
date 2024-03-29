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


// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   let amplitude = 0;

//   const calcTempMax = function (temps) {
//     // max = 
//     for (let i = 1; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       if (temps[i] > max) {
//         max = temps[i]
//       }
//     }
//   }
//   const calcTempMin = function (temps) {
//     // min = 
//     for (let i = 0; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       if (temps[i] < min) {
//         min = temps[i]
//       }
//     }
//   }
//   calcTempMax(temps)
//   calcTempMin(temps)
//   amplitude = max - min
//   return amplitude
// }

// amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude)

// Problem 2
// Function now should receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays should we implement functionality twice? No ! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?


// const calcTempAmplitudeNew = function (t1, t2) {

//   const temps = t1.concat(t2)
//   console.log(temps)

//   let max = temps[0];
//   let min = temps[0];
//   let amplitude = 0;

//   const calcTempMax = function (temps) {
//     // max = 
//     for (let i = 1; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       if (temps[i] > max) {
//         max = temps[i]
//       }
//     }
//   }
//   const calcTempMin = function (temps) {
//     // min = 
//     for (let i = 0; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       if (temps[i] < min) {
//         min = temps[i]
//       }
//     }
//   }
//   calcTempMax(temps)
//   calcTempMin(temps)
//   amplitude = max - min
//   return amplitude
// }

// amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5])
// console.log(amplitudeNew)

// Calculatre Kelvin

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     // * C) Fix the bug
//     // value: Number(prompt('Degree Calsius: '))
//     value: 10
//   }
//   // * B) Find the bug
//   console.table(measurement)

//   console.log(measurement.value)
//   // console.warn(measurement.value)
//   // console.error(measurement.value)
//   const kelvin = measurement.value + 273
//   return kelvin
// }

// // * A) Identify the bug
// //* ██ ██████  ███████ ███    ██ ████████ ██ ███████ ██    ██ 
// //* ██ ██   ██ ██      ████   ██    ██    ██ ██       ██  ██  
// //* ██ ██   ██ █████   ██ ██  ██    ██    ██ █████     ████   
// //* ██ ██   ██ ██      ██  ██ ██    ██    ██ ██         ██    
// //* ██ ██████  ███████ ██   ████    ██    ██ ██         ██    

// //* ████████ ██   ██ ███████                                  
// //*    ██    ██   ██ ██                                       
// //*    ██    ███████ █████                                    
// //*    ██    ██   ██ ██                                       
// //*    ██    ██   ██ ███████                                  

// //* ██████  ██    ██  ██████                                  
// //* ██   ██ ██    ██ ██                                       
// //* ██████  ██    ██ ██   ███                                 
// //* ██   ██ ██    ██ ██    ██                                 
// //* ██████   ██████   ██████                                  


// console.log(measureKelvin())


// // * Using a debugger
// const calcTempAmplitudeBug = function (t1, t2) {

//   const temps = t1.concat(t2)
//   console.log(temps)

//   let max = 0
//   let min = 0
//   let amplitude = 0;

//   const calcTempMax = function (temps) {
//     // max = 
//     for (let i = 0; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       if (temps[i] > max) {
//         max = temps[i]
//       }
//     }
//   }
//   const calcTempMin = function (temps) {
//     // min = 
//     for (let i = 0; i < temps.length; i++) {
//       if (typeof temps[0] !== 'number') {
//         continue
//       }
//       // debugger;
//       if (temps[i] < min) {
//         min = temps[i]
//       }
//     }
//   }
//   calcTempMax(temps)
//   calcTempMin(temps)
//   amplitude = max - min
//   console.log(max, min)
//   return amplitude
// }

// amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5])
// console.log(amplitudeBug)


///////////////////////////////////////
// Coding Challenge #1

/*
* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

* Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

* Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

* Use the problem-solving framework: Understand the problem and break it up into sub-problems!

& TEST DATA 1: [17, 21, 23]
& TEST DATA 2: [12, 5, -5, 0, 4]
*/
// * 1) Understanding the Problem, Ask the right Questions
// ^ - Should the temperature be numerically sorted ? Answer: no, the elements are sorted by days
// ^ 
// * 2) Break the Problem into sub-problems
// ^ - Create a function that accepts array as argument
// ^ - iterate through array
// ^ - Print a string that is determinant to the number of array elements
// ^ - Whenever the loops iterates to the length of array it adds/concatenates new data to the end of the output string

const forecastData_1 = [17, 21, 23]
const forecastData_2 = [12, 5, -5, 0, 4]

const printForecast = (arr) => {
  let day = 1
  let output = new String()
  for (let i = 0; i < arr.length; i++) {
    output += ` ... ${arr[i]} ºC in ${day} days`
    day++
  }
  return output
}

console.log(printForecast(forecastData_1))
console.log(printForecast(forecastData_2))