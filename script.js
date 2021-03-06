import { validateValue, showMessages } from './util.js'

const nam = document.getElementById('name')
const password = document.getElementById('password')
const verifiedPassword = document.getElementById('verifiedPassword')

const errorElement = document.getElementById('error')
const form = document.getElementById('form')



function init() {

    form.addEventListener('submit', (e) => {
        let messages = []

        const inputName = validateValue('Name')
        const inputPassword = validateValue('Password')
        const matchValues = validateValue('Passwords')



        if (inputName.isEmpty(nam.value) == true) {
            messages.push(inputName.Message())

        }

        if (inputPassword.isEmpty(password.value) == true) {
            messages.push(inputPassword.Message())
        }

        if (matchValues.matchValue(verifiedPassword.value, password.value) != 'matched') {
            messages.push(matchValues.matchValue(verifiedPassword.value, password.value))
        }

        if (messages.length > 0) {
            showMessages(e, messages, errorElement)
        }


    })
}


init()