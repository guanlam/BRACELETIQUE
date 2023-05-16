
const icon = document.querySelector("nav .cart")
const addToCartButton = document.querySelectorAll(".card .addToCart",);
const titleOfProduct = document.querySelectorAll('.card .title h5, .card.name');
const imageOfProduct = document.querySelectorAll('.card img');
const priceOfProduct = document.querySelectorAll('.card .price');

//cart number
const quantityDisplay = document.getElementById('quantity-cart');
//first to get the number of cart (All subproduct page must have this)
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// // Calculate the quantity of items in the cart

let quantity = 0;
for (let i=0; i < cartItems.length; i++){
  quantity += cartItems[i].quantity;
}

quantityDisplay.textContent = quantity;


addToCartButton.forEach((button, index) => {
  button.addEventListener('click', function () {

   //effexct for cart
    icon.classList.add("active");
    setTimeout(function() {
      icon.classList.remove("active");
    }, 500);


    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Get the price as a number
    const price = parseFloat(priceOfProduct[index].innerText.replace(/RM\s/, ''));
    let quan = 1;
    let cartItem = {
      title: titleOfProduct[index].innerText,
      image: imageOfProduct[index].src,
      price: price,
      quantity: quan
    };

    //Check if the item already exists in the cart
let existingItem = cartItems.find(item => item.title === cartItem.title && item.price === cartItem.price);
if (!existingItem) {
  cartItems.push(cartItem);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
} else {
  existingItem.quantity += 1;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

//Second add the quantity of items in the cart
quantity++;
// Update the quantity displayed on the page
quantityDisplay.textContent = quantity;


   
  });
});







