// .map() .filter()

const state1 = {'name': 'EEUU', 'capital': 'Washintown', 'states': 5}
const state2 = {'name': 'Alemania', 'capital': 'Berlín','states': 10}
const state3 = {'name': 'Japón', 'capital': 'Tokyo','states': 12}
const state4 = {'name': 'Francia', 'capital': 'París', 'states': 4}

listaPaises = [state1, state2, state3, state4]

// Methods that create a new list from another

// Map -> Callback function. Generate new list from another.

listaPaises2 = listaPaises.map((value, index) => {
    return `${value.capital} city`
})

console.log(listaPaises2)

// Filter -> Filter items from array generating a new array from another and drop not filtered values

listaPaises3 = listaPaises.filter(item => {
    return item.states > 5
})

console.log(listaPaises3)