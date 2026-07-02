/* Studentski zbor Sveučilišta u Splitu — site interactions */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");

  /* Sticky header shadow */
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  navToggle.addEventListener("click", function () {
    var open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Zatvori izbornik" : "Otvori izbornik");
  });

  /* Reveal-on-scroll animations */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Filtriranje vijesti po kategoriji (stranica Vijesti) */
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filter-btn"));
  var newsGrid = document.getElementById("news-grid");
  if (filterButtons.length && newsGrid) {
    var articles = Array.prototype.slice.call(newsGrid.querySelectorAll("[data-category]"));
    var emptyMsg = document.getElementById("filter-empty");

    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-filter");
        var visible = 0;
        articles.forEach(function (article) {
          var show = filter === "all" || article.getAttribute("data-category") === filter;
          article.hidden = !show;
          if (show) {
            visible++;
            article.classList.add("visible");
          }
        });
        if (emptyMsg) emptyMsg.hidden = visible > 0;
      });
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
