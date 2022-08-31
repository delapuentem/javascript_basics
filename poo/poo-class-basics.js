// Classes uses for create objects 

// Variables inside classes -> attributes
// Functions inside classes -> Methods

export class Person {
    // Private attributes. Only can be accesed from inside class
    #hair

    // Constructor method
    constructor(name, age, hair){
        this.name = name; // Public attribute, this can be changed and accesed from outside of class with pokemon1.name = 'Bartolo'
        this.age = age; // Private attribute, this cant be changed and accesed from outside 
        this.#hair = hair;
        this._phone = 680555555; // Protected attributed. Only can be accesed from inside class and decendents classes
    }

    // Public methods
    personWhoIs(){
        return `This Person ${this.name} have ${this.age} years old`
    }

    personHairFunction(){ // Getter Function -> Public method that allow us access to private or protected attribute
        return `This person have ${this.#hair} hair`
    }

    personHairSetFunction(hair){ // Setter Function -> Public method that allow us change a private or protected attribute
        return this.#hair = hair
    }

    // Private methods
    #personPhoneNumber(){
        return `Value of phone number`
    }

    // Protected methods
    _personHaveObject(){
        return `This person has a object!`
    }

}

const person1 = new Person('Amanda', 28, 'curly')

console.log(person1.personWhoIs()) // Method
console.log(person1.name) // Propierty

// instanceof propierty -> Similar to typeof but for classes. ¿Is this instance inheritace of this Class?

console.log(person1 instanceof Person) 

// public and private attributes

person1.name = 'Alba'
console.log(person1.name)

//person1.hair = 'straight'
// console.log(person1.hair) // ERROR

console.log(person1.personHairFunction())


// Setter function. Change protected attribute

person1.personHairSetFunction('straight')
console.log(person1.personHairFunction())
console.log(person1)