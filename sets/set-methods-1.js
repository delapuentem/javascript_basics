// Set. Data set that cant have duplicate values or inmutable items.
const data = ['Pikachu', 'Bulbasur', 'Charmander', 'Charmander']

const dataSet = new Set(data)

console.log(dataSet)


// .add() -> Add new item to data set. If that item exists it doesnt add it
dataSet.add('Blastoiser', 'Pikachu')
console.log(dataSet)

// .delete() -> Delete item. if not exists, does nothing
dataSet.delete('Pikachu')
console.log(dataSet)

dataSet.delete('Mewtow')

// .has() Same as .includes() of array. Return true if item exists in Set
console.log(dataSet.has('Blastoiser'))

// .size() Return the number of items inside set
console.log(dataSet.size)

// .forEach() Iterate into Set items
dataSet.forEach(function(item){
    console.log(item)
})

dataSet.forEach(item =>{
    console.log(item)
})

// .clear() -> Clear all data in Set
dataSet.clear()

console.log(dataSet)