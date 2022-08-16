const num = 5.354447

// Numbers to string
const numString = num.toString()
console.log(`value: ${numString} type: ${typeof(numString)} `)

// Limit the number of decimals, not rounded. By default 0 decimals are limited. Be careful with typeof, toFixed output is type string
const numRounded = num.toFixed(4)
console.log(`value: ${numRounded} type: ${typeof(numRounded)}`)

// Convert strings to numbers
const numNoString1 = parseFloat(numString)
console.log(`value: ${numNoString1} type: ${typeof(numNoString1)}`)
const numNoString2 = parseInt(numString)
console.log(`value: ${numNoString2} type: ${typeof(numNoString2)}`)