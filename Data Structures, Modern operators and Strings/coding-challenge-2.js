const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
	date: 'Nov, 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
	// * 1) print goals with player names
	printGoals: function (...players) {
		let goals = players.length
		for (let i = 0; i < players.length; i++) {
			console.log(`Goal ${i}: ${players[i]}`)
		}
		console.log(`The total goals were: ${goals}`)
	}
}

game.printGoals(...game.scored)

// * 2) Take out average of odds
const odds = Object.values(game.odds)
function oddAverage(...odds) {
	const totalOdds = odds.length
	let totalValue = 0
	for (let i = 0; i < totalOdds; i++) {
		totalValue += odds[i]
	}
	console.log(`Average of odds is ${totalValue / totalOdds}`)
}
oddAverage(...odds)
// console.log(odds)

// * 3) Print out odds with their team names
const oddKeys = Object.keys(game.odds)
const oddValues = Object.values(game.odds)
for (let i = 0; i < oddValues.length; i++) {
	let iTeam = game[oddKeys[i]] || 'Draw'
	console.log(`Odd of victory ${iTeam}: ${oddValues[i]}`)
}

// * BONUS) create scorers object
const scorers = {

}

for (const player of game.scored) {
	scorers[player] = !scorers[player] ? 1 : scorers[player] + 1
	// scorers[player] = scorers[player] + 1 || 0
	// scorers[player] ?? scorers[player] = 0 || scorers[player] += 1
}
console.log(scorers)


// const players1 = [...game.players[0]]
// const players2 = [...game.players[1]]
// const [gk, ...fieldPlayers] = players1
// const allPlayers = [...players1, ...players2]
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1]
// const { team1, x: draw, team2 } = game.odds
// console.log(players1)
// console.log(players2)
// console.log(gk)
// console.log(fieldPlayers)
// console.log(allPlayers)
// console.log(players1Final)
// console.log(team1, draw, team2)
// game.printGoals('hi', 'tye')
// game.printGoals(...game.scored)