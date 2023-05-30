let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  console.log(scrollPos, navPos);
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
