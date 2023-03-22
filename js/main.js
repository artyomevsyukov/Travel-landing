(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 150) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();

// Burger handler

(function () {
  const menu = document.querySelector(".nav");
  const burgerOpen = document.querySelector(".burger");
  const menuClose = document.querySelector(".nav__close");

  burgerOpen.addEventListener("click", () => {
    menu.classList.add("nav-active");
  });
  menuClose.addEventListener("click", () => {
    // menu.classList.add("nav__close-active");
    menu.classList.remove("nav-active");
  });
})();
//

// (function () {
//   const burgerItem = document.querySelector(".burger");
//   const menu = document.querySelector(".nav");
//   burgerItem.addEventListener("click", () => {
//     menu.classList.add("nav-active");
//   });
// })();
