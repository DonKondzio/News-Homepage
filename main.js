const hamburger = document.querySelector(".hamburger");
const navShadow = document.querySelector(".nav-items--mobile");
const navContainer = document.querySelector(".nav-container");
const menuImg = document.querySelector(".menu-img");
const closeImg = document.querySelector(".close-img");

const handleNav = () => {
  navShadow.classList.toggle("hidden");
  navContainer.classList.toggle("-translate-y-full");
  menuImg.classList.toggle("animate-spinOnce");
  closeImg.classList.toggle("animate-spinOnce");
  setTimeout(() => {
    menuImg.classList.toggle("hidden");
    closeImg.classList.toggle("hidden");
  }, 300);
};

hamburger.addEventListener("click", handleNav);
