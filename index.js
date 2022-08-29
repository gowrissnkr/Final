var url = ("https://5d76bf96515d1a0014085cf9.mockapi.io/product")


var clothingGrid = document.getElementById("clothing-grid")
var accessoryGrid = document.getElementById("accessory-grid")
var productWrapper = document.querySelector(".product-wrapper")

var leftColumn = document.querySelector(".left-column")
var rightColumn = document.querySelector(".product-description")

var cartCount = document.getElementById("cart-count")

var userData = []

$.get(url, function (response) {
    homepage(response)
})

function homepage(response) {
    for (var i = 0; i < response.length; i++) {
        if (response[i].isAccessory == false) {
            clothingGrid.innerHTML += `<div class="card" id="1">
            <div class="img">
            <img  id ="${response[i].id}" onclick="imgClicked('${response[i].id}')" src="${response[i].preview}" alt="">
            </div>
            <div class="details">
            <h3>${response[i].name}</h3>
            <h4>${response[i].brand}</h4>
            <h5>RS ${response[i].price}</h5>
            </div>
            </div>`
        }
        else
            accessoryGrid.innerHTML += `<div class="card" id="1">
            <div class="img">
            <img  id ="${response[i].id}" onclick="imgClicked('${response[i].id}')" src="${response[i].preview}" alt="">
            </div>
            <div class="details">
            <h3>${response[i].name}</h3>
            <h4>${response[i].brand}</h4>
            <h5>RS ${response[i].price}</h5>
            </div>
            </div>`
    }
}

function imgClicked(id) {
    var api = `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`
    var main = document.querySelector(".main")
    main.classList.add("non")
    productWrapper.classList.remove("non")
    $.get(api, function (response) {
        detailspage(response)
    })
}


function detailspage(response) {
    var pictures = response.photos
    leftColumn.innerHTML = `<img id="productImg" src="${response.preview}">`
    rightColumn.innerHTML = `
    <h1 id="name">${response.name}</h1>
    <h4 id="brand">${response.brand}</h4>
    <h3>Price: Rs <span id="price">${response.price}</span></h3>
    <div class="description">
      <h3>Description</h3>
      <p id="description">${response.description}</p>
    </div>
    <div class="product-preview">
      <h3>Product Preview</h3>
      <div id="previewImg">
      </div>
  </div>`

    var productImage = document.getElementById("previewImg")
    for (let i = 0; i < pictures.length; i++) {
        if (i == 0) {
            productImage.innerHTML += `<img id="img${i}" class = "active" onclick = "smallImgClicked('img${i}')" src="${pictures[i]}"/>`
        }
        else {
            productImage.innerHTML += `<img id="img${i}" onclick = "smallImgClicked('img${i}')" src="${pictures[i]}"/>`
        }
    }
    var productImg = document.getElementById("productImg")

}

var currentActiveId = "img0";
function smallImgClicked(e) {
    var smallImage = document.getElementById(e)
    productImg.src = smallImage.src
    smallImage.classList.add("active")
    var activeElement = document.getElementById(currentActiveId)
    activeElement.classList.remove("active");
    currentActiveId = e
}

var addToCart = document.getElementById("add-to-cart")

function addTo(e) {
    var itemImg = document.getElementById("productImg")
    itemImg = itemImg.src

    var itemName = document.getElementById("name")
    itemName = itemName.innerText

    var itemPrice = document.getElementById("price")
    itemPrice = itemPrice.innerText

    var alldetails = {
        itemImg: itemImg,
        itemName: itemName,
        itemPrice: itemPrice
    }

    if (localStorage.getItem("product") === null) {
        var productList = []
        productList.push(alldetails)
        localStorage.setItem("product", JSON.stringify(productList))
    }
    else {
        var data = JSON.parse(window.localStorage.getItem('product'));
        data.push(alldetails)
        localStorage.setItem("product", JSON.stringify(data))
    }
}





