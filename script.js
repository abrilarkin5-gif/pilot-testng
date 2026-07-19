let cart = [];



function addToCart(name, price) {
  
  
  cart.push({
    
    name: name,
    price: price
    
  });
  
  
  updateCart();
  
  
  alert(name + " added to cart!");
  
  
  
}



function updateCart() {
  
  
  let cartItems = document.getElementById("cartItems");
  
  
  cartItems.innerHTML = "";
  
  
  let total = 0;
  
  
  
  cart.forEach((item, index) => {
    
    
    total += item.price;
    
    
    
    cartItems.innerHTML += `

<div class="cart-item">

<span>

${item.name}

<br>

₱${item.price}

</span>


<button onclick="removeCart(${index})">

X

</button>


</div>


`;
    
    
  });
  
  
  
  document.getElementById("totalPrice")
    .innerText = total.toLocaleString();
  
  
  
}




function removeCart(index) {
  
  
  cart.splice(index, 1);
  
  
  updateCart();
  
  
}




function openCart() {
  
  
  document.getElementById("cartPanel")
    .classList.toggle("active");
  
  
}




function checkout() {
  
  
  if (cart.length === 0) {
    
    
    alert("Your cart is empty!");
    
    
    return;
    
    
  }
  
  
  
  alert(
    
    "Thank you for ordering from Culina Global! Your food is being prepared."
    
  );
  
  
  
  cart = [];
  
  
  updateCart();
  
  
}





// SEARCH FUNCTION


document
  .getElementById("search")
  .addEventListener("keyup", function() {
    
    
    
    let value = this.value.toLowerCase();
    
    
    
    let products = document.querySelectorAll(".product-card");
    
    
    
    products.forEach(card => {
      
      
      let text = card.innerText.toLowerCase();
      
      
      
      if (text.includes(value)) {
        
        
        card.style.display = "block";
        
        
      }
      
      else {
        
        
        card.style.display = "none";
        
        
      }
      
      
    });
    
    
    
  });