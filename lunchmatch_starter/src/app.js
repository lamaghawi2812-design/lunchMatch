import { findMatches } from "./matcher.js";
import { restaurants } from "./restaurants.js";

const form = document.querySelector("#preference-form");
const resultsElement = document.querySelector("#results");
const summaryElement = document.querySelector("#result-summary");

function priceLabel(price) {
  return "$".repeat(price);
}

function restaurantCard(restaurant) {
  const article = document.createElement("article");
  article.className = "restaurant-card";

  const title = document.createElement("h3");
  title.textContent = restaurant.name;

  const description = document.createElement("p");
  description.textContent = `${restaurant.cuisine} food in ${restaurant.location}`;

  const metadata = document.createElement("div");
  metadata.className = "restaurant-meta";
  metadata.textContent = `${priceLabel(restaurant.price)} | Rating ${restaurant.rating} | ${
    restaurant.dietaryTags.join(", ") || "No dietary tags"
  }`;

  article.append(title, description, metadata);
  return article;
}

function emptyState() {
  const section = document.createElement("section");
  section.className = "empty-state";

  const title = document.createElement("h3");
  title.textContent = "No exact matches yet";

  const message = document.createElement("p");
  message.textContent = "Try another location or choose any cuisine while keeping the dietary filter.";

  section.append(title, message);
  return section;
}

function renderResults(matches) {
  resultsElement.replaceChildren();
  summaryElement.textContent = `${matches.length} of ${restaurants.length} restaurants match these preferences.`;

  if (matches.length === 0) {
    resultsElement.append(emptyState());
    return;
  }

  resultsElement.append(...matches.map(restaurantCard));
}

function selectedPreferences() {
  const formData = new FormData(form);
  return {
    location: formData.get("location"),
    cuisine: formData.get("cuisine"),
    dietary: formData.get("dietary"),
  };
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResults(findMatches(restaurants, selectedPreferences()));
});

form.addEventListener("reset", () => {
  window.setTimeout(() => renderResults(restaurants), 0);
});

renderResults(restaurants);
