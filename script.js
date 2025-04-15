'use strict';

/* PRELOAD loading will be end after document is loaded */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/* add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/* HEADER & BACK TOP BTN */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/* HERO SLIDER */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }
  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/* auto slide */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);
window.addEventListener("load", autoSlide);

/*  ONLINE BOKING TABLE */

function data() {
  var a = document.getElementById("n1").value;
  var b = document.getElementById("n2").value;
  var c = document.getElementById("n3").value;
  var d = document.getElementById("n4").value;
  var e = document.getElementById("n5").value;

  if (a == "" || b == "" || c == "" || d == "" || e == "") {
    alert("All Fields are mendatory !");
    return false;
  }
  else if (b.length < 10 || b.length > 10) {
    alert("Plase Enter Correct Numbers !");
    return false;
  }
  else { true; }
}

function datain() {
  var f = document.getElementById("n6").value;
  if (f == "") {
    alert("Please write your email first !");
    return false;
  }
  else { true; }
}

/*-- Gsap Add For Animation --- */

// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);
//   const spans = document.querySelectorAll(".text span");

//   gsap.from(spans, {
//     duration: 0.4,
//     opacity: 0,
//     y: 20,
//     ease: "back.out(1)",
//     stagger: 0.09,
//     force3D: true,
//   });
// });


gsap.from("#anim", {
  y: -200,
  opacity: 0.2,
  duration: 2,
  stagger: 2,
  ease: "bounce.out",

})
gsap.from(".header img", {
  y: 130,
  duration: 2,
  Delay: 1,
  opacity: 0
})

gsap.from(".section menu .grid-list", {
  y: -200,
  opacity: 0.2,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".section menu .grid-list",
    scroller: "body"
  }
})

// onscroll text animation
gsap.to(".c1 h1", {
  duration: 3,
  ease: "power2.inOut", // Smoother easing function
  transform: "translateX(-65%)",
  scrollTrigger: {
    trigger: ".c1",
    start: "top 0%",
    end: "top -250%",
    scrub: 1, // Increased scrub value for smoother scrolling
    stagger: 0.5,
    pin: true,
    anticipatePin: 1 // Smoother pin behavior
  }
});

gsap.from(".section .section-subtitle", {
  x: -1000,
  opacity: 0.2,
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".section .section-subtitle",
    scroller: "body"
  }
})

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#video-id",
    start: "40% 45%",
    end: "80% 50%",
    scrub: -1,
    duration: 1,
    pin: true,
  }
});

tl
  .to("#video", {
    width: "80vw",
    height: "80vh",
  }, 'baba')

gsap.from(".service-card", {
  y: 50,
  opacity: 0,
  stagger: .5,
  duration: 2,
  scrollTrigger: {
    trigger: ".section .section-subtitle",
    scroller: "body",
  }
})
gsap.from(".container .feature-card", {
  y: 40,
  opacity: 0,
  stagger: .5,
  duration: 2,
  scrollTrigger: {
    trigger: ".container .feature-card",
    scroller: "body",

  }
})

gsap.from(".container #para", {
  y: 50,
  opacity: 0,
  stagger: .5,
  duration: 1,
  scrollTrigger: {
    trigger: ".container #para",
    scroller: "body",
    scrub: true,
  }
})

gsap.from("#section-event .card-title", {
  y: 130,
  duration: 1.5,
  Delay: 1,
  opacity: 0,
  stagger: .3,
  scrollTrigger: "#section-event .card-title",
  scrub: true,
})


// gsap.from("#menu #slide", {
//   y: -100,
//   opacity: 5,
//   duration: 5,
//   scrollTrigger: "#menu #slide",
//   scrub: true,
   
// })

gsap.from("#menu menu-item-list", {
  y: 50,
  stagger: .5,
  duration: 15,
  scrollTrigger: {
    trigger: "#menu menu-item-list",
    scroller: "body",
    scrub: true,
  }
})











/*-- SheryJs Add For advanced text Animation --- */

Shery.textAnimate(".container .headline-1", {
  style: 1,
  y: 10,
});

Shery.imageEffect(".special-dish-banner img", {
  style: 4,

  config:
  {
    "uColor": { "value": false },
    "uSpeed": { "value": 0.57, "range": [0.1, 1], "rangep": [1, 10] },
    "uAmplitude": { "value": 1.37, "range": [0, 5] },
    "uFrequency": { "value": 4.66, "range": [0, 10] },
    "geoVertex": { "range": [1, 64], "value": 20.72 },
    "zindex": { "value": -9996999, "range": [-9999999, 9999999] },
    "aspect": { "value": 0.7616657954347448 },
    "ignoreShapeAspect": { "value": true },
    "shapePosition": { "value": { "x": 0, "y": 0 } },
    "shapeScale": { "value": { "x": 1, "y": 1 } },
    "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
    "shapeRadius": { "value": 0, "range": [0, 2] },
    "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 },
    "gooey": { "value": false }, "infiniteGooey": { "value": false },
    "growSize": { "value": 4, "range": [1, 15] },
    "durationOut": { "value": 1, "range": [0.1, 5] },
    "durationIn": { "value": 1.5, "range": [0.1, 5] },
    "displaceAmount": { "value": 0.5 }, "masker": { "value": false },
    "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 },
    "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.2, "range": [0, 10] },
    "metaball": { "value": 0.2, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] },
    "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
    "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] }
  },
});


var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#thanksdiv",
    start: "50% 50%",
    end: "150% 50%",
    scrub: 2,
    pin: true
  }
});
tl
  .to("#center", {
    height: "100vh",
  }, 'a')
  .to("#top_div", {
    top: "-50%",

  }, 'a')
  .to("#bottom", {
    bottom: "-50%",
  }, 'a')
  .to("#top-h1", {
    top: "60%"
  }, 'a')
  .to("#bottom-h1", {
    bottom: "-30%"
  }, 'a')
  .to("#center-h1", {
    top: "-30%"
  }, 'a')
  .to(".content", {
    delay: -0.2,
    marginTop: "0%"
  })

gsap.from("#top-h1", {
  y: 50,
  duration: 1.50,
  delay: 1,
  opacity: 0
})
gsap.registerPlugin(ScrollTrigger);


const zoomVideo = document.getElementById("zoomfixed");
const strength = 40; // how far it pulls

// Get mouse position
document.addEventListener("mousemove", (e) => {
  const rect = zoomVideo.getBoundingClientRect();
  const relX = e.clientX - rect.left;
  const relY = e.clientY - rect.top;

  const centerX = rect.width / 1;
  const centerY = rect.height / 1;

  const deltaX = (relX - centerX) / centerX;
  const deltaY = (relY - centerY) / centerY;

  // Animate with GSAP
  gsap.to(zoomVideo, {
    x: deltaX * strength,
    y: deltaY * strength,
    duration: 0.4,
    ease: "power3.out"
  });
});

// Reset on leave
zoomVideo.addEventListener("mouseleave", () => {
  gsap.to(zoomVideo, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)"
  });
});
// Initialize Lenis smooth scrolling
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.from(".about-content", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".about-content",
    start: "top 80%", // Starts when element is 80% from top of viewport
    end: "bottom 20%",
    toggleActions: "play none none reverse",
    scrub: 1
  }
});
gsap.from(".service-header", {
  y: 50,  // Start position (200px from bottom)i
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".service-header",
    start: "top 80%", // Starts animation when element is 80% from top of viewport
    toggleActions: "play none none reverse"
  }
});
gsap.from(".services-card", {
  y: 100,  // Start from 100px below (will move up to original position)
  opacity: 0,
  duration: 1.5,
  ease: "power2.out",
  stagger: {
    amount: 0.6,  // Total amount of stagger between all cards
    from: "start"
  },
  scrollTrigger: {
    trigger: ".services-card",
    start: "top bottom-=50", // Starts when element is 100px from bottom of viewport
    toggleActions: "play none none reverse",
    scrub: true
  }
});

gsap.from(".special-dish-banner", {
  y: 50,
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".special-dish-banner",
    start: "top 80%",
    end: "top 20%",
    scrub: 1,
    toggleActions: "play none none reverse",
    onEnter: () => {
      gsap.to(".special-dish-banner img", {
        scale: 1.2,
        duration: 1,
        ease: "power2.out"
      });
    },
    onLeave: () => {
      gsap.to(".special-dish-banner img", {
        scale: 1,
        duration: 1,
        ease: "power2.in"
      });
    }
  }
});
gsap.from(".special-dish-content > *", {
  y: 100, // Start 100px below
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".special-dish-content",
    start: "top 80%", // Start animation when element is 80% from top of viewport
    end: "top 5%",
    scrub: 1,
    toggleActions: "play none none reverse"
  }
});

gsap.from('.form-left > *', {
  y: 50, // Start 50px below
  opacity: 0,
  duration: .7,
  stagger: 0.2, // Delay between each element
  scrollTrigger: {
    trigger: '.form-left',
    start: 'top 40%', // Start when element is 80% from top of viewport
    end: 'bottom 20%',
    toggleActions: 'play none none reverse',
    scrub: 1,
    // markers: true // Set to true for debugging
  }
});

gsap.from('.reservation', {
  y: 50,
  opacity: 0, 
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.new-form',
    start: 'top 40%', // Start when element is 80% from top of viewport
    end: 'bottom 20%', // Ends animation when element is 20% from top
    toggleActions: 'play none none reverse',
    scrub: true, // Smoothly animates with scroll
    // markers: true // Uncomment to debug trigger points
  }
})
gsap.from('.feature-item', {
  y: 300, // Start 100px below
  opacity: 0,
  duration: 1,
  stagger: {
    amount: 0.8, // Total time between first and last animation
    from: "start"
  },
  scrollTrigger: {
    trigger: '.feature-item',
    start: 'top 90%', // Starts when element is 80% from top of viewport
    end: '70% 30%',
    toggleActions: 'play none none reverse',
    scrub: true, // Smooth animation tied to scroll position
    // markers: true // Uncomment to debug trigger points
  }
});

// Magnetic effect for cards
const cards = document.querySelectorAll('.evnt');
const magnetStrength = 2; // Adjust strength of magnetic pull

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    gsap.to(card, {
      x: distanceX * 0.2,
      y: distanceY * 0.2,
      duration: 0.6,
      ease: "power3.out"
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  });
});

gsap.from("footer > * ", {
  y: 100, // Start 100px below
  opacity: 0,
  duration: 1.5,
  scrollTrigger: {
    trigger: "footer",
    start: "top 30%", // Starts when footer is 90% from top of viewport
    end: "top 0%",
    scrub: true, // Smooth animation tied to scroll
    toggleActions: "play none none reverse",
    // markers: true // Uncomment to debug trigger points
  }
});

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
      alert(`✅ Order placed successfully!\nTotal: ${total} ₹`);
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
document.querySelectorAll(".menu-section li").forEach((item,i) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img").src;
    const title = item.querySelector(".card-title").innerText;
    const priceText = item.querySelector(".title-2").innerText;
    const price = parseInt(priceText); // Assuming "120 /- rs"
    const desc = item.querySelector(".card-text").innerText;

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
          <p class="item-description">${desc}</p>
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
        const allItems = Array.from(document.querySelectorAll(".menu-item-list"));
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




