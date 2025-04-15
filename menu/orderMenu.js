

let orderList = [];

function updateOrderView() {
  const orderDiv = document.querySelector(".order-menu");
  if(orderList.length === 0) {
    orderDiv.style.display = "none";
    return;
  }
  orderDiv.style.display = "block";
  orderDiv.innerHTML = `<h3>Your Order</h3>`;

  let total = 0;

  orderList.forEach((item, index) => {
    total += item.price;

    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
      <span>${item.title}</span>
      <span>${item.price} ₹</span>
      <button data-index="${index}" class="remove-btn">❌</button>
    `;
    orderDiv.appendChild(orderItem);
  });

  if (orderList.length > 0) {
    const totalDiv = document.createElement("div");
    totalDiv.className = "order-total";
    totalDiv.innerHTML = `
      <strong>Total: ${total} ₹</strong>
      <button class="place-order-btn">Place Order</button>
    `;
    orderDiv.appendChild(totalDiv);

    orderDiv.querySelector(".place-order-btn").addEventListener("click", () => {
      showPopup(`✅ Order placed successfully!\nTotal: ${total} ₹`);
      orderList = [];
      updateOrderView();
    });
  }

  // Remove buttons
  orderDiv.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.index;
      orderList.splice(i, 1);
      updateOrderView();
    });
  });
}

// Menu item hover listener
const items = document.querySelectorAll(".cards")  
items.forEach((item,i) => {
  item.addEventListener("click", () => {
    // alert("i am working")
    const img = item.querySelector("img").src;
    const title = item.querySelector("h3").innerText;
    const priceText = item.querySelector("p").innerText;
    const priceSplit = priceText.split(" ")[1]; // Extracting the number part
    const price = parseInt(priceSplit); // Assuming "120 /- rs"
    
    // const desc = item.querySelector(".card-text").innerText;

    const overlay = document.createElement("div");
    overlay.className = "full-screen-overlay";
    overlay.innerHTML = `
      <div class="overlay-content">
        <button class="close-btn">&times;</button>
            <div class="item-details">
          <div class="item-header">
            <h2 class="item-title">${title}</h2>
          </div>
        <div class="item-image" style="background-image: url('${img}')"></div>
          <div class="item-header">
            <span class="item-price">${price} ₹</span>
          </div>
          </div>
          <div class="discriptionAdd">
       
          <button class="order-btn">Add to Order</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector(".close-btn").addEventListener("click", () => {
      overlay.classList.add("out"); // Trigger reverse animation
      setTimeout(() => {
        overlay.remove();
      }, 400); // Match this with animation duration
    });
    
    overlay.querySelector(".order-btn").addEventListener("click", () => {
      orderList.push({ title, price });
      updateOrderView();
    
      overlay.classList.add("out");
      setTimeout(() => {
        overlay.remove();
    
        // 👉 Show next item
        const allItems = Array.from(document.querySelectorAll(".cards"));
        const currentIndex = allItems.indexOf(item);
        const nextItem = allItems[currentIndex + 1];
    
        if (nextItem) {
          nextItem.click(); // Automatically open the next item
        } else {
          console.log("✅ All items added or no more items.");
        }
    
      }, 400);
    });
    
  });
});




const dragElement = (element) => {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      element.style.top = (element.offsetTop - pos2) + "px";
      element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  };

  dragElement(document.querySelector(".order-menu"));

 const goBack = () => { 
    window.history.back();
  }


  const showPopup = (message) => {
    const popup = document.getElementById("custom-popup");
    const messageBox = document.getElementById("popup-message");
    const closeBtn = document.querySelector(".popup-close");
  
    messageBox.textContent = message;
    popup.classList.remove("hidden");
  
    closeBtn.onclick = () => {
      popup.classList.add("hidden");
    };
  
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 2000); // auto-close after 3 seconds
  };
  


  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.cards').forEach(card => {
        card.addEventListener('mouseover', () => {
            try {
                card.style.transform = 'scale(1.1)';
               
            } catch (error) {
                console.error('Error in card click handler:', error);
            }
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        })
    });
});