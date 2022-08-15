const string = `This is a test string`

// Replace method -> Can do it with regex 
console.log(string.replace('test', 'production'))
console.log(string.replace(/test/g, 'development'))

// Trim method -> Delete trailing and leading white spaces
// trimStart, trimEnd
const string2 = `   This is a test string   `
console.log(string2.length)
console.log(string2.trim().length)

// Match method -> Return array with regex matches of string 
const string3 = `Pikachu is a pokemon type electric. This pokemon is the most popular pokemon`
console.log(string3.match(/pokemon/g))

//Includes method -> Return true or false if the string include 
console.log(string3.includes('pokemon'))

//startsWith and endsWith method -> Return true or false if the string start or end with specificic string
console.log(string3.startsWith('Pikachu'))
console.log(string3.endsWith('Pikachu'))