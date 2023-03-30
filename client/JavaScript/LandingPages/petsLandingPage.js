let navBar = document.querySelector(".header .navbar")
window.onscroll = () => {
    console.log("hello");
    if (scrollY > 0) {
        // document.activeElement?.blur();
    }
    else {
        document.querySelector('.header').classList.remove('expand')
    }
}

function Logo() {
    location.href = "/"

}

function XMark(login) {
    loginForm.classList.toggle("expand")
    login.classList.toggle("fa-xmark")
}


/* product slider below tablet and mobile screen widths*/
let slideIndex = 2;

let tabletWidth = window.matchMedia("(min-width:450px) and  (max-width: 600px)");
let mobileWidth = window.matchMedia("(max-width: 450px)")



function plusSlides(n) {
    console.log("slideIndex: " + slideIndex + " n: " + n);
    showSlides(slideIndex += n)
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("product");
    if (n > slides.length) {
        slideIndex = slides.length;
    }

    if (n <= 1) {
        if (tabletWidth.matches) {
            slideIndex = 2;
        }
        else {
            slideIndex = 1;
        }
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (tabletWidth.matches) {
        console.log("tablet screen matched  and slideIndex is:" + slideIndex);
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 2].style.display = "block";
    }
    else if (mobileWidth.matches) {
        console.log("mobile screen matched and slideIndex is:" + slideIndex);
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
        else {
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
            slides[slides.length - 1].style.display = "none"
        }
    };
})();
