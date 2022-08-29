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