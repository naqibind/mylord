document.oncontextmenu = () => {
  alert("don't try right click");
  return false;
};
document.onkeydown = (e) => {
  if (e.key == "F12") {
    alert("nice try");
    return false;
  }
  if (e.ctrlKey && e.key == "u") {
    alert("nice try dek");
    return false;
  }
  if (e.ctrlKey && e.key == "c") {
    alert("dont copy paste");
    return false;
  }
  if (e.ctrlKey && e.key == "v") {
    alert("dont copy paste");
    return false;
  }
};

const toogleIcon = document.querySelector(".toggle-icon");

toogleIcon.addEventListener("click", () => {
  toogleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
