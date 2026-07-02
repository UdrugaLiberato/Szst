/* Studentski zbor Sveučilišta u Splitu — site interactions */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.getElementById("nav-menu");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-menu a"));

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

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
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

  /* Highlight the nav link for the section in view */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  function highlightNav() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var currentId = "top";
    sections.forEach(function (section) {
      if (section.offsetTop <= pos) currentId = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
  }
  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
