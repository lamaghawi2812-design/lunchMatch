# Day 3 Lab: Add a Maximum Price Filter

## User Story

As a group choosing lunch, we want to set a maximum price level so that every displayed restaurant fits our budget.

## Acceptance Criteria

- The form shows Any price, $, $$, and $$$ options.
- Any price does not remove restaurants.
- Selecting $$ returns restaurants whose `price` is 1 or 2.
- Selecting $ returns only restaurants whose `price` is 1.
- The price rule works together with location, cuisine, and dietary filters.
- The existing no-results state still appears when nothing matches.

## Suggested Steps

1. Add a `maxPrice` select element to `index.html`.
2. Read its value in `selectedPreferences()` inside `src/app.js`.
3. Convert the selected string to a number only when it is not `any`.
4. Add a `matchesPrice` condition inside `src/matcher.js`.
5. Add at least two price-filter tests to `tests/matcher.test.js`.
6. Run `npm test`, then verify the feature in the browser.

## Pseudocode

```text
IF maximum price is Any
  price matches
ELSE
  restaurant price must be less than or equal to maximum price
```

## Review Questions

- Why is `price` stored as a number instead of dollar-sign text?
- Which layer changed because the user needed a new input?
- Which layer changed because the matching rule changed?
- What test protects this behavior from a future regression?
