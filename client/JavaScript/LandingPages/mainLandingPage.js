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



// let shoppingCart = document.querySelector('.shopping-cart');
// let temp = 0
// document.querySelector('#cart-btn').onclick = () => {
//     shoppingCart.classList.toggle('active');
//     if (shoppingCart.classList.contains('active') && temp == 0) {
//         temp = 1
//     }
// }

// addToCartFromDb()
// let qunatityInputs = document.getElementsByClassName('qty');
// for (let i = 0; i < qunatityInputs.length; i++) {
//     let input = qunatityInputs[i]
//     input.addEventListener('change', function (event) {
//         updateCartTotal()
//     })
// }

// function updateCartTotal() {
//     let cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
//     // console.log(cartItemContainer)
//     let x = cartItemContainer.getElementsByClassName('box')
//     // console.log(x[0])
//     let total = 0;
//     for (let i = 0; i < x.length; i++) {
//         let cartRows = x[i].getElementsByClassName('content');
//         let priceElement = cartRows[0].getElementsByClassName('price')
//         // console.log(priceElement[0])
//         let quantityElement = cartRows[0].getElementsByClassName('qty')
//         let price = parseFloat(priceElement[0].innerText.replace('Rs.', ''))
//         // console.log(price);
//         let quantity = quantityElement[0].value
//         total = total + price * quantity
//     }
//     let y = cartItemContainer.getElementsByClassName('total')
//     let z = y[0].innerText = 'Total :' + total
// }

// let addToCartButtons = document.getElementsByClassName('cart')
// let cartItemNames = document.getElementsByClassName('name')
// for (let i = 0; i < addToCartButtons.length; i++) {
//     let button = addToCartButtons[i]
//     button.addEventListener('click', function (event) {
//         let x = button.parentElement
//         let y = x.getElementsByClassName('des')[0]
//         let imagSource = x.getElementsByClassName('imgsrc')[0].src
//         let title = y.getElementsByClassName('title')[0].innerText
//         let price = parseFloat(y.getElementsByClassName('rate')[0].innerText)
//         let productDetails = {
//             type: "add",
//             title: title,
//             price: parseFloat(price),
//             imagSource: imagSource
//         }
//         let key = 0
//         for (let i = 0; i < cartItemNames.length; i++) {
//             if (cartItemNames[i].innerText === title) {
//                 alert('This item is already added to cart')
//                 key = 1
//             }
//             console.log(cartItemNames[i] + " " + title);
//         }
//         if (key == 0) {
//             fetch("/products/product",
//                 {
//                     method: "POST",
//                     headers: {
//                         'Accept': 'application/json, text/plain, */*',
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(productDetails)
//                 })
//                 .then(function (response) {
//                     return response.json();
//                 })
//                 .then(function (result) {
//                     alert(result);
//                 })
//             addToCartItems(title, price, imagSource)
//         }
//     })
// }

// function addToCartFromDb() {
//     console.log("Adding data from db");
//     let i = 0;
//     Names.forEach(element => {
//         if (element !== " ") {
//             addToCartItems(element, prices[i], src[i])
//             i++
//         }
//     });
// }

// function addToCartItems(title, price, imagSource) {
//     let cartRow = document.createElement('div')
//     cartRow.classList.add('box')
//     let cartItems = document.getElementsByClassName('shopping-cart')[0]
//     let cartItemNames = document.getElementsByClassName('name')
//     let cartRowContents = `
//       <img src="${imagSource}" style="width: 200px;">
//         <div class="content">
//             <h3 class="name">${title}</h3>
//             <span class="price">Rs.${price}</span>
//             <span class="quantity">qty : <input type="number" min="1" class="qty" name="qty" value="1"></span>
//             <input type="hidden" id="custId" name="custId" value="${price} ${title} ${imagSource}">
//             <span class="remove" price="${price}" title="${title}" imagSource = "${imagSource}"><i class="fa-solid fa-xmark"></i></span>
//         </div>
// `
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     let x = cartRow.getElementsByClassName('remove')
//     for (let i = 0; i < x.length; i++) {
//         let y = x[i]
//         y.addEventListener('click', function (event) {
//             let buttonClicked = event.target
//             console.log("button clicked");
//             console.log(y);
//             let productDetails = {
//                 type: "remove",
//                 title: y.getAttribute('title').trim(),
//                 price: parseFloat(y.getAttribute('price')),
//                 imagSource: y.getAttribute('imagSource')
//             }
//             buttonClicked.parentElement.parentElement.parentElement.remove()
//             console.log("price is:" + productDetails.price);
//             xhr.onreadystatechange = () => {
//                 if (xhr.readyState === 4) {
//                     alert(xhr.response);
//                 }
//             }

//             xhr.open("POST", '/products/product', true)
//             xhr.setRequestHeader('Content-type', 'application/json')
//             xhr.send(JSON.stringify(productDetails))
//             updateCartTotal()
//         })
//     }
//     let y = cartItems.getElementsByClassName('qty')
//     for (let i = 0; i < y.length; i++) {
//         let input = y[i]
//         input.addEventListener('change', function (event) {
//             updateCartTotal()
//         })
//     }
//     updateCartTotal()
// }
