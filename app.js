(() => {

const recipes = [
 {id:1,title:"Pasta",ingredients:["tomato","cheese"]},
 {id:2,title:"Pizza",ingredients:["flour","cheese"]},
 {id:3,title:"Salad",ingredients:["lettuce","carrot"]},
 {id:4,title:"Burger",ingredients:["bun","patty"]}
];

const container = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const counter = document.getElementById("recipeCounter");
const favBtn = document.getElementById("showFavoritesBtn");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let showFav = false;

searchInput.addEventListener("input", render);
favBtn.addEventListener("click", () => {
  showFav = !showFav;
  render();
});

function render() {
  container.innerHTML = "";
  let list = [...recipes];

  const text = searchInput.value.toLowerCase();
  list = list.filter(r => r.title.toLowerCase().includes(text));

  if(showFav){
    list = list.filter(r => favorites.includes(r.id));
  }

  list.forEach(r => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${r.title}</h3>
      <button>${favorites.includes(r.id) ? "❤️" : "🤍"}</button>
    `;

    div.querySelector("button").onclick = () => toggle(r.id);
    container.appendChild(div);
  });

  counter.textContent = `Showing ${list.length} of ${recipes.length}`;
}

function toggle(id){
  favorites.includes(id)
    ? favorites = favorites.filter(f=>f!==id)
    : favorites.push(id);

  localStorage.setItem("favorites", JSON.stringify(favorites));
  render();
}

render();

})();
