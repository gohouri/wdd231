const navLinks = document.querySelector(".nav-links");
const menuBtn = document.querySelector("#icon-menu");

menuBtn.addEventListener("click", ()=> {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
});