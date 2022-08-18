//.find()

const mascota1 = {'name': 'Turco', 'type': 'Perro', 'age': 10}
const mascota2 = {'name': 'Kai', 'type': 'Gato', 'age': 4}
const mascota3 = {'name': 'Dana', 'type': 'Perro', 'age': 5}
const mascota4 = {'name': 'Tino', 'type': 'Gato', 'age': 5}

const listaMascotas = [mascota1, mascota2, mascota3, mascota4]

// Find -> Find value in array
const result1 = listaMascotas.find(function(item){
    if(item.name === 'Turco') {
        return true
    }
})

console.log(result1)

let result2
listaMascotas.find(item => {
    if(item.name === 'Turco') {
        result2 = item.name
    }
})

console.log(result2)

const result3 = listaMascotas.find(item => item.name === 'Turco')

console.log(result3)

// Find with object deconstruction -> Return only the key value desconstructed

const {type, age} =  listaMascotas.find(item => item.name === 'Tino')

console.log(type, age)