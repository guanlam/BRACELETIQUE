let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


const finalProduct = document.querySelector(".finalProduct");
const howManyItem = document.querySelector(".details h2");
const subtotal = document.getElementById('subtotal-value');
const Ttotal = document.getElementById('total-value');



let total = 0;
let quantity = 0;






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
          <div class="quantity"> <h6>Quantity:${cartItem.quantity}</h6></div>
      </div>
    `;
    finalProduct.appendChild(cartItemElement);

    total += (cartItem.price * cartItem.quantity);
    quantity += cartItem.quantity;


});


subtotal.innerHTML =`RM ${total.toFixed(2)} `;
Ttotal.innerHTML = `RM ${total.toFixed(2)}`;


// display the number of product
howManyItem.innerHTML = `Your shopping bag (${quantity} item)`;



const loading = document.querySelector(".loading");
const form = document.querySelector(".form");

form.addEventListener('submit', (event) =>{
  // Prevent form submission
  event.preventDefault();
  
  // Show loading animation
  loading.style.display = 'flex';

  // Delay form submission for 3 seconds
  setTimeout(() => {
    // Hide loading animation
    loading.style.display = "none";

    // Submit form
    form.submit();

  }, 2500)
})







// Get the payment buttons
const tngButton = document.getElementById('tng');
const grabButton = document.getElementById('grab');
const paypalButton = document.getElementById('paypal');

// Add event listeners to the buttons
tngButton.addEventListener('click', () => {
  // Open the QR code in a new window
  window.open('payment/qrcode.jpeg','_blank');
  // Wait for 5 seconds and then redirect to the completed page
  setTimeout(() => {
    window.location.href = 'completed.html';
  }, 5000);
});

grabButton.addEventListener('click', () => {
  // Open the QR code in a new window
  window.open('payment/grabpayqr.jpeg','_blank');
  // Wait for 5 seconds and then redirect to the completed page
  setTimeout(() => {
    window.location.href = 'completed.html';
  }, 5000);
});

paypalButton.addEventListener('click', () => {
  // Open the PayPal page in the same window
  window.open('https://www.paypal.me/qing2580', '_blank');


  setTimeout(() => {
    window.location.href = 'completed.html';
  }, 5000);
});
