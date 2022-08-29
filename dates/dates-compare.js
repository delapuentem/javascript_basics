// Compare dates. Cant compare two dates objects because objecto date is not inmutable.

// ¿How? with .getTime() -> Cast into seconds unix epoch format and compare it 
const date1 = new Date("November 15, 2022 15:15:00 UTC")
const date2 = new Date("November 15, 2022 15:12:00 UTC")

const date3 = new Date("July 24, 2022 UTC")
const date4 = new Date("July 24, 2022 UTC")

// Compare it

console.log(date1.getTime() === date2.getTime())
console.log(date3.getTime() === date4.getTime())