const animal = 'Guacamayo'

// Two ways to do same worflow. When we have a lot of if else conditions ...

// Condition with if else

let especie = ''

if (animal === 'Guacamayo') {
    especie = 'Ave'
} else if (animal === 'Elefante') {
    especie = 'Mamífero'
} else if (animal === 'Cocodrilo') {
    especie = 'Reptil'
} else {
    especie = 'No registrado'
}

console.log(`${animal} es ${especie}`)


// Condition with objects model -> This is better practice

const especie_object = {
    Guacamayo: 'Ave',
    Elefante: 'Mamífero', 
    Cocodrilo: 'Reptil'
}

const especie_default = 'No registrado'

const animal_especie = especie_object[animal] || especie_default

console.log(`${animal} es ${animal_especie}`)