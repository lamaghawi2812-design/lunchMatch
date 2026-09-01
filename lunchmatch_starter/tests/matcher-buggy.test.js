import assert from "node:assert/strict";
import test from "node:test";

import { matchesRestaurant } from "../labs/day4/matcher-buggy.js";
import { restaurants } from "../src/restaurants.js";

test("a restaurant without the selected dietary tag must not match", () => {
  const harborGrill = restaurants.find((restaurant) => restaurant.name === "Harbor Grill");

  assert.equal(
    matchesRestaurant(harborGrill, {
      location: "any",
      cuisine: "any",
      dietary: "vegetarian",
    }),
    false,
  );
});
