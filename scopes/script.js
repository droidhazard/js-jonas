'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var vit = true
            const str = `Oh, and you are a millenial`
            console.log(str)
        }
        console.log(vit)

    }
    printAge()
    return age
}

const firstName = 'Zohaib'
calcAge(2001)