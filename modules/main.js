// !!! Dont forget put the "type": "module" in the package.json

// 2 ways for import external custom modules

// Fisrt way
import { custom1, custom2, propierty } from "./module.js";

// Second way
import * as customModule from "./module.js";

console.log(custom1())
console.log(custom2())
console.log(propierty)

console.log(customModule.custom1())
console.log(customModule.custom2())
console.log(customModule.propierty)