document.querySelectorAll(".product").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.setProperty("--random-hue", Math.random());
  });
});
