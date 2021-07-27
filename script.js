//const  functions   = require('./util')
import functions from './util.js'

const nam = document.getElementById('name')
const password = document.getElementById('password')
const verifiedPassword = document.getElementById('verifiedPassword')

const errorElement = document.getElementById('error')
const form = document.getElementById('form')



function init() {

    form.addEventListener('submit', (e) => {
        let messages = []
        console.log(nam.value, password.value, verifiedPassword.value)



        const inputName = functions.validateValue('Name')
        const inputPassword = functions.validateValue('Password')
        const matchValues = functions.validateValue('Passwords')



        if (inputName.isEmpty(nam.value) == true) {


            messages.push(inputName.Message())

        }

        if (inputPassword.isEmpty(password.value) == true) {
            messages.push(inputPassword.Message())
        }

        messages.push(matchValues.matchValue(verifiedPassword.value, password.value))

        functions.showMessages(e, messages, errorElement)

    })
}


init()