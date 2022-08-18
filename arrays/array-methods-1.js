//.push() .pop() .shift() .unshift() .concat()
const list = ['Car', 'Train', 'Plane']

// Add items at start of array
list.unshift('Rocket', 'Skate')
console.log(list)
// Add items at end or end of array
list.push('Boat', 'Bicycle')
console.log(list)

// Delete the first item of array
list.shift()
console.log(list)
// Delete the last item of array
list.pop()
console.log(list)

// MERGE TWO LISTS

// Concat -> With concatenated method
const list2 = ['Twitter', 'Facebook']
const mergedLists = list.concat(list2)

console.log(mergedLists)

// With propagation factor
const mergedLists2 = [...list, ...list2]

console.log(mergedLists2)