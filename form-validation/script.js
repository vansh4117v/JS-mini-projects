const nameError = document.getElementById("name-error")
const phoneError = document.getElementById("phone-error")
const emailError = document.getElementById("email-error")
const messageError = document.getElementById("message-error")

const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const message = document.getElementById("message")

const submit = document.getElementById("submit")

function modify(tag, tagError, color, message) {
    tagError.innerHTML = message
    tagError.style.bottom = (color === "green") ? "10px" : "-20px";
    tag.style.borderBottomColor = color
}

function validateName() {
    const nameValue = name.value.trim()
    if (!nameValue.length) {
        modify(name,nameError ,"red","Name is required")
    }
    else if (!/^[A-Za-z]+(?: [A-Za-z]+)+$/.test(nameValue)) {
        modify(name,nameError ,"red","Enter valid Full Name")
    }
    else {
        modify(name,nameError ,"green",`<i class="fas fa-check-circle"></i>`)
        return true
    }
    return false
}

function validatePhone() {
    const phoneValue = phone.value.trim()
    if (!phoneValue.length) {
        modify(phone,phoneError ,"red","Phone Number is required")
    }
    else if (!/^[0-9]{10}$/.test(phoneValue)) {
        modify(phone,phoneError ,"red","Enter valid Phone Number")
    }
    else {
        modify(phone,phoneError ,"green",`<i class="fas fa-check-circle"></i>`)
        return true
    }
    return false
}

function validateEmail() {
    const emailValue = email.value.trim()
    if (!emailValue.length) {
        modify(email,emailError ,"red","email is required")
    }
    else if (!/^[a-zA-Z][a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        modify(email,emailError ,"red","Enter valid email")
    }
    else {
        modify(email,emailError ,"green",`<i class="fas fa-check-circle"></i>`)
        return true
    }
    return false
}

function validateMessage() {
    const messageValue = message.value.trim()
    if (!messageValue.length) {
        modify(message,messageError ,"red","Message is required")
    }
    else if (messageValue.length<30) {
        modify(message,messageError ,"red",`${30-messageValue.length} more characters required`)
    }
    else {
        modify(message,messageError ,"green",`<i class="fas fa-check-circle"></i>`)
        return true
    }
    return false
}

let nameTimeout;
name.addEventListener("keyup", () => {
    clearTimeout(nameTimeout);
    nameTimeout = setTimeout(validateName, 700);
});

let phoneTimeout;
phone.addEventListener("keyup", () => {
    clearTimeout(phoneTimeout);
    phoneTimeout = setTimeout(validatePhone, 700);
});

let emailTimeout;
email.addEventListener("keyup", () => {
    clearTimeout(emailTimeout);
    emailTimeout = setTimeout(validateEmail, 700);
});

let messageTimeout;
message.addEventListener("keyup", () => {
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(validateMessage, 700);
});

submit.addEventListener("click", (e) => {
    if (!(validateName() && validatePhone() && validateEmail() && validateMessage())) {
        e.preventDefault();
    }
})

// vansh4117v