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
  const menuLinks = document.querySelectorAll(".nav__link");
  burgerOpen.addEventListener("click", () => {
    menu.classList.add("nav-active");
  });
  menuClose.addEventListener("click", () => {
    // menu.classList.add("nav__close-active");
    menu.classList.remove("nav-active");
  });
  // console.log(window.innerWidth);
  if (window.innerWidth <= 770) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener("click", () => {
        menu.classList.remove("nav-active");
      });
    }
  }
})();
//

// Scroll to anchors

(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    // для header fixed, так же удалить везде headerElHeight
    // const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
