const cartProduct = document.querySelector(".container");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];





//
let subtotal = 0;
let total = 0;
//

if (cartItems.length > 0) {
  // Render the initial cart section
  cartProduct.innerHTML = `
    <div class="title"> 
      <h2>Your Shopping Cart</h2>
    </div>
    <div class="cart-total">
      <div class="cart-items"></div>
      <div class="summary">
        <h3>Order Summary</h3>
        <div class="calculation">
          <div class="subtotal">
            <h5>Subtotal</h5>
            <h5 id="subtotal-value">RM 0</h5>
          </div>
          <div class="shipping">
            <h5>Shipping Fee</h5>
            <h5>Free</h5>
          </div>
          <hr>
          <div class="total">
            <h5>Total</h5>
            <h5 id="total-value">RM 0</h5>
          </div>
          <div class="checkout">
            <a href="loginOrder.html"><button class="checkout-button">Checkout</button></a>
          </div>
        </div>
      </div>

           
          </div>
        </div>
      </div>
    </div>
  `;
 
  // Render the cart items
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItems.forEach((cartItem) => {



    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item';
    cartItemElement.innerHTML = `
      <div class="cart-item-image">
        <img src="${cartItem.image}">
      </div>
      <div class="cart-item-details">
        <div class="info-cart">
          <h3>${cartItem.title}</h3>
          <h5>RM${cartItem.price}</h5>
        </div>
        <div class="delete-number">
          <button class="delete-button">Delete</button>
          <div class="minus_plus"><button>-</button><h5>${cartItem.quantity}</h5><button>+</button></div>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(cartItemElement);

    
    //order summary
    subtotal += cartItem.price * cartItem.quantity;
    total = subtotal;

  


    
  });

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll('.delete-button');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      location.reload();
    });
  });





} else {
  cartProduct.innerHTML = `
    <div class="title"> 
      <h2>Your Shopping Cart</h2>
    </div>
    <div class="cart-product">
      <h3>Your shopping cart is empty</h3>
      <a href="necklace.html"><button>Continue Shopping</button></a>
    </div>
  `;
}

const subtotalValue = document.getElementById('subtotal-value');
subtotalValue.textContent = `RM ${subtotal.toFixed(2)}`;


const totalValue = document.getElementById('total-value');
totalValue.textContent = `RM ${total.toFixed(2)}`;























// // Calculate the quantity of items in the cart
const quantityDisplay = document.getElementById('quantity-cart');
let quantity = 0;
for (let i=0; i < cartItems.length; i++){
  quantity += cartItems[i].quantity;
  
}
// // Update the quantity displayed on the page
quantityDisplay.textContent=quantity;





//minus and plus function
/// Add event listeners to minus and plus buttons
const minusButtons = document.querySelectorAll('.minus_plus button:first-child');
const plusButtons = document.querySelectorAll('.minus_plus button:last-child');

minusButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      updateCartItem(index);

    }
  });
});

plusButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    cartItems[index].quantity++;
    updateCartItem(index);
  });
});

// Function to update cart item
function updateCartItem(index) {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  location.reload();
}










//addtocart.js