// Asynchronous functions are functions that do not depend on our 
// infrastructure, that are executed on another server as a call to an API or an external database.

function asincFunction() {
    // Do a call to external database
    // It can give us some error
}

// Promises are used in asynchronous functions. They are functions that may or may not be executed
const myPromise = new Promise((resolve, reject) => {
    const executonSuccess = true
    // If all is OK
    if (executonSuccess) {
        resolve()
    } else {
        reject()
    }
})

// ¿How we can consume this promises? -> The basics

myPromise
    .then(() => console.log("Execution OK"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("This always execute, and is optional"))