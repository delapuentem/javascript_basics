// .some() -> Return true if some value exists in the array

const state1 = {'name': 'EEUU', 'capital': 'Washintown', 'states': 5}
const state2 = {'name': 'Alemania', 'capital': 'Berlín','states': 10}
const state3 = {'name': 'Japón', 'capital': 'Tokyo','states': 12}
const state4 = {'name': 'Francia', 'capital': 'París', 'states': 4}

listaPaises = [state1, state2, state3, state4]



// Method 1 with arrow function

const existe = listaPaises.some(estado => estado.name === 'Japón')

console.log(existe)


// Method 2 with function inside

const existe2 = listaPaises.some(function(estado) {
    return estado.name === 'Japón'
})

console.log(existe2)

// Method 3 with function outside

function funcionComprobar(estado){
    return estado.name === 'Japón'
}

const existe3 = listaPaises.some(funcionComprobar)

console.log(existe3)

// Method 4 inside function

function checkState1(array, state_name) {
    return array.some(function(item){
        return item.name === state_name;
    });
}

console.log(checkState1(listaPaises, 'Japón'));

// Method 5 inside function with arrow function

function checkState2(array, state_name) {
    return array.some(item => item.name === state_name);
}

console.log(checkState2(listaPaises, 'Japón'));