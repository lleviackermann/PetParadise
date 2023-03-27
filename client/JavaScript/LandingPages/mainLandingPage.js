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
