# LunchMatch Starter

LunchMatch is the controlled practice project for the Tech2Peace Software Developer Track. It demonstrates one complete browser interaction using a form, JavaScript events, explicit matching logic, mock data, result rendering, and automated logic tests.

## Run the App

Requirements: Node.js 20 or newer.

```bash
npm start
```

Open `http://127.0.0.1:4173`.

To use another port:

```bash
node server.mjs 4174
```

## Run the Tests

Passing baseline:

```bash
npm test
```

Intentional Day 4 failure:

```bash
npm run test:buggy
```

The buggy command is supposed to fail until participants correct the dietary rule in `labs/day4/matcher-buggy.js`.

## Project Map

- `index.html`: page structure and inputs.
- `styles.css`: layout and visual appearance.
- `src/app.js`: browser events and result rendering.
- `src/matcher.js`: correct matching rules.
- `src/restaurants.js`: mock restaurant data.
- `tests/matcher.test.js`: passing baseline tests.
- `labs/day3-price-filter.md`: guided feature exercise.
- `labs/day4/matcher-buggy.js`: controlled debugging exercise.

## What Is Real and Mocked?

Built:

- Responsive interface.
- Form interaction.
- Filtering rules.
- Result and empty states.
- Automated logic tests.

Mocked:

- Restaurant records.
- Ratings and dietary tags.

Deferred:

- Accounts and authentication.
- Live maps and restaurant APIs.
- Booking, payment, reviews, and recommendations.

## Accessibility Baseline

- Every form field has a visible label.
- Results announce changes through a live status region.
- Keyboard focus is visible.
- Text and controls have strong contrast.
- The layout works on narrow screens.

## Asset Note

The local lunch-table image was generated for this teaching project. It has no external URL or runtime dependency.
