window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.getElementsByTagName("nav")[0].classList.add("background-navy");
  }
  else {
    document.getElementsByTagName("nav")[0].classList.remove("background-navy");
  }
});

document.getElementsByClassName("header__menu")[0].addEventListener("click", () => {
  document.getElementById("popup__background").classList.remove("d-none-popup");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

let childrenArray = document.getElementById("popup__background").childNodes;

for (let child of childrenArray)
  child.addEventListener("click", () => {
    document.getElementById("popup__background").classList.add("d-none-popup");
    document.getElementsByTagName("body")[0].style.overflow = "visible";
  });