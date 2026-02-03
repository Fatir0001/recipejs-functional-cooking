const recipes = [
  { id: 1, title: "Creamy Garlic Pasta", time: 25, difficulty: "easy", description: "Quick creamy pasta.", category: "pasta" },
  { id: 2, title: "Veg Stir Fry", time: 20, difficulty: "easy", description: "Healthy veggies.", category: "veg" },
  { id: 3, title: "Chicken Biryani", time: 70, difficulty: "hard", description: "Spicy rice dish.", category: "curry" },
  { id: 4, title: "Butter Chicken", time: 60, difficulty: "medium", description: "Creamy curry.", category: "curry" },
  { id: 5, title: "Caesar Salad", time: 15, difficulty: "easy", description: "Fresh salad.", category: "salad" },
  { id: 6, title: "Paneer Tikka", time: 40, difficulty: "medium", description: "Grilled paneer.", category: "starter" },
  { id: 7, title: "Lasagna", time: 80, difficulty: "hard", description: "Layered pasta.", category: "pasta" },
  { id: 8, title: "Thai Green Curry", time: 50, difficulty: "medium", description: "Thai curry.", category: "curry" }
];

const recipeContainer = document.querySelector("#recipe-container");

const createRecipeCard = (recipe) => `
  <div class="recipe-card" data-id="${recipe.id}">
    <h3>${recipe.title}</h3>
    <div class="recipe-meta">
      <span>⏱️ ${recipe.time} min</span>
      <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
    </div>
    <p>${recipe.description}</p>
  </div>
`;

const renderRecipes = (recipes) => {
  recipeContainer.innerHTML = recipes.map(createRecipeCard).join("");
};

renderRecipes(recipes);
