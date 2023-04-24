const hamburger = document.querySelector(".components-navbar-header .components-navbar-close-open .components-navbar-open");
const close = document.querySelector(".components-navbar-header .components-navbar-close-open .components-navbar-close");
const navMenu = document.querySelector(".components-navbar-header nav")

hamburger.addEventListener("click", (e) => {
    console.log("Hi");
    navMenu.style.display = "flex";
    hamburger.style.display = "none";
    close.style.display = "block";
})

close.addEventListener("click", (e) => {
    navMenu.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
})


let shoppingCart = document.querySelector('.shopping-cart');
let temp = 0
console.log("hello");
if (document.querySelector('#cart-btn') != null) {
    document.querySelector('#cart-btn').parentElement.onclick = () => {
        shoppingCart.classList.toggle('active');
        if (shoppingCart.classList.contains('active') && temp == 0) {
            temp = 1
        }
    }
}
