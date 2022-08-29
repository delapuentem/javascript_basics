// .sort() -> Modify the actual array, dont duplicate it

// How to order a list of objects by property

const pokemonList = [
    {name: 'Pikachu', type: 'Electric', pokedex_number: 5},
    {name: 'Bulbasur', type: 'Plant', pokedex_number: 2},
    {name: 'Charmander', type: 'Fire', pokedex_number: 4},
    {name: 'Blastoiser', type: 'Water', pokedex_number: 12},
]

// Sort by a alphabetical string
console.log(pokemonList.sort(function(a, b){
    if (a.name > b.name) {
        return 1; 
    }
    if (a.name < b.name) {
        return -1; 
    }
    // a must be equal to b
    return 0
}));

// Sort by a number
console.log(pokemonList.sort(function(a, b){
    return a.pokedex_number - b.pokedex_number;
}));