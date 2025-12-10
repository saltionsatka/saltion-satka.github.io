const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => observer.observe(el));

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    root.classList.add("light");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else if (savedTheme === "dark") {
    root.classList.remove("light");
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      root.classList.add("light");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      root.classList.remove("light");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  }

  themeToggle.addEventListener("click", () => {
    root.classList.toggle("light");

    if (root.classList.contains("light")) {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem("theme", "light");
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem("theme", "dark");
    }
  });
}
