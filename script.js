let navbar = document.getElementById("navbar");
let navPos = navbar.getBoundingClientRect().top;
let contentPage = document.getElementById("content-page");

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;

  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
    contentPage.classList.add("marginOff");
  } else {
    navbar.classList.remove("sticky");
    contentPage.classList.remove("marginOff");
  }
});
