// show Navbar
// const nav = document.querySelector('.nav-menu');
// const toggle = document.querySelector('.nav-toggle');


// toggle.addEventListener('click',function(){
//     nav.classList.toggle('show-nav')
// })

// remove nav bar

// const navLink = document.querySelectorAll('.nav-link')

// function linkAction(){
//     const navMenu = document.querySelector('.nav-menu')
//     navMenu.classList.remove('show-nav')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

// change active color

// const linkColor = document.querySelectorAll('.nav-link')

// function colorLink(){
//     if(linkColor){
//         linkColor.forEach(l => l.classList.remove('active'))
//         this.classList.add('active')
//     }
// }
// linkColor.forEach(l => l.addEventListener('click',colorLink))

//change header backgroung when we scroll down

// function scrollHeader(){
//     const sh = document.getElementById('header');
//     if(this.scrollY >= 200){
//         sh.classList.add('scroll-header')
//     }
//     else{
//         sh.classList.remove('scroll-header')
//     }
// }

// window.addEventListener('scroll',scrollHeader);

let selpack = document.querySelector('#sel-pack');
let seldate = document.getElementById("sel-date");
let seltime = document.querySelector('#sel-time');
let selnum = document.querySelector('#sel-num');
let selapp = document.querySelector('.a-app');

selapp.addEventListener("click",(event)=>{
    if(selpack.value === "" || seldate.value ==="" || seltime.value ===""){
        window.alert("please select all fields");
        event.preventDefault()
    }
    else{
        let c = window.confirm("Confirm appointment:\nPackage cost : "+ selpack.value+"\nNumber of pets : "+selnum.value+ "\nDate : "+seldate.value+"\nTime : "+seltime.value+"\nTotal cost : "+(selpack.value*selnum.value) );

        if(!c) {
            event.preventDefault()
        }
    }
});

seldate.addEventListener("click",(event)=>{
    date= new Date()
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear()
if (month<10){
    month = "0"+(date.getMonth()+ 1)
}
let currentDate = `${year}-${month}-${day}`;
    seldate.min = currentDate
})

// (function(){
//     date = new Date()
//     console.log(date);
// })();

