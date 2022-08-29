var cart = document.getElementById("cart-item-container")
var totalAmount = document.getElementById("total-amount")
var numberofitem = document.getElementById("number-of-item")
var items = JSON.parse(localStorage.getItem("product"))



localStorage.setItem("cart", "[]")


var counting = 1;
var count = 0;
var itemArr = JSON.parse(window.localStorage.getItem('cart'));




if (items != null) {
    for (var i = 0; i < items.length; i++) {
        {
            count = count + parseInt(items[i].itemPrice)
        }
    }
}
if (items != null) {
    itemArr.push(items[0])
    for (var i = 0; i < items.length; i++) {
        if (items[0].itemPrice == items[i].itemPrice) {
            continue;
        }
        else {
            itemArr.push(items[i])
        }
    }
}


if (itemArr != null) {
    for (let i = 0; i < itemArr.length; i++) {
        cart.innerHTML += `<div class="item"><img src=${itemArr[i].itemImg}>
          <div class="detail">
          <h3>${itemArr[i].itemName}</h3>
          <p>Amount: ${itemArr[i].itemPrice}</p>
          </div>
          </div>`
    }
}

if(count == 0){
totalAmount.innerHTML = " "
}else {
    totalAmount.innerHTML = count
}

if (items != null) {
    numberofitem.innerHTML = items.length
    cartCount.innerHTML = items.length
}


function cartEmpty(){
    localStorage.clear()
}









