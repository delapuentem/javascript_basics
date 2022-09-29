function doubleValue(value){
    if (typeof value === "number") {
        return value * 2
    }
    throw new Error("Value must be type number")

}


try {
    //console.log(doubleValue(value=noexist))
    console.log(doubleValue(value='string'))
}
catch(error) {
    console.error(`ERROR!: ${error}`)
}
finally {
    console.log("This always execute, and is optional")
}



const miFuncion1 = function(string){
    try{
        if (string === undefined){ 
            throw new Error(`No has asignado ningún valor al parámetro <string>`)
        }
        if ((typeof string) !== 'string'){
            throw new Error(`El valor debe de ser de tipo string. ${string} es tipo ${typeof string}.`)
        }
        return string.length

    }
    catch(error){
        return `${error.name}: ${error.message}`
    }
}

console.log(miFuncion1())
console.log(miFuncion1(5))
console.log(miFuncion1({'nombre': 'Jorge', 'apellidos': 'de la Puente'}))
