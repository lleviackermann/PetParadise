// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     shoppingCart.classList.remove('active');
//     login.classList.remove('active');
//     navbar.classList.remove('active');
// }

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    // searchForm.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    // searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    login.classList.remove('active');
    
}

Window.onscroll = () =>{
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}

const swiper = new Swiper('.product-slider',{
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1020: {
            slidesPerView:3,
        },
    },
});

const reviewSlider = new Swiper('.review-slider',{
    loop:true,
    spaceBetween:20,
    autoplay: {
        delay:3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1020: {
            slidesPerView:3,
        },
    },
});

// cart button

let removeCartItemButtons = document.getElementsByClassName('remove')
for(let i=0;i<removeCartItemButtons.length;i++){
     let button = removeCartItemButtons[i]
     button.addEventListener('click',function(event){
        let buttonClicked = event.target
          buttonClicked.parentElement.parentElement.parentElement.remove()
          updateCartTotal()
     })
}

let qunatityInputs = document.getElementsByClassName('qty');
for(let i=0;i<qunatityInputs.length;i++){
    let input = qunatityInputs[i]
    input.addEventListener('change',function(event){
        updateCartTotal()
    })
}

function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
    // console.log(cartItemContainer)
    let x = cartItemContainer.getElementsByClassName('box')
    let total=0;
    for(let i=0;i<x.length;i++){
         let cartRows=x[i].getElementsByClassName('content');
        //  console.log(cartRows)
         let priceElement = cartRows[0].getElementsByClassName('price')
         let quantityElement =cartRows[0].getElementsByClassName('qty')
         console.log(quantityElement[0].innerText)
         let price = parseFloat(priceElement[0].innerText.replace('Rs.',''))
        //  console.log(price);
         let quantity = quantityElement[0].value
         console.log(quantity)
         total =total +price*quantity
    }
    let y=cartItemContainer.getElementsByClassName('total')
    let z=y[0].innerText= 'Total :'+total
}

let addToCartButtons = document.getElementsByClassName('cart')
// console.log(addToCartButtons)
for(let i=0;i<addToCartButtons.length;i++){
    let button = addToCartButtons[i]
    // console.log(button)
    button.addEventListener('click',function(event){
        let x = button.parentElement
        let y = x.getElementsByClassName('des')[0]
        let imagSource =x.getElementsByClassName('imgsrc')[0].src
        let title =y.getElementsByClassName('title')[0].innerText
        let price =y.getElementsByClassName('price')[0].innerText
        console.log(title,price,imagSource)
        addToCartItems(title,price,imagSource)
    })
}

function addToCartItems(title,price,imagSource){
    let cartRow = document.createElement('div')
    cartRow.classList.add('box')
    let cartItems = document.getElementsByClassName('shopping-cart')[0]
    let cartItemNames =document.getElementsByClassName('name')
    for(let i=0;i<cartItemNames.length;i++){
        if(cartItemNames[i].innerText== title){
            alert('This item is already added to cart')
            return 
        }
    }
    let cartRowContents = `
              <img src="${imagSource}" style="width: 200px;">
                <div class="content">
                    <h3 class="name">${title}</h3>
                    <span class="price">Rs.${price}</span>
                    <span class="quantity">qty : <input type="number" min="1"  class="qty" value="1"></span>
                    <span class="remove"><i class="fa-solid fa-xmark"></i></span>
                </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
   let x=cartItems.getElementsByClassName('remove')
   for(let i=0;i<x.length;i++){
    let y=x[i]
    y.addEventListener('click',function(event){
        let buttonClicked=event.target
       buttonClicked.parentElement.parentElement.parentElement.remove()
       updateCartTotal()
    })
   }
   let y = cartItems.getElementsByClassName('qty')
   for(let i=0;i<y.length;i++){
    let input = y[i]
    input.addEventListener('change',function(event){
        updateCartTotal()
    })
}
    updateCartTotal()
}