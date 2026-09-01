import assert from "node:assert/strict";
import test from "node:test";

import { findMatches, matchesRestaurant } from "../src/matcher.js";
import { restaurants } from "../src/restaurants.js";

test("any preferences return every restaurant", () => {
  const matches = findMatches(restaurants, {
    location: "any",
    cuisine: "any",
    dietary: "any",
  });

  assert.equal(matches.length, restaurants.length);
});

test("location and cuisine must both match", () => {
  const matches = findMatches(restaurants, {
    location: "Nicosia",
    cuisine: "Mediterranean",
    dietary: "any",
  });

  assert.deepEqual(matches.map((restaurant) => restaurant.name), ["Olive & Lemon"]);
});

test("dietary filtering uses the dietaryTags list", () => {
  const restaurant = restaurants.find((item) => item.name === "Harbor Grill");

  assert.equal(
    matchesRestaurant(restaurant, {
      location: "any",
      cuisine: "any",
      dietary: "vegetarian",
    }),
    false,
  );
});

test("valid filters can produce an empty result", () => {
  const matches = findMatches(restaurants, {
    location: "Larnaca",
    cuisine: "Mexican",
    dietary: "vegan",
  });

  assert.deepEqual(matches, []);
});
