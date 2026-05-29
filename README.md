# Number Hunt 99

Number Hunt 99 is a minimalist browser puzzle about fast visual scanning.

Pick a rule, read the target, search the board, and clear the right numbers before mistakes slow you down.

## Highlights

- Two board sizes: `49` and `99`
- Two run modes: `Classic` and `Shifting`
- Multiple rule families: `Order`, `Filters`, `Patterns`, `Logic`, `Speed`
- English / Russian interface toggle
- Local progression, best times, and recent runs
- Static HTML/CSS/JS project with no build step

## Core Modes

### Board Size

- `49` — short, faster runs
- `99` — full-board, longer runs

### Run Mode

- `Classic` — the board stays stable
- `Shifting` — the board reshuffles after correct picks

## Rule Categories

- `Order` — sequence matters
- `Filters` — find matching numbers in any order
- `Patterns` — digit-based rules
- `Logic` — number families and structured sequences
- `Speed` — high-pressure runs like `Sudden Death`

## Tech

- `index.html` — application markup
- `styles.css` — layout, responsive behavior, visual style
- `app.js` — game logic, localization, rendering, progression
- `vercel.json` — static deployment config

## Run Locally

Open `index.html` directly in a browser, or start a small local server:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

This project is ready for static hosting.

It already includes a `vercel.json` config for Vercel deployment.
