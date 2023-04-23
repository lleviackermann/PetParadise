let data = {
    products: [
        JSON.parse(document.querySelector('.data').innerText)
    //    {
    //        productName: "Pedigree for adult dog",
    //        category: "dogs",   
    //        price: "449",
    //        image: "../../img/foodservicesLandingPage/dogFood1.jpg",
    //    },
    //    {
    //        productName: "Omega One pellets for fish",
    //        category: "fishes",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/fishFood1.jpg",
    //    },
    //    {
    //        productName: "Whiskas food for cats",
    //        category: "cats",   
    //        price: "649",
    //        image: "../../img/foodservicesLandingPage/catFood1.jpg",
    //    },
    //    {
    //        productName: "IuPreem food for parrots",
    //        category: "birds",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/birdFood1.jpg",
    //    },
    //    {
    //        productName: "Barking Dogs food for dogs",
    //        category: "dogs",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/dogFood2.jpg",
    //    },
    //    {
    //        productName: "Tetra Min flakes for fish",
    //        category: "fishes",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/fishFood2.jpg",
    //    },
    //    {
    //        productName: "IAMS food for cats",
    //        category: "cats",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/catFood2.jpg",
    //    },
    //    {
    //        productName: "Wagner's food for birds",
    //        category: "birds",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/birdFood2.jpg",
    //    },
    //    {
    //        productName: "Crunch Bites for dogs",
    //        category: "dogs",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/dogFood3.jpg",
    //    },
    //    {
    //        productName: "Discus food mix for fish",
    //        category: "fishes",   
    //        price: "449",
    //        image: "../../img/foodservicesLandingPage/fishFood3.jpg",
    //    },
    //    {
    //        productName: "Perfect Bistro for cats",
    //        category: "cats",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/catFood3.jpg",
    //    },
    //    {
    //        productName: "Wild Harvest for parrots",
    //        category: "birds",   
    //        price: "649",
    //        image: "../../img/foodservicesLandingPage/birdFood3.jpg",
    //    },
    //    {
    //        productName: "IAMS food for dogs",
    //        category: "dogs",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/dogFood4.jpg",
    //    },
    //    {
    //        productName: "Discovery food for fish",
    //        category: "fishes",   
    //        price: "349",
    //        image: "../../img/foodservicesLandingPage/fishFood4.jpg",
    //    },
    //    {
    //        productName: "Kit Cat food for cat",
    //        category: "cats",   
    //        price: "649",
    //        image: "../../img/foodservicesLandingPage/catFood4.jpg",
    //    },
    //    {
    //        productName: "Meal Worms for birds",
    //        category: "birds",   
    //        price: "549",
    //        image: "../../img/foodservicesLandingPage/birdFood4.jpg",
    //    },
    //    {
    //        productName: "Wild Earth food for dogs",
    //        category: "dogs",   
    //        price: "449",
    //        image: "../../img/foodservicesLandingPage/dogFood5.jpg",
    //    },
    //    {
    //        productName: "Top Cat food for cats",
    //        category: "cats",   
    //        price: "399",
    //        image: "../../img/foodservicesLandingPage/catFood5.jpg",
    //    },
    //    {
    //        productName: 'Dried worms for fishes',
    //        category: 'fishes',
    //        price: '549',
    //        image: '../../img/foodservicesLandingPage/fishFood6.jpg',
    //    },
    //    {
    //        productName: 'Peckish food for birds',
    //        category: 'birds',
    //        price: '599',
    //        image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    }
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // },
    //    // {
    //    //     productName: 'Peckish food for birds',
    //    //     category: 'birds',
    //    //     price: '599',
    //    //     image: '../../img/foodservicesLandingPage/birdFood6.jpg',
    //    // }   
    ]
    ,
    reviews:[
        JSON.parse(document.querySelector('.revdata').innerText)
    ]

}


let card = document.getElementsByClassName('product-content');
let xyz = card[0];

for(let i=0 ; i<data.products[0].length; i++){
   xyz.innerHTML += `<div class="${data.products[0][i].petType} items">
   <img class="imgsrc " src="${data.products[0][i].productDetails.src}" style="width: 200px;">
       <div class="des"> <h3 class="title" >${data.products[0][i].productDetails.Name}</h3>
       <div class="price"><i class="fa-solid fa-indian-rupee-sign"></i>${data.products[0][i].productDetails.price}</div>
       <div class="stars">
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star"></i>
           <i class="fas fa-star-half-alt"></i>
       </div></div>
       <div class="cart"><a href="#products" class="btn">Add to cart</a></div>
       </div>`; 
}

// review fetching
let revcard = document.getElementsByClassName('review-slider');
let fetchRev = revcard[0];

for(let i=0 ; i<data.reviews[0].length; i++){
    fetchRev.innerHTML += `<div class="box">
        <h3>${data.reviews[0][i].Name}</h3>
        <p>${data.reviews[0][i].review}</p>
        </div>`; 
 }



function refresh(){

   let elements = document.querySelectorAll(".items");
   elements.forEach((ele) =>{
       ele.classList.remove('inactive');
   })

   let dog = document.getElementsByClassName('dogs');
   let cat = document.getElementsByClassName('cats');
   let bird = document.getElementsByClassName('birds');
   let fish = document.getElementsByClassName('fishes');

   const ex = document.getElementsByClassName('button-value');

   for(let i=0;i<ex.length;i++){
       let check = ex[i];
       check.addEventListener('click',()=>{
           switch(check.innerHTML) {
               case "All" :
                   for(let i=0;i<5;i++){
                       let c1 = cat[i];
                       let c2 = bird[i];
                       let c3 = fish[i];
                       let c4 = dog[i];

                       c1.classList.remove('inactive');
                       c2.classList.remove('inactive');
                       c3.classList.remove('inactive');
                       c4.classList.remove('inactive')

                   } 
                   check.classList.add("active");
                   break;
               case "Dog" :
                   for(let i=0;i<5;i++){
                       let c1 = cat[i];
                       let c2 = bird[i];
                       let c3 = fish[i];

                       c1.classList.add('inactive');
                       c2.classList.add('inactive');
                       c3.classList.add('inactive');

                   } 
                   check.classList.add("active");
                   break;
               case "Cat" :
                   for(let i=0;i<5;i++){
                       let c1 = dog[i];
                       let c2 = bird[i];
                       let c3 = fish[i];
       
                       c1.classList.add('inactive');
                       c2.classList.add('inactive');
                       c3.classList.add('inactive');
       
                   } 
                   check.classList.add("active");
                   break;
               case "Bird" :
                   for(let i=0;i<5;i++){
                       let c1 = dog[i];
                       let c2 = cat[i];
                       let c3 = fish[i];
           
                       c1.classList.add('inactive');
                       c2.classList.add('inactive');
                       c3.classList.add('inactive');
           
                   } 
                   check.classList.add("active");
                   break;
               case "Fish" :
                   for(let i=0;i<5;i++){
                       let c1 = dog[i];
                       let c2 = bird[i];
                       let c3 = cat[i];
       
                       c1.classList.add('inactive');
                       c2.classList.add('inactive');
                       c3.classList.add('inactive');
       
                   } 
                   check.classList.add("active");
                   break;
           }
       })
       check.classList.remove('active');

   }
}

function convertFirstToUpper(value){
   let v = value[0].toUpperCase();
   value = v + value.substr(1);
   console.log(value);
   return value;
}

// search
let show = document.querySelector('.product-content');

document.getElementById("search").addEventListener("click", () => {
   let searchInput = document.getElementById("search-input").value;
//    console.log(searchInput);
   let elements = document.querySelectorAll(".title");
   let cards = document.querySelectorAll(".items");
//    console.log(elements);
   elements.forEach((element, index) => {
     if (element.innerHTML.includes(searchInput) ){
       cards[index].classList.remove("inactive");
       show.classList.add('view-search');
     } else {
       cards[index].classList.add("inactive");
     }
   });
 });

// view more products 
let view = document.querySelector('.viewbtn');
console.log(view.innerHTML);
const str1 = "View more";
view.addEventListener("click",()=>{
   if(view.innerHTML === "View more"){
   show.classList.remove('view-search');
   show.classList.add('show-more');
   view.innerHTML = "Show Less";
   }
   else{
       show.classList.add('view-search');
       show.classList.remove('show-more');
       view.innerHTML = "View more";
   }
});


// cart button

// let removeCartItemButtons = document.getElementsByClassName('remove')
// for(let i=0;i<removeCartItemButtons.length;i++){
//      let button = removeCartItemButtons[i]
//      button.addEventListener('click',function(event){
//         let buttonClicked = event.target
//           buttonClicked.parentElement.parentElement.parentElement.remove()
//           updateCartTotal()
//      })
// }

// let qunatityInputs = document.getElementsByClassName('qty');
// for(let i=0;i<qunatityInputs.length;i++){
//     let input = qunatityInputs[i]
//     input.addEventListener('change',function(event){
//         updateCartTotal()
//     })
// }

// function updateCartTotal(){
//     let cartItemContainer = document.getElementsByClassName('shopping-cart')[0]
//     // console.log(cartItemContainer)
//     let x = cartItemContainer.getElementsByClassName('box')
//     let total=0;
//     for(let i=0;i<x.length;i++){
//          let cartRows=x[i].getElementsByClassName('content');
//         //  console.log(cartRows)
//          let priceElement = cartRows[0].getElementsByClassName('price')
//          let quantityElement =cartRows[0].getElementsByClassName('qty')
//          console.log(quantityElement[0].innerText)
//          let price = parseFloat(priceElement[0].innerText.replace('Rs.',''))
//         //  console.log(price);
//          let quantity = quantityElement[0].value
//          console.log(quantity)
//          total =total +price*quantity
//     }
//     let y=cartItemContainer.getElementsByClassName('total')
//     let z=y[0].innerText= 'Total :'+total
// }

// let addToCartButtons = document.getElementsByClassName('cart')
// // console.log(addToCartButtons)
// for(let i=0;i<addToCartButtons.length;i++){
//     let button = addToCartButtons[i]
//     // console.log(button)
//     button.addEventListener('click',function(event){
//         let x = button.parentElement
//         let y = x.getElementsByClassName('des')[0]
//         let imagSource =x.getElementsByClassName('imgsrc')[0].src
//         let title =y.getElementsByClassName('title')[0].innerText
//         let price =y.getElementsByClassName('price')[0].innerText
//         console.log(title,price,imagSource)
//         addToCartItems(title,price,imagSource)
//     })
// }

// function addToCartItems(title,price,imagSource){
//     let cartRow = document.createElement('div')
//     cartRow.classList.add('box')
//     let cartItems = document.getElementsByClassName('shopping-cart')[0]
//     let cartItemNames =document.getElementsByClassName('name')
//     for(let i=0;i<cartItemNames.length;i++){
//         if(cartItemNames[i].innerText== title){
//             alert('This item is already added to cart')
//             return 
//         }
//     }
//     let cartRowContents = `
//               <img src="${imagSource}" style="width: 200px;">
//                 <div class="content">
//                     <h3 class="name">${title}</h3>
//                     <span class="price">Rs.${price}</span>
//                     <span class="quantity">qty : <input type="number" min="1"  class="qty" value="1"></span>
//                     <span class="remove"><i class="fa-solid fa-xmark"></i></span>
//                 </div>
//     `
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//    let x=cartItems.getElementsByClassName('remove')
//    for(let i=0;i<x.length;i++){
//     let y=x[i]
//     y.addEventListener('click',function(event){
//         let buttonClicked=event.target
//        buttonClicked.parentElement.parentElement.parentElement.remove()
//        updateCartTotal()
//     })
//    }
//    let y = cartItems.getElementsByClassName('qty')
//    for(let i=0;i<y.length;i++){
//     let input = y[i]
//     input.addEventListener('change',function(event){
//         updateCartTotal()
//     })
// }
//     updateCartTotal()
// }
