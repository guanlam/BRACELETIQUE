const nav = document.querySelector('nav');
const logo_title = document.querySelector('.logo-title');
const nav_li = document.querySelectorAll('nav > ul > li > a, .dropbutton');

function handleResize() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    nav.style.backgroundColor = "var(--main-color)";
    nav.style.flexDirection = "row";
    logo_title.style.color = 'var(--black)';
    nav_li.forEach(li => {
      li.style.color = 'var(--black)';
    });
  } else {
    if (window.scrollY > 0) {
      nav.style.backgroundColor = "var(--main-color)";
      nav.style.flexDirection = "row";
      logo_title.style.color = 'var(--black)';
      nav_li.forEach(li => {
        li.style.color = 'var(--black)';
      });

      nav.style.transition = 'background-color .4s ease-in-out';
    } else {
      nav.style.backgroundColor = 'hsl(0, 0%, 0%, 0.6)';
      nav.style.flexDirection = "column";
      logo_title.style.color = 'var(--white)';
      nav_li.forEach(li => {
        li.style.color = 'var(--white)';
      });

      nav.style.transition = 'background-color .4s ease-in-out';
    }
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
window.addEventListener('scroll',handleResize);


// nav
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});



// videoText show
window.onload = function() {
  setTimeout(function() {
    var videoText = document.querySelector('.video-text');
    videoText.classList.add("show");
  }, 1500);
}


//product
const container = document.querySelector('.product-width');
let isDown = false;
let startX;
let scrollLeft;

container.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
  isDown = false;
});

container.addEventListener('mouseup', () => {
  isDown = false;
});

container.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; // multiplier to adjust the swipe speed
  container.scrollLeft = scrollLeft - walk;
});



//scroll effect
const newcollectionImage = document.querySelector(".new_collection .new_image");
const newcollectionText = document.querySelector(".new_collection .text");
const newArrivalsText = document.querySelector(".top-product .newArrivals");
const productCard = document.querySelectorAll(".main-scroll-div .card");

window.addEventListener("scroll",function(){

  //image and text of new collection
  if (newcollectionImage.getBoundingClientRect().top < (window.innerHeight * (3/4))){
    newcollectionImage.classList.add("effect");
    newcollectionText.classList.add("effect");
  }else{
    newcollectionImage.classList.remove("effect");
    newcollectionText.classList.remove("effect");
  }

  //text of new arrivals
  if(newArrivalsText.getBoundingClientRect().top < window.innerHeight * (3/4)){
    newArrivalsText.classList.add("effect");

  }else{
    newArrivalsText.classList.remove("effect");
  }

  productCard.forEach( effect => {
    if(effect.getBoundingClientRect().top < window.innerHeight * (3/4)){
       effect.classList.add("effect");
    }else{
      effect.classList.remove("effect");
    }
    })
})




const linkNewPage = document.getElementById('linkNew');
linkNewPage.addEventListener('click', ()=>{
  window.location.href = 'onlineEx.html';
})
