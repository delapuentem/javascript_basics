import { Person } from "./poo-class-basics.js"

class Developer extends Person{ // Inheritance
    constructor(name, age, hair, languaje){ 
        super(name, age, hair)
        this.languaje = languaje
    }

    personWhoIs(){ // Override ->  Polymorphism
        return super.personWhoIs() + ` and is ${this.languaje} developer !`
    }    

    developerAction() {
        return `Im developer !!`   
    }
}

const person1 = new Person('Amanda', 28, 'curly')
const person2 = new Developer('Brian', 30, 'bold', 'Python')

// Know hair type -> Hair is private attribute but can access it with public function
console.log(person2.personHairFunction())

console.log(person2)

// This method only exists in Developer class
console.log(person2.developerAction())

// This methos is inheritanced from Person and has been override -> Polymorphism
console.log(person2.personWhoIs())