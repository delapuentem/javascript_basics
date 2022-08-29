const date1 = new Date()
const date2 = new Date("November 15, 2022 15:12:00 UTC")

console.log(date1)
console.log(date2)

console.log(date1.toLocaleDateString('es-ES'))
console.log(date1.toLocaleTimeString('es-ES'))
console.log(date1.toLocaleString('es-ES'))