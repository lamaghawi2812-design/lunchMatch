function matchesChoice(actualValue, selectedValue) {
  return selectedValue === "any" || actualValue === selectedValue;
}

export function matchesRestaurant(restaurant, preferences) {
  const matchesLocation = matchesChoice(restaurant.location, preferences.location);
  const matchesCuisine = matchesChoice(restaurant.cuisine, preferences.cuisine);
  const matchesDietary =
    preferences.dietary === "any" || restaurant.dietaryTags.includes(preferences.dietary);

  return matchesLocation && matchesCuisine && matchesDietary;
}

export function findMatches(restaurants, preferences) {
  return restaurants.filter((restaurant) => matchesRestaurant(restaurant, preferences));
}
