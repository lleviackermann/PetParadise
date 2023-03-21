const hamburger = document.querySelector(".header .close-open .open");
const close = document.querySelector(".header .close-open .close");

const navMenu = document.querySelector(".header nav")

hamburger.addEventListener("click", (e) => {
    navMenu.style.display = "flex";
    hamburger.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", (e) => {
    navMenu.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
})

console.log(window.innerWidth)

window.addEventListener("resize", (e) => {
        console.log("hi")
        if(window.innerWidth > 800) {
            navMenu.style.display = "flex";
        }
    }, true
)


// if(window.innerWidth > 850px) {

// }