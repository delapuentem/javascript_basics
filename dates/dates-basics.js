// Date object now in UTC
const date1 = new Date()

console.log(date1)

// Date object from string
const date2 = new Date("November 15, 2022 15:15:00 UTC")
const date3 = new Date("November 15, 2022 UTC")

console.log(date2)
console.log(date3)

// Get day, month and year from date

// Day -> .getDate()
console.log(date1.getDate())
console.log(date1.getUTCDate())

// Month -> .getMonth() -> 0 is January, 11 is December
console.log(date1.getMonth() + 1)
console.log(date1.getUTCMonth() + 1)

// Year -> .getFullYear()
console.log(date1.getFullYear())
console.log(date1.getUTCFullYear())

// Get hour, minutes, seconds..

console.log(date1.getHours())
console.log(date1.getUTCHours())

console.log(date1.getMinutes())
console.log(date1.getUTCMinutes())

console.log(date1.getSeconds())
console.log(date1.getUTCSeconds())

console.log(date1.getMilliseconds())
console.log(date1.getUTCMilliseconds())