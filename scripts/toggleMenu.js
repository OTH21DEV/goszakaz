export const toggleMenu = () => {
  const navBar = document.querySelector(".header__nav");
  const navIcon = document.querySelector(".header__nav-menu-icon");
  const header = document.querySelector(".header");

  navIcon.addEventListener("click", () => {
    const isActive = navBar.classList.toggle("active");
    if (isActive) {
      header.style.height = "auto";
      navIcon.innerHTML = "&times;";
    } else {
      header.style.height = "";
      navIcon.innerHTML = "&#9776;";
    }
  });
};
