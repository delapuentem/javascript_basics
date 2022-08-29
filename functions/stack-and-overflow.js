// stack and overflow functions

// stacking
function gretting() {
    sayHi()
}

function sayHi() {
    console.log('Hi ! im The sayHi() function')
}

gretting()


// overflow -> Recursive problem

function recursive() {
    recursive()
}

recursive() // RangeError: Maximum call stack size exceeded