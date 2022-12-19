const openIcon = document.querySelector(".openIcon");
const closeIcon = document.querySelector(".closeIcon");
const slideBar = document.querySelector(".slideBar");
openIcon.addEventListener("click", function () {
  slideBar.style.top = "0";
  document.body.style.overflow = "hidden";
  window.scrollTo(0, 0);
});
closeIcon.addEventListener("click", function () {
  slideBar.style.top = "-100vh";

  document.body.style.overflowY = "scroll";
});
