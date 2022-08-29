const pokemon1 = {
    name: 'Pikachu',
    type: 'Electric',
    pokedex_number: 5,
}

// If we declare new duplicate object with equal, this not duplicate it. This asign same reference in memory.
const pokemon2 = pokemon1

//And if we modify the value of first object, value of second object have modified too 
pokemon1.name = 'Charmander'

console.log(pokemon2.name)


// Methods to duplucate object -> Spread operator.
const pokemon3 = {...pokemon1}

pokemon1.name = 'Bulbasur'

console.log(pokemon1.name)
console.log(pokemon3.name)