const icon = document.getElementById("themeIcon");
const themeSwitch = document.getElementById("theme-switch");

function enableDarkMode() {
  document.body.classList.add("dark-mode");
  icon.src = "../public/darkMode.svg";
  localStorage.setItem("darkmode", "active");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  icon.src = "../public/lightMode.svg";
  localStorage.setItem("darkmode", "inactive");
}

if (localStorage.getItem("darkmode") === "active") {
  enableDarkMode();
}

themeSwitch.addEventListener("click", () => {
  const darkMode = localStorage.getItem("darkmode");
  darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});
