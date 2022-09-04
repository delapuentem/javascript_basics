// Events have 3 steps: Action, handler and listener

// 1. The action
function changeColor() {
    title.style.color = 'blue'
    console.log('Color changed')
    button.removeEventListener('click', changeColor) // This remove the event
    button.disabled = true
}

// 2. The handler: select the html DOM element
const title = document.getElementById('heading-1')
const button = document.getElementById('mybutton')

// 3. The listener: This triggered where event ocurrs. 'click is the event name: https://developer.mozilla.org/es/docs/Web/Events'
// The listener hace 2 parameters, the event and the action
button.addEventListener('click', changeColor)



// Form

const form = document.getElementById('myform')

const output = document.getElementById('outputform')

function sendForm(event) {
    event.preventDefault() // Prevent the default behaviour of form
    console.log(event)
    console.log(event.target.myname.value) // Return input value. This are connected because input have name='myname'
    output.innerText = event.target.myname.value
}

form.addEventListener('submit', sendForm)




