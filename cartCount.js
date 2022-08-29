var cartCount = document.getElementById("cart-count")
var items = JSON.parse(localStorage.getItem("product"))



if (items != null) {
    cartCount.innerHTML = items.length
}
else {
    cartCount.innerHTML = 0
}