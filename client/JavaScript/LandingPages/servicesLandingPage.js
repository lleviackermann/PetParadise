// show Navbar
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');


toggle.addEventListener('click',function(){
    nav.classList.toggle('show-nav')
})

// remove nav bar

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// change active color

const linkColor = document.querySelectorAll('.nav-link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click',colorLink))

//change header backgroung when we scroll down

function scrollHeader(){
    const sh = document.getElementById('header');
    if(this.scrollY >= 200){
        sh.classList.add('scroll-header')
    }
    else{
        sh.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll',scrollHeader);

// style="width: 300px; height: 400px;"