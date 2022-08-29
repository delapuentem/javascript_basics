// This function generate autoincremental Id every time that it calls

function* IdGenerator() {
    let id = 0
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Do return and wait to call this function again
    }
}

const generate = IdGenerator(); // generate is a object generator, this have special methods of generator function

console.log(generate.next()) // Return a object
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())
console.log(generate.next())