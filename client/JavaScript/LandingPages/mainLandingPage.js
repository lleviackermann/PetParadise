// const hamburger1 = document.querySelector(".header .close-open .open");
// const close = document.querySelector(".header .close-open .close");
// const navMenu = document.querySelector(".header nav")

// hamburger1.addEventListener("click", (e) => {
//     navMenu.style.display = "flex";
//     hamburger1.style.display = "none";
//     close.style.display = "block";
// })

// close.addEventListener("click", (e) => {
//     navMenu.style.display = "none";
//     hamburger1.style.display = "block";
//     close.style.display = "none";
// })

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const contactForm = document.querySelector(".contact-form");
const username = document.querySelector(".input-name");
const mail = document.querySelector(".input-email");
const message = document.querySelector(".input-message");
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/others/contact", true);
  xhr.setRequestHeader("Content-type", "application/json");
  const details = {
    name: username.value,
    email: mail.value,
    message: message.value,
  };
  username.value = "";
  mail.value = "";
  message.value = "";
  xhr.send(JSON.stringify(details));
});
