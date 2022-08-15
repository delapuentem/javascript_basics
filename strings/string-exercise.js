//Create a JS file containing the following lines

//A text string with your Name
const nombre = `Jorge`

//A text string with your Last Name
const apellido = `de la Puente`

//A text string called "student" concatenating your First Name and Last Name with a space in between
const estudiante = `${nombre} ${apellido}`

//A text string called "studentMayus" that contains the string student but is all uppercase
const estudianteMayus = estudiante.toUpperCase()

//A text string called "studentMinus" that contains the string student but is all lowercase
const estudianteMinus = estudiante.toLowerCase()

//A variable containing the number of letters in the string "student" counting the spaces
const numEstudiante = estudiante.length

// A variable that contains the first letter of the Name
const string1 = nombre.slice(0, 1)

// Another variable that contains the last letter of the Surname
const string3 = apellido.slice(apellido.length - 1,apellido.length)
console.log(string3)

// A text string that removes spaces from the "student" variable
const string = estudiante.trim()

// A boolean variable that says if the Name is contained in the "student" variable
const string2 = estudiante.includes(nombre)