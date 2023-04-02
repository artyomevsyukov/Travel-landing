"use strict";
!(function () {
  var e = document.querySelector(".header");
  window.onscroll = function () {
    window.pageYOffset > 150
      ? e.classList.add("header_active")
      : e.classList.remove("header_active");
  };
})(),
  (function () {
    var e = document.querySelector(".nav"),
      t = document.querySelector(".burger"),
      n = document.querySelector(".nav__close"),
      c = document.querySelectorAll(".nav__link");
    if (
      (t.addEventListener("click", function () {
        e.classList.add("nav-active");
      }),
      n.addEventListener("click", function () {
        e.classList.remove("nav-active");
      }),
      window.innerWidth <= 770)
    )
      for (var i = 0; i < c.length; i += 1)
        c[i].addEventListener("click", function () {
          e.classList.remove("nav-active");
        });
  })(),
  document.querySelectorAll(".js-scroll").forEach(function (e) {
    e.addEventListener("click", function () {
      var e,
        t,
        n,
        c,
        i,
        r,
        o = this.getAttribute("href");
      (e = o),
        (t = 1e3),
        (n = document.querySelector(".header").clientHeight),
        (c = document.querySelector(e).getBoundingClientRect().top - n),
        (i = window.pageYOffset),
        (r = null),
        requestAnimationFrame(function e(n) {
          null === r && (r = n);
          var o,
            a,
            l,
            u = n - r,
            d =
              ((o = u),
              (a = i),
              (l = c),
              (o /= t / 2) < 1
                ? (l / 2) * o * o + a
                : (-l / 2) * (--o * (o - 2) - 1) + a);
          window.scrollTo(0, d), u < t && requestAnimationFrame(e);
        });
    });
  });
//# sourceMappingURL=main-dist.js.map
