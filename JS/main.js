/* ==========================================
   CaféBinario - main.js
   Funcionalidad base del sitio
========================================== */

/* ===============================
   MENÚ RESPONSIVE
================================ */

document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      navActions.classList.toggle("active");
    });
  }

});


/* ===============================
   ANIMACIÓN SUAVE AL HACER SCROLL
================================ */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".card, section").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


/* ===============================
   BOTÓN VOLVER ARRIBA
================================ */

const scrollButton = document.createElement("button");
scrollButton.innerText = "↑";
scrollButton.classList.add("scroll-top");
document.body.appendChild(scrollButton);

scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});


/* ===============================
   MODO OSCURO / CLARO
================================ */

const themeToggle = document.createElement("button");
themeToggle.innerText = "🌙";
themeToggle.classList.add("theme-toggle");
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeToggle.innerText = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.innerText = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

/* Cargar tema guardado */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.innerText = "☀️";
}
