const bar = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-times");
const burger = document.querySelector("div.burger");
const nav = document.querySelector("nav");

function show()
{
    bar.classList.toggle("unactive");
    x.classList.toggle("unactive");
    nav.classList.toggle("showNav")
    burger.classList.toggle("burgerTransform");
}

burger.addEventListener("click", show);
