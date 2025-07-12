const hamburger = document.querySelector(".ham");
const sideNav = document.querySelector(".sidenav");
const closeIcon = document.querySelector(".close-icon");
const cartButton = document.querySelector(".cart-btn");
const closeCartIcon = document.querySelector(".close-cart-icon");
const cartContainer = document.querySelector(".cart-container");
const productCard = document.querySelector(".product-card")
const productPage = document.querySelector(".product-page")

hamburger.addEventListener("click", () => {
  if (sideNav.style.display === "none") {
    sideNav.style.display = "block";
  } else {
    sideNav.style.display = "none";
  }
});

closeIcon.addEventListener("click", () => {
  if (sideNav.style.display === "block") {
    sideNav.style.display = "none";
  } else {
    sideNav.style.display = "block";
  }
});

closeCartIcon.addEventListener("click", () => {
  if (cartContainer.style.display === "flex") {
    cartContainer.style.display = "none";


  } else {
    cartContainer.style.display = "flex";
  }
});


cartButton.addEventListener("click", () => {
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "flex";
  } else {
    cartContainer.style.display = "none";
  }
});

productCard.addEventListener("click" , () => {
     if (productPage.style.display === "none") {
    productPage.style.display = "flex";
  } else {
    productPage.style.display = "none";
  }
})

productPage.addEventListener("click", () => {
  if (productPage.style.display === "flex") {
    productPage.style.display === "none";
  } else {
    productPage.style.display === "flex";
  }
});
