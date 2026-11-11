# afonsogcardoso.com

Personal site and portfolio. Plain HTML, CSS and JavaScript, served by GitHub Pages. No build step.

- `index.html`: the home page.
- `project.html` + `assets/js/project.js`: one template for every case study, opened as `project.html?id=<key>`.
- `assets/js/projects.js`: all case-study content. Add a project by adding an entry there, then a card in `index.html` and a line in `sitemap.xml`.
- `assets/css/style.css`: all styles. Colours and fonts are tokens at the top; the palette starts from the portrait backdrop.
- `assets/img/work/`: screenshots, as WebP.

Preview locally with `python3 -m http.server` and open http://localhost:8000.
