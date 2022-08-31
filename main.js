const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

console.log(desktopMenu);

menuEmail.addEventListener("click", openMenu);

function openMenu() {
  desktopMenu.classList.toggle("inactive");
}
