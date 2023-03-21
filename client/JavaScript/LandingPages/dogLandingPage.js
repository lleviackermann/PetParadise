
let loginForm = document.querySelector(".header .login-form")
const form = document.querySelector(".login-form")
let signinBtn = document.getElementById("sign-in")
const signOutBtn = document.getElementById("sign-up")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const mailError = document.getElementById("mail-error")
const passwordError = document.getElementById("password-error")



form.addEventListener('submit', (e) => {
    let mailMessages = []
    let passwordMessages = []
    if (mail.value === '' || mail.value == null) {
        mailMessages.push("mail field cannot be empty")
        document.querySelector(".login-form #mail").classList.add("error")
    }
    else if (document.querySelector(".login-form #mail").classList.contains("error")) {
        document.querySelector("#mail").classList.toggle("error")
    }
    if (mailMessages.length > 0) {
        e.preventDefault()
        mailError.innerText = mailMessages.join(",")
    }

    if (password.value.length < 6 || password.value.length > 14) {
        passwordMessages.push("Password length should be inbetween 6 and 20 letters")
        console.log("Password length should be inbetween 6 and 20 letters");
        document.querySelector(".login-form #password").classList.add("error")
    }
    else if (document.querySelector(".login-form #password").classList.contains("error")) {
        document.querySelector("#password").classList.toggle("error")
    }

    if (passwordMessages.length > 0) {
        e.preventDefault()
        passwordError.innerText = passwordMessages.join(",")
    }
})

function Logo() {
    location.href = "#"

}

function XMark(login) {
    loginForm.classList.toggle("expand")
    login.classList.toggle("fa-xmark")
}



