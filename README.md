# Viktor Lundin — portfolio

A static portfolio for GitHub Pages, featuring **JobView** and **Photography Portfolio**, followed by research and course projects.

## Preview locally

No build or package installation is needed. Open `index.html` directly, or serve the repository:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Then open http://127.0.0.1:8080.

## Editing

- `index.html` contains all project content. Projects remain readable without JavaScript.
- `styles.css` contains the responsive layout, focus states, and reduced-motion support.
- `script.js` adds category filters, technology/name search, results counts, and a resettable empty state.
- To update a project, edit its article, including `data-categories` and `data-keywords`. Categories are `applications`, `ai-data`, and `photography`. If adding or removing projects, update the header range and All projects count too.

## Preview assets

The photography previews are Viktor Lundin's photographs, copied from the public Photography Portfolio to avoid a runtime API dependency:

- `img/photography-japan.jpg`: [DSCF5497](https://res.cloudinary.com/drphjyumq/image/upload/a_auto,c_limit,f_auto,q_auto,w_800/v1/media/photos/2026/08/DSCF5497_fxngx1)
- `img/photography-street.jpg`: [DSCF5605](https://res.cloudinary.com/drphjyumq/image/upload/a_auto,c_limit,f_auto,q_auto,w_800/v1/media/photos/2026/08/DSCF5605_mk6m5v)

JobView's preview (`img/jobview.png`) is the supplied application screenshot. The full image is preserved and opens at full size when clicked. Calendar and data-mining visuals are decorative illustrations, not screenshots or research results. The Pythia thesis preview and game screenshot are preserved from the original repository. Fonts load from Google Fonts with local system/Georgia fallbacks.

Deploy the static root through the repository's GitHub Pages setup when ready. No build artifacts or reference checkouts are required.
