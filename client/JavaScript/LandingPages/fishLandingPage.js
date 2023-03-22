let loginForm = document.querySelector(".header .login-form")
let navBar = document.querySelector(".header .navbar")
const form = document.querySelector(".login-form")
let signinBtn = document.getElementById("sign-in")
const signOutBtn = document.getElementById("sign-up")
const mail = document.getElementById("mail")
const password = document.getElementById("password")
const mailError = document.getElementById("mail-error")
const passwordError = document.getElementById("password-error")


window.onscroll = () => {
    loginForm.classList.remove('active')
    navBar.classList.remove('active')
    if (scrollY > 0) {
        document.querySelector('.header').classList.add('expand')
    }
    else {
        document.querySelector('.header').classList.remove('expand')
    }
}

document.body.addEventListener("click",function(e){
    let target = e.target;
    // if(target == document.body && loginForm.classList.contains("expand")){
    //     loginForm.remove("expand")
    // }
})




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


/*Image Slider design*/
let slideIndex = 2;

let tabletWidth = window.matchMedia("(min-width:450px) and  (max-width: 600px)");
let mobileWidth = window.matchMedia("(max-width: 450px)")



function plusSlides(n) {
    console.log("slideIndex: "+slideIndex+" n: "+n);
    showSlides(slideIndex += n)
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product");
    if (n > slides.length) { if(tabletWidth.matches){
        slideIndex = 2;
    }else{
        slideIndex = 1;
    }
}
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (tabletWidth.matches ) {
        console.log("tablet screen matched  and slideIndex is:"+slideIndex);
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 2].style.display = "block";
    }
    else if (mobileWidth.matches) {
        console.log("mobile screen matched and slideIndex is:"+slideIndex);
        slides[slideIndex - 1].style.display = "block";
    }
}

(function () {
    window.onresize = displayWindowSize;
    function displayWindowSize() {
        if (tabletWidth.matches || mobileWidth.matches) {
            console.log("Tablet size Matches");
            slideIndex = 2
            showSlides(slideIndex)
            document.getElementsByClassName("explore")[1].style.display = "none"
            // document.getElementById("exploreMore").style.display = "none"
        }
        else if (mobileWidth.matches) {
            console.log("Mobile size Matches");
            slideIndex = 1;
            showSlides(slideIndex)
        }
        else{
            document.getElementsByClassName("explore")[1].style.display = "block"
            console.log("explore more button is turned on");
        }
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        if (myWidth > 600) {
            let slides = document.getElementsByClassName("product")
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "block"
            }
            console.log("Width size" + slides.length); 
            //For the find out more button(It is displayed with only the product slider i.e with width more than 600px)
            slides[slides.length-1].style.display="none"
        }
    };
})();
