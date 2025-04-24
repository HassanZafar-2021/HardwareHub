function toggleTheme() {
  const element = document.body;
  const icon = document.getElementById("theme-icon");

  const isDark = element.classList.toggle("dark-mode");
  localStorage.theme = isDark ? "dark" : "light";

  icon.src = isDark ? "../public/darkMode.svg" : "../public/lightMode.svg";
}

if (localStorage.theme === "dark") {
  document.body.classList.add("dark-mode");
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("theme-icon").src = "../public/darkMode.svg";
  });
}
