const toogleIcon = document.querySelector(".toggle-icon");

toogleIcon.addEventListener("click", () => {
  toogleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
