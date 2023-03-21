const inputs = document.querySelectorAll(".contact-input");
const toggleBtn = document.querySelector(".theme-toggle");
const allElements = document.querySelectorAll("*");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    allElements.forEach(el => {
        el.classList.add("transition");
        setTimeout(() => {
            el.classList.remove("transition");
        }, 1000)
    })
})


inputs.forEach((ipt) => {
    ipt.addEventListener("focus", () => {
        ipt.parentNode.classList.add("focus");
        ipt.parentNode.classList.add("not-empty");
    });

    ipt.addEventListener("blur", () => {
        if (ipt.value == "") {
            ipt.parentNode.classList.remove("not-empty");
        }
        ipt.parentNode.classList.remove("focus");
    });
})


const userMail = document.getElementById("user-mail")
const userPassword = document.getElementById("user-password")
const form = document.querySelector(".contact-buttons")
const mailError = document.getElementById("mail-error")
const passwordError = document.getElementById("password-error")



form.addEventListener('click', (event) => {
    let mailErrorMessages = []
    let passwordErrorMessages = []
    if (userMail.value == " " || userMail.value == null) {
        mailErrorMessages.push("User Mail cannot be empty")
        document.querySelector(".contact-form #user-mail").classList.add("error")
    }
    if (mailErrorMessages.length > 0) {
        event.preventDefault()
        mailError.innerText = mailErrorMessages.join(",")
    }
    else if (document.querySelector("#user-mail").classList.contains("error")) {
        document.querySelector("#user-mail").classList.toggle("error")
        mailError.innerText = ""
    }
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    if (userPassword.value.length == 0 || !userPassword.value.match(lowerCaseLetters) || !userPassword.value.match(upperCaseLetters) || userPassword.value.length < 6 || userPassword.value.length > 14) {
        passwordErrorMessages.push("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        document.querySelector(".contact-form #user-password").classList.add("error")
    }
    if (passwordErrorMessages.length > 0) {
        event.preventDefault()
        passwordError.innerText = passwordErrorMessages.join(",")
    }
    else if (document.querySelector("#user-password").classList.contains("error")) {
        document.querySelector("#user-password").classList.toggle("error")
        passwordError.innerText = ""
    }
})

