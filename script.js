const burger = document.getElementById("burger");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("hide");
    burger.classList.toggle("hide");
    close.classList.toggle("hide");
});
close.addEventListener("click", () => {
    menu.classList.toggle("hide");
    burger.classList.toggle("hide");
    close.classList.toggle("hide");
});