# Shyam Reddy Portfolio

A two-page personal portfolio website focused on software engineering, AI systems, and product-minded development.

## Pages

- `index.html`: Main portfolio page (hero, projects, skills, domain, experience, education, achievements, contact).
- `how-i-think.html`: Design-thinking page describing five core engineering principles with interactive visual effects.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (main page interactions)
- React (via CDN) + Tailwind CDN (How I Think page)

## Project Structure

- `index.html`
- `how-i-think.html`
- `styles.css`
- `script.js`
- `assets/`

## Key UI Features

- Sticky, responsive header with mobile navigation toggle.
- Hero text effects (rolling titles + typing quote animation).
- Section reveal animations on scroll.
- Card-based content layout with gradient/glass styling.
- How I Think page supports theme toggle and animated principle cards.

## Run Locally

From the repo root:

```bash
python3 -m http.server 5500
```

Open in browser:

- `http://localhost:5500/index.html`
- `http://localhost:5500/how-i-think.html`

## Local Testing Checklist

1. Verify both pages load without console errors.
2. Check main navigation and section anchor links.
3. Validate mobile/tablet responsiveness (especially hero/profile and experience cards).
4. Confirm How I Think interactions:
   - Theme toggle
   - Card hover states
   - Smooth scroll from lens chips
   - Closing section animations
5. Confirm tab titles are correct:
   - Main page: `💻 Shyam Reddy | Software Portfolio`
   - How I Think page: `🧠 How I Think | Shyam Reddy`

## QA Branch Workflow

Use this when testing changes before release:

```bash
git switch qa-test
git status -sb
python3 -m http.server 5500
```

After validation:

```bash
git add .
git commit -m "Describe the UI updates"
```

## Push to Master/Main

This repository currently uses `main` as the default branch. If your remote uses `master`, replace `main` with `master` in the commands below.

```bash
git switch main
git pull origin main
git merge qa-test
git push origin main
```

Equivalent for a `master`-based repo:

```bash
git switch master
git pull origin master
git merge qa-test
git push origin master
```

## Notes

- `.DS_Store` may appear as a local modified file on macOS; it is usually unrelated to feature changes.
- Keep visual changes minimal and consistent with the existing design language unless a redesign is intentional.
