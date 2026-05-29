# Number Hunt 99

Minimal browser puzzle game about scanning a board and finding the right numbers under different rules.

## What It Is

`Number Hunt 99` is a single-page HTML/CSS/JS game with:

- two board sizes: `49` and `99`
- two board modes: `Classic` and `Shifting`
- multiple rule categories: `Order`, `Filters`, `Patterns`, `Logic`, `Speed`
- English / Russian UI toggle

## Run Locally

This project has no build step.

You can open `index.html` directly in the browser, or run a simple local server from the project folder:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project Structure

- `index.html` — app markup
- `styles.css` — visual style and responsive layout
- `app.js` — game logic, localization, progression, UI rendering
- `vercel.json` — static deployment config

## Current Gameplay Setup

### Board Size

- `49` — smaller, faster runs
- `99` — full board, longer runs

### Modes

- `Classic` — stable board
- `Shifting` — board reshuffles after correct picks

### Rule Types

- `Order` — sequence matters
- `Filters` — pick matching numbers in any order
- `Patterns` — digit-based rules
- `Logic` — special number families and sequences
- `Speed` — pressure mode like `Sudden Death`

## Deployment

The project is ready for static hosting and includes `vercel.json` for Vercel deployment.
