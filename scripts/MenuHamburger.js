const hamburger = document.querySelector(".hamburger");
//console.log(hamburger);
const navMenu = document.querySelector(".nav-menu");
//console.log(navMenu);

document.querySelectorAll(".nav-menu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active-nav");
});
