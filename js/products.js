let tools = [];

fetch("data/tools.json")
  .then((res) => res.json())
  .then((data) => {
    tools = data;
    renderCards(tools);
  });

document.getElementById("searchBar").addEventListener("input", filterTools);
document
  .getElementById("categoryFilter")
  .addEventListener("change", filterTools);
document.getElementById("sortBy").addEventListener("change", filterTools);

function filterTools() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const sortBy = document.getElementById("sortBy").value;

  let filtered = tools.filter(
    (t) =>
      t.name.toLowerCase().includes(query) &&
      (category === "" || t.category === category)
  );

  if (sortBy === "az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "za") {
    filtered.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderCards(filtered);
}

function renderCards(items) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
      <h2>${item.name}</h2>
    `;

    // Add hover event after card creation
    card.addEventListener("mouseenter", () => {
      const randomHue = Math.floor(Math.random() * 360);
      card.style.setProperty("--random-hue", randomHue);
    });

    container.appendChild(card);
  });
}
