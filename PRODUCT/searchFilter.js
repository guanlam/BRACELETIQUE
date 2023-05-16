 //filter product by searching
 function myFilter() {
  const input = document.getElementById("myInputFilter");
  const filter = input.value;
  const card = document.querySelectorAll(".card");
  const nothing = document.querySelector("section.nothing");

  let matchCount = 0;

  for (let i = 0; i < card.length; i++) {
    const h5 = card[i].querySelector(".title h5, .name");

    if (h5.textContent.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
      card[i].style.display = "";
      matchCount++;
    } else {
      card[i].style.display = "none";
    }
  }

  if (matchCount === 0) {
    nothing.innerHTML = `<div class="nothingFound" >
                          <h4>0 Search Results</h4> 
                          <p>No results found.</p> 
                          <p>Sorry, your search for <b>"${filter}"</b> did not produce any results.</p>
                         </div>`;
  } else {
    nothing.innerHTML = "";
  }
}




// price high to low , low to high
const priceBtn = document.querySelector('.filter .price');
let ascending = true;
let arrowUp = true;
const arrowImg = document.getElementById('arrow');
const loading = document.querySelector('.loading');

priceBtn.addEventListener('click', () => {
  const productList = document.querySelectorAll('.card');

  // loading effect
  loading.style.display = "flex";

  setTimeout(() => {
    loading.style.display = "none";
    if (arrowUp) {
      arrowImg.src = 'PRODUCT/arrowUp.png';
      ascending = true;
    } else {
      arrowImg.src = 'PRODUCT/arrowDown.png';
      ascending = false;
    }
    
    arrowUp = !arrowUp;
    
    
    const sortedList = Array.from(productList).sort((a, b) => {
      const priceA = Number(a.querySelector('.price').textContent.replace(/\D/g,''));
      const priceB = Number(b.querySelector('.price').textContent.replace(/\D/g,''));
      return ascending ? priceA - priceB : priceB - priceA;
    });
    
    const productContainer = document.querySelector('.product');
    productContainer.innerHTML = '';
    sortedList.forEach(item => {
      productContainer.appendChild(item);
    });
  
  }, 1000);
  
  

});





//  explain
//  First, the code starts by selecting the element with class name "filter" and the element with 
// class name "price", and then adding an event listener to the "price" element. This event listener will listen for a "click" event, which will trigger a function to run.

//  Inside the event listener function, there is a conditional statement that checks the source URL 
// of the image with the ID "arrow". If the source URL contains the string "iconUpDown.png", it means that the arrow is currently pointing downwards and needs to be changed to point upwards, so the source URL of the "arrow" image is changed to "PRODUCT/arrowUp.png". If the source URL does not contain the string "iconUpDown.png", it means that the arrow is currently pointing upwards and needs to be changed to point downwards, so the source URL of the "arrow" image is changed to "PRODUCT/arrowDown.png".

//  Next, the code selects all the elements with class name "card" and puts them into a NodeList 
// called "productList". Then, the "productList" NodeList is converted into an array using the Array.from() method. The array is sorted using a function that compares the prices of each item in the list and returns either a positive, negative or zero value. The order of the items in the list is determined by whether the "ascending" variable is true or false. If it is true, the prices are sorted from lowest to highest, and if it is false, the prices are sorted from highest to lowest.

//  After the array is sorted, the "ascending" variable is inverted by using the logical NOT operator 
// ("!"). This ensures that the next time the "price" element is clicked, the sort order will be reversed.

// Finally, the sorted array of items is added back into the HTML by first selecting the element with 
// class name "product_necklace" and then replacing its contents with the sorted array using the .innerHTML method. This causes the sorted items to be displayed in the new order.
