let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
    search.classList.remove("active");
    cartItem.classList.remove("active");
});

let cartItem = document.querySelector(".cart-items-container"); 
let cartBtn = document.querySelector("#cart-btn");

cartBtn.addEventListener("click", () =>{
    cartItem.classList.toggle("active");
    search.classList.remove("active");
    navbar.classList.remove("active");
});

let search = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", ()=>{
    search.classList.toggle("active");
    cartItem.classList.remove("active");
    navbar.classList.remove("active");
});

let header = document.querySelector(".header");

window.onscroll = () =>{
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    search.classList.remove("active");
    header.classList.add("black");
}

