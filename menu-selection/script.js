const menuEl = document.querySelector(".menu-selection");
const pEl = document.querySelector("p");
const arrowEl = document.querySelector(".fa-angle-down");
ListEl = document.querySelector(".social-Links");
const liEls=document.querySelectorAll(".social-Links li")
menuEl.addEventListener("click", () => {
  ListEl.classList.toggle("hide");
  arrowEl.classList.toggle("rotate");
 
})

liEls.forEach((el) => {
  el.addEventListener("click", () => {
    pEl.innerHTML = el.innerHTML;
    ListEl.classList.toggle("hide");
    arrowEl.classList.toggle("rotate");
  })
})