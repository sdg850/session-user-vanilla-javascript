const validateValue = (inputName) => {

    return {
        Message: function () {
            return `${inputName} is required`
        },
        matchValue: function (value1, value2) {
            if (value1 != value2) {
                return `${inputName} is not matched`
            }

            return "matched";
        },
        isEmpty: function (inputValue) {
            if (inputValue == null
                || inputValue === ''
                || inputValue === undefined ) {
                return true
            }

            return false
        }
    }

}

const showMessages = (e, messages, Element) => {
    if (messages.length > 0) {
        Element.innerText = messages.join('\n')
        e.preventDefault()
    }
}





export { showMessages, validateValue };





