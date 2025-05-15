document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.theme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("theme-icon").src = "../public/darkMode.svg";
  }
});

function toggleTheme() {
  const element = document.body;
  const icon = document.getElementById("theme-icon");

  const isDark = element.classList.toggle("dark-mode");
  localStorage.theme = isDark ? "dark" : "light";

  icon.src = isDark ? "../public/darkMode.svg" : "../public/lightMode.svg";
}
