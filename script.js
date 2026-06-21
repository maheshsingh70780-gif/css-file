const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

// Open Menu
menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

// Close Menu
cancelBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    if(window.scrollY > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
});