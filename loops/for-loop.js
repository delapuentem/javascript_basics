// For loop structures

const mascota1 = {'name': 'Turco', 'type': 'Perro', 'age': 10}
const mascota2 = {'name': 'Kai', 'type': 'Gato', 'age': 4}
const mascota3 = {'name': 'Dana', 'type': 'Perro', 'age': 5}
const mascota4 = {'name': 'Tino', 'type': 'Gato', 'age': 5}

const listaMascotas = [mascota1, mascota2, mascota3, mascota4]
const listaCoches = ['Mercedes', 'Hyundai', 'Audi', 'Ferrari']


// Basic for structure -> For each loop, while i is less than 10, add 1 to var i. When i is equal to 10, the for loop stop
for (let i = 0; i <= 10; i = i + 1) {
    console.log(`value ${i}`);
}

// For of structure -> Iterate over elements inside of a array and can access to object info inside it
for (let item of listaMascotas) {
    console.log(item);
}

// ForEach -> Like for of. Is specific method for arrays.
listaMascotas.forEach(item => {
    console.log(item)
})

// For in structure -> Iterate over the elements inside an object
for (let item in mascota1) {
    console.log(`${item}: ${mascota1[item]}`);
}