fetch("data/tools.json")
  .then((res) => res.json())
  .then((tools) => renderCards(tools))
  .catch((err) => console.error("Failed to load tools:", err));

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
    container.appendChild(card);
  });
}