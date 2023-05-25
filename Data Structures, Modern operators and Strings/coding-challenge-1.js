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
	printGoals: function (...players) {
		let goals = players.length
		for (let i = 0; i < players.length; i++) {
			console.log(players[i])
		}
		console.log(`The total goals were: ${goals}`)
	}
}

const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
const allPlayers = [...players1, ...players2]
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic']
const { team1, x: draw, team2 } = game.odds
console.log(players1)
console.log(players2)
console.log(gk)
console.log(fieldPlayers)
console.log(allPlayers)
console.log(players1Final)
console.log(team1, draw, team2)
game.printGoals('hi', 'tye')
game.printGoals(...game.scored)

team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')


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