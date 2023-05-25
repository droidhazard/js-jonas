'use strict';

// & DESTRUCTURING ARRAYS
// & DESTRUCTURING ARRAYS
// & DESTRUCTURING ARRAYS

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22,
	},
	[weekdays[4]]: {
		open: 11,
		close: 22,
	},
	// [`day-${2 + 2}`]: {
	[weekdays[5]]: {
		open: 0,
		close: 24,
	},
}

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],
	// * ES6 enhanced object literals
	openingHours,

	order(starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},

	orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
		console.log(`Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
	},

	orderPasta(ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
	},

	orderPizza(mainIngredient, ...otherIngredients) {
		console.log(mainIngredient)
		console.log(otherIngredients)
	}
}

// * Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])
console.log(ordersSet)
console.log(ordersSet.size) // .length
console.log(ordersSet.has('Pizza')) // .includes()
console.log(ordersSet.has('Curry'))
ordersSet.add('Garlic Bread') // .push()
ordersSet.add('Garlic Bread')
ordersSet.delete('Pasta')
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) console.log(order)

// ^ Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
// const staffSet = new Set(staff)
// const staffArray = [...staffSet]
const staffArray = [...new Set(staff)]
console.log(staffArray)

// ^ All alphabet letters
console.log(new Set('thequickbrownfoxjumpsoverthelazydog').size)

/* ////////////////////////////////
///////////////////////////////////
///////////////////////////////////

// & Properties NAMES

const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
	openStr += `${day}, `
}

console.log(openStr)

// & Property VALUES
const values = Object.values(openingHours)
console.log(values)

// & Entire object
const entries = Object.entries(openingHours)
// console.log(entries)

// [key, value]
for (const [day, { open: openTime, close: closeTime }] of entries) {
	console.log(`On ${day} we open at ${openTime} and close at ${closeTime}`)
}


if (restaurant.openingHours && restaurant.openingHours.mon) {
 console.log(restaurant.openingHours.mon.open)
}
// * Without optional chaining (error)
// console.log(restaurant.openingHours.mon.open)
// * With optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days) {
 const open = restaurant.openingHours[day]?.open ?? 'closed'
 console.log(`On ${day}, we open at ${open}`)
}

// * Optional Chaining for Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// * Optional chaining for arrays
const users = [{ name: 'Zohaib', email: 'zohaib@gmail.com' }]
console.log(users[0]?.name ?? 'User array empty')
console.log(users[1]?.name ?? 'User array empty')

console.log(restaurant)

// * The for-of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item)
for (const [i, el] of menu.entries()) {
 console.log(`${i}: ${el}`)
}


const rest1 = {
 name: 'Capri',
 numGuests: 20,
}

const rest2 = {
 name: 'La Piazza',
 owner: 'Giovanni Rossi',
}

// * OR assignment operator
rest1.numGuests = rest1.numGuests || 10
rest2.numGuests = rest2.numGuests || 10
rest1.numGuests ||= 10
rest2.numGuests ||= 10

// * nullish assignment operator ('null' or 'undefined')
rest1.numGuests ??= 10
rest2.numGuests ??= 10


// * AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>'
rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)


restaurant.numGuests = 0
const guests = restaurant.numGuests || 10
console.log(guests)

// * Nullish coalescing operator: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)

console.log('------ OR ------')
// ^ Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Zohaib")
console.log('' || "Zohaib")
console.log(true || 0)
console.log(undefined || null)

console.log(undefined || 0 || '' || 'Hello' || 23 || null)

restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)
const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('------ AND ------')
console.log(0 && 'Zohaib')
console.log(7 && 'Zohaib')
console.log('Hello' && 23 && null && 'Zohaib')

if (restaurant.orderPizza) {
 restaurant.orderPizza('Mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach')


// * Rest Pattern and Parameters
// & 1) Destructuring

// * SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]]

// * REST, because of LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

// // * Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(weekdays)

// & 2) Functions

const add = function (...numbers) {
 // console.log(numbers)
 let sum = 0;
 for (let i = 0; i < numbers.length; i++) {
	 sum += numbers[i]
 }
 console.log(`The sum is ${sum}`)

}

add(2, 3)
add(5, 3, 7, 2)
add(1, 1, 5, 8, 1, 1, 8)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza('Mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('Mushrooms')

// * //////////////////////////////
// * Spread Operator (...)
// * //////////////////////////////

const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arr]
console.log(newArr)
console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci',]
console.log(newMenu)

// & Copy array
const mainMenuCopy = [...restaurant.mainMenu]

// & Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(menu)

// ^ Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Zohaib'
const letters = [...str, ' ', 'A.']
console.log(letters)
console.log(...str)
console.log(`${...str}`) // Will not work here

// * Real world example

const ingredients = [
	 prompt('Let\'s make pasta, ingredient 1? '), prompt('ingredient2?'), prompt('ingredient3?')
]

console.log(ingredients)

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients)

// * Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' }
console.log(newRestaurant)

const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Ristorante Roma'

console.log(restaurantCopy.name)
console.log(restaurant.name)




// * //////////////////////////////////////////////
// * Destructuring objects
// * //////////////////////////////////////////////
restaurant.orderDelivery({
	 time: '22:30',
	 address: 'Via del Sole, 21',
	 mainIndex: 2,
	 starterIndex: 2
})

restaurant.orderDelivery({
	 address: 'Mirpurkhas'
})

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)

const { name: restaurantName,
	 openingHours: hours,
	 categories: tags,
} = restaurant
console.log(restaurantName, hours, tags)

// * Default values in Destructuring objects
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

// * Mutating variables
let a = 111;
let b = 999;
const obj = { a: 28, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b)

// * Nested objects
const { fri: { open: o, close: c } } = openingHours
console.log(o, c)


const arr = [2, 3, 5]
const a = arr[0]
const b = arr[1]
const c = arr[3]

const [x, y, z] = arr
console.log(x, y, z)

let [main, , secondary] = restaurant.categories
[main, secondary] = [secondary, main]
console.log(main, secondary)

const temp = main
main = secondary
secondary = temp
console.log(main, secondary)
// * Switching variables, doesn't work here idk why
[main, secondary] = [secondary, main]


// * Receive 2 return values from a function
const [starterO, mainO] = restaurant.order(2, 0)
console.log(starterO, ",", mainO)

// * Nested destructuring
const nested = [2, 4, [5, 6]]
const [i, , j] = nested
console.log(i, j)
const [i, , [j, k]] = nested
console.log(i, j, k)

// * Default values
const [p = 0, q = 0, r = 0, s] = [8, 9]
console.log(p, q, r)

///////////////////////////////////
///////////////////////////////////
*/ ////////////////////////////////