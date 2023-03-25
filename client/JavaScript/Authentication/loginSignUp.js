
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
const confirmPassword = document.getElementById("user-confirm")
const form = document.querySelector(".contact-buttons")
const mailError = document.getElementById("mail-error")
const passwordError = document.getElementById("password-error")
const confirmPasswordError = document.getElementById("confirm-error")



form.addEventListener('click', (event) => {
    let mailErrorMessages = []
    let passwordErrorMessages = []
    let validMailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userMail.value == "" || userMail.value == null) {
        mailErrorMessages.push("User Mail cannot be empty")
        console.log("User mail cannot be empty");
    }
    else if (!userMail.value.match(validMailFormat)) {
        mailErrorMessages.push("Incorrect Mail Format!")
    }
    else if (document.querySelector("#user-mail").classList.contains("error")) {
        document.querySelector("#user-mail").classList.toggle("error")
        mailError.innerText = ""
    }
    if (mailErrorMessages.length > 0) {
        event.preventDefault()
        mailError.innerText = mailErrorMessages.join(",")
        document.querySelector(".contact-form #user-mail").classList.add("error")
    }
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    if (userPassword.value.length == 0 || !userPassword.value.match(lowerCaseLetters) || !userPassword.value.match(upperCaseLetters) || userPassword.value.length < 8) {
        passwordErrorMessages.push("Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        document.querySelector(".contact-form #user-password").classList.add("error")
    }

    if ((confirmPassword) != null && (confirmPasswordError) != null) {
        if (userPassword != null && confirmPassword != null && userPassword.value != confirmPassword.value) {
            event.preventDefault()
            confirmPasswordError.innerText = "Passwords doesnot match"
            document.querySelector(".contact-form #user-confirm").classList.add("error")
        }
        else if (document.querySelector("#user-confirm").classList.contains("error")) {
            document.querySelector(".contact-form #user-confirm").classList.remove("error")
            confirmPasswordError.innerText = ""
        }
        console.log("hello");
    }


    if (passwordErrorMessages.length > 0) {
        event.preventDefault()
        passwordError.innerText = passwordErrorMessages.join(",")
    }
    else if (document.querySelector("#user-password").classList.contains("error")) {
        document.querySelector("#user-password").classList.remove("error")
        passwordError.innerText = ""
    }
})

