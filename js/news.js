const apiKey = "cb2ea7b268644d3e86497a4ffd5c5a3a";
const url = `https://newsapi.org/v2/everything?q="A%26R+Hardware"+AND+"Brooklyn"+AND+"hardware"&language=en&pageSize=5&apiKey=${apiKey}`;

// Fetch the local JSON file (news.json) from your server
fetch("data/news.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("newsContainer");
    data.articles.forEach((article) => {
      const div = document.createElement("div");
      div.classList.add("news-card");
      div.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
        <p><small>${new Date(
          article.publishedAt
        ).toLocaleDateString()}</small></p>
      `;
      container.appendChild(div);
    });
  })
  .catch((err) => {
    console.error("Error fetching news: ", err);
  });
