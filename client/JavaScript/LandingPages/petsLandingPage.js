/* product slider below tablet and mobile screen widths*/
let slideIndex = 2;
let tabletWidth = window.matchMedia("(min-width:450px) and  (max-width: 600px)");
let mobileWidth = window.matchMedia("(max-width: 450px)")


let Productprice = []
let productName
let imgSrc
let i = []
console.log("hello");



// async function fetchCall() {
//     let data = await fetch("/dogs/data",
//         {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json, text/plain, */*',
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then(async function (res) {
//             return await res.json()
//         }).then(async function (result) {
//             alert(result)
//             return await result
//         })
//     return await data
// }
// let data = fetchCall()
// alert(JSON.stringify(data))
// alert("hello")
const xhr = new XMLHttpRequest()
let result
(async function () {
    xhr.onreadystatechange = async () => {
        if (xhr.readyState === 4) {
            alert(xhr.response);
            result = await xhr.response
        }
    }
    xhr.open("POST", '/dogs/data', true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.send(null)
})
alert("result is:" + result);





//         .then(async function (res) {
//             return await res.json()
//         })
//         .then(async function (data) {
//             alert(await JSON.stringify(data.Names))
//             result = data
//         })
// }
// alert(result)
// let Productprice = document.querySelector(".prices-data").innerText.split(",")
// let productName = document.querySelector(".names-data").innerText.split(",")
// let imgSrc = document.querySelector(".src-data").innerText.split(",")
let originalProductprice = [].concat(Productprice)
let originalproductName = [].concat(productName)
let originalimgSrc = [].concat(imgSrc)
document.querySelector(".prices-data").remove()
document.querySelector(".names-data").remove()
document.querySelector(".src-data").remove()

// let a = []
// Productprice.forEach(p =>
//     a.push(parseInt(p)))

// Productprice = a

console.log(Productprice);
console.log(productName);
console.log(imgSrc);

// let imgSrc = ["../../img/dogLandingPage/Dog_Breeds/labdrador_retriever.png", "../../img/dogLandingPage/Dog_Breeds/Golden_retriever.png", "../../img/dogLandingPage/Dog_Breeds/beagle.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png", "../../img/dogLandingPage/Dog_Breeds/german_shepard.png",]


sortList = []
function sortArrays(arrays, comparator = (a, b) => (a < b) ? -1 : (a > b) ? 1 : 0) {
    let arrayKeys = Object.keys(arrays);
    let sortableArray = Object.values(arrays)[0];
    let indexes = Object.keys(sortableArray);
    let sortedIndexes = indexes.sort((a, b) => comparator(sortableArray[a], sortableArray[b]));

    let sortByIndexes = (array, sortedIndexes) => sortedIndexes.map(sortedIndex => array[sortedIndex]);

    if (Array.isArray(arrays)) {
        return arrayKeys.map(arrayIndex => sortByIndexes(arrays[arrayIndex], sortedIndexes));
    } else {
        let sortedArrays = {};
        arrayKeys.forEach((arrayKey) => {
            sortedArrays[arrayKey] = sortByIndexes(arrays[arrayKey], sortedIndexes);
        });
        return sortedArrays;
    }
}


let fullScreenSlider = 0
let products = document.querySelector(".products")
console.log("function called here");
slides(fullScreenSlider * 4)

function expandFilter() {
    console.log("expand filter is called");
    let filterOptions = document.getElementById("filter-options")
    if (filterOptions.classList.contains("active")) {
        filterOptions.classList.remove("active")
    }
    else {
        filterOptions.classList.add("active")
    }
}
let SelectedFilters = document.querySelector(".search-bar .search")

function removeFromSearch(element) {
    // document.querySelector(`.filter-option.${element.classList[0]}`).classList.remove('active')
    filter(element.classList[0])
    element.remove()
    console.log(sortList);
}
function addFilterToSearchBar(type) {
    let filterOpt = document.querySelector(`.filter-option.${type}`)
    if (filterOpt.classList.contains('active')) {
        SelectedFilters.innerHTML += `<button class='${type} search-option' onclick='removeFromSearch(this)'>${type}</button>`
    } else {
        console.log("remove is called");
        document.querySelector(`.search-option.${type}`).remove()
    }
}
function sortListUpdate() {
    console.log("In sortlist update");
    console.log(sortList);
    sortList.forEach((ele) => {
        if (ele == "name") {
            let sorted = sortArrays([productName, Productprice, imgSrc])
            Productprice = sorted[1]
            productName = sorted[0]
            imgSrc = sorted[2]
        }
        else if (ele == "price") {
            let sorted = sortArrays([Productprice, productName, imgSrc])
            Productprice = sorted[0]
            productName = sorted[1]
            imgSrc = sorted[2]
            console.log("sorting by prices");
            console.log(Productprice);
            console.log(typeof (Productprice[0]));
        }
    })

}
function filter(type) {
    console.log("filter of type," + type + " is called");
    // Productprice.sort((a, b) => productName.indexOf(a) - productName.indexOf(b));
    let filterOpt = document.querySelector(`.filter-option.${type}`)
    console.log(filterOpt);
    fullScreenSlider = 0
    if (filterOpt.classList.contains("active")) {
        filterOpt.classList.remove("active")
        productName = originalproductName
        Productprice = originalProductprice
        imgSrc = originalimgSrc
        sortList = sortList.filter(function (item) {
            return item !== type
        })
        console.log("sortlist:" + sortList);
    }
    else {
        filterOpt.classList.add("active")
        original = []
        sortList.push(type)
    }
    addFilterToSearchBar(type)
    sortListUpdate()
    slides(fullScreenSlider)
}

function Append(name, imgSrc, price) {
    products.innerHTML += `
    <div class="product">
        <h3>${name}</h3>
        <div class="card">
        <div class="front">
            <img src="${imgSrc}" alt = "" />
        </div >
            <div class="back">
                <p class="info">Male|Female</p>
                <p class="info">8 Weeks Old</p>
                <p class="info cost">Rs.${price} <span>Rs. 30000.00</span></p>
                <a href="" class="pet"><span>Shop Now</span></a>
            </div>
        </div >
    </div>
    `
    console.log("Successfully Appended");
    console.log(products);
}


function plusSlides(n) {
    if (mobileWidth.matches || tabletWidth.matches) {
        showSlides(slideIndex += n)
    }
    if ((fullScreenSlider != 0 || n > 0) && (fullScreenSlider + n) * 4 < productName.length) {
        console.log("Slides function is called");
        slides((fullScreenSlider += n) * 4)
    }
    console.log("slideIndex: " + fullScreenSlider + " n: " + n);
}

function slides(n) {
    console.log("Slides function called");
    let slides = document.getElementsByClassName("product")
    slideNumber = n
    for (i = 0; i < slides.length && productName.length > slideNumber; i++) {
        console.log("none");
        slides[i].style.display = "none";
    }
    // if (slideNumber == 0) {
    //     slideNumber++;
    // }
    for (i = 0; i < 4; i++) {
        // if (slideIndex == i) {
        //     slideIndex++;
        // }

        if (productName.length <= slideNumber + i) {
            break;
        }
        console.log("slideIndex" + slideNumber, "i:" + i);
        // slides[slideNumber + i].style.display = "block";
        console.log(imgSrc[slideNumber + i]);
        Append(productName[slideNumber + i], imgSrc[slideNumber + i], Productprice[slideNumber + i])
        // slides[slideNumber + i - 1].style.display = "block";
    }
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
        else if (mobileWidth.matches) {
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
            // document.getElementsByClassName("explore")[1].style.display = "block"
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
