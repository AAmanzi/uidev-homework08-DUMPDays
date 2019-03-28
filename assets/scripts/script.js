window.addEventListener("scroll", () => {
  if(window.scrollY >= 100){
    document.getElementsByTagName("nav")[0].classList.add("background-navy");
  }
  else{
    document.getElementsByTagName("nav")[0].classList.remove("background-navy");
  }
});