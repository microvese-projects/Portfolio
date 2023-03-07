const hamburgerIcon = document.querySelector("#hamburger-menu");
const hamburgerContentContainer = document.querySelector(".links");

hamburgerIcon.addEventListener("click", showMenu);

function showMenu() {
  hamburgerContentContainer.classList.add("hamburger-content");
  
  // get nav-links in hamburger view
  const navLinks = document.querySelectorAll(".hamburger-content li");
  navLinks.forEach(navigationClose);
}

function closeMenu() {
  hamburgerContentContainer.classList.remove("hamburger-content");
}

function navigationClose(link) {
  link.addEventListener("click", closeMenu);
}
