const hamburger = document.querySelector(".ham");
const sideNav = document.querySelector(".sidenav");
const closeIcon = document.querySelector(".close-icon");


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