
  // Initialize fireworks effect
  var fireworks = new Fireworks();
  fireworks.initialize();





  // Fireworks constructor function
  function Fireworks() {
    var particles = [];
    var maxParticles = 1000;
    var canvas = document.getElementById('fireworks');
    var ctx = canvas.getContext('2d');


    // Initialize the fireworks effect
    this.initialize = function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.addEventListener('resize', this.initialize);
      var createParticleInterval = setInterval(this.createParticle.bind(this), 20);
var updateInterval = setInterval(this.update.bind(this), 30);

setTimeout(function() {
  clearInterval(createParticleInterval);
  clearInterval(updateInterval);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}, 5000);



      
    }

    // Create a new firework particle
    this.createParticle = function() {
if (particles.length < maxParticles) {
  var particle = {
    x: canvas.width /2,
    y: canvas.height /2,
    color: getRandomColor(),
    size: Math.floor(Math.random() * 15) + 5,
    speed: Math.floor(Math.random() * 10) + 5,
    angle: Math.floor(Math.random() * 360/2),
    rotation: Math.floor(Math.random() * 360),
    fade: 1.0 // add fade property to each particle
  };
  particles.push(particle);
}
}

    // Update the fireworks effect
    this.update = function() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
for (var i = 0; i < particles.length; i++) {
  var particle = particles[i];
  var radians = particle.angle * Math.PI / 180;
  var vx = Math.cos(radians) * particle.speed;
  var vy = Math.sin(radians) * particle.speed;
  particle.x += vx;
  particle.y -= vy;
  particle.rotation += 5;
  particle.fade -= 0.01; // decrease the particle's fade value
  if (particle.fade <= 0) {
    particles.splice(i, 1); // remove particle when fade reaches 0
    continue;
  }
  ctx.save();
  ctx.translate(particle.x, particle.y);
  ctx.rotate(particle.rotation * Math.PI / 180);
  ctx.globalAlpha = particle.fade; // set particle opacity
  ctx.fillStyle = particle.color;
  ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
  ctx.restore();
  if (particle.y < -particle.size || particle.x < -particle.size || particle.x > canvas.width + particle.size) {
    particles.splice(i, 1);
  }
}
}

    // Get a random color for the firework particle
    function getRandomColor() {
      var colors = ['#f5c543', '#ff9633', '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#795548', '#9e9e9e', '#607d8b'];
      var index = Math.floor(Math.random() * colors.length);
      return colors[index];
    }



     
  }



const OKButton = document.getElementById("OkButton");
const DisappearSuccessful = document.querySelector(".successful");
OKButton.addEventListener('click',() => {
  DisappearSuccessful.style.display = 'none';
  localStorage.removeItem("cartItems");

})







 // Get the current date and time
 var currentDate = new Date();

 // Format the date and time as desired
 var year = currentDate.getFullYear();
 var month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
 var day = currentDate.getDate().toString().padStart(2, '0');
 var hours = currentDate.getHours().toString().padStart(2, '0');
 var minutes = currentDate.getMinutes().toString().padStart(2, '0');
 var seconds = currentDate.getSeconds().toString().padStart(2, '0');
 var orderTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

 // Update the order ID and order time elements
 var orderIDElement = document.getElementById('orderID');
 orderIDElement.textContent = new Date().getTime();
 var orderTimeElement = document.getElementById('orderTime');
 orderTimeElement.textContent = orderTime;




 let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

 const finalProduct = document.querySelector(".itemSection");

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

  


});











