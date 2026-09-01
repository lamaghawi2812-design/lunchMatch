function matchesChoice(actualValue, selectedValue) {
  return selectedValue === "any" || actualValue === selectedValue;
}

export function matchesRestaurant(restaurant, preferences) {
  const matchesLocation = matchesChoice(restaurant.location, preferences.location);
  const matchesCuisine = matchesChoice(restaurant.cuisine, preferences.cuisine);

  // The dietary rule is intentionally wrong for the Day 4 debugging lab.
  const matchesDietary = preferences.dietary !== "any" || restaurant.dietaryTags.includes(preferences.dietary);

  return matchesLocation && matchesCuisine && matchesDietary;
}
