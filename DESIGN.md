# RAD project page design

## Design read

Reading this as: a research project page for computer vision and robotics researchers, with a precise spatial-reasoning and restrained experimental language, leaning toward dependency-free native HTML, CSS, and JavaScript.

Mode: greenfield.

- `DESIGN_VARIANCE: 8` because multi-view inspection benefits from an asymmetric, image-led composition.
- `MOTION_INTENSITY: 6` because one staged reveal and section entrances can explain the visual hierarchy without turning the paper into a demo reel.
- `VISUAL_DENSITY: 4` because benchmark facts need enough structure to scan while the paper figures still need space.

## Compact token system

### Color

| Token | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Canvas | `#FFFFFF` | `#101418` | Pure white, explicitly light by default |
| Surface | `#F7F7F5` | `#192027` | Quiet inset grouping without large color blocks |
| Ink | `#1D1D1C` | `#ECF0F3` | Primary text |
| Muted | `#65635F` | `#A7B0B8` | Secondary text |
| Rule | `#DEDED9` | `#35404A` | Structural separators |
| Signal | `#B83E38` | `#DE706A` | The one accent, tied to anomaly marks |

Pure white is an explicit project requirement for the academic canvas. The page still avoids pure black, neon glow, and multi-accent gradients.

### Type

- Display: `Iowan Old Style`, then `Palatino`, `Georgia`, or a platform serif. It is reserved for paper titles, section headings, abstract statements, and benchmark numbers.
- Body and UI: `Avenir Next`, then `Helvetica Neue` or a platform sans-serif, for technical clarity.
- Utility and data: `SFMono-Regular`, then `IBM Plex Mono` or platform monospace.
- One type family carries the page. Monospace is reserved for metrics, code, and metadata.

### Layout and shape

- Maximum reading width: 1100 px, leaving clear side margins on desktop.
- Desktop: asymmetric 12-column grid. Mobile below 768 px: strict single column.
- Media and content surfaces: 14 px corners. Paper figures sit inside a white mat with 12 px inset space, a neutral hairline, and a restrained shadow. Buttons remain full pill.
- Cards are used only for benchmark hierarchy. Most grouping uses whitespace and one-sided rules.
- Z-index scale: base 0, sticky navigation 20, skip link 40.

### Signature

The hero treats the paper teaser as an inspection field: the text occupies a narrow left rail while the real multi-view gallery breaks into the wider right side. On first load, the image is revealed once from left to right. This communicates robotic scanning and establishes hierarchy without adding a fake interface.

## Wireframe

```text
desktop
+------------------------------------------------------------------+
| RAD        Abstract  Dataset  Benchmark  Results   Paper  Code    |
+----------------------+-------------------------------------------+
| RAD                  |                                           |
| Realistic multi-view |       REAL PAPER TEASER, WIDE             |
| benchmark title      |                                           |
| authors + actions    |                                           |
+----------------------+-------------------------------------------+
| Abstract                                                         |
| statement at 8 cols                      compact research facts   |
+------------------------------------------------------------------+
| 4,287       13 categories      68 views        4 defect types     |
+------------------------------------------------------------------+
| acquisition narrative       | annotation figure                  |
| dataset figure, full width                                        |
+------------------------------------------------------------------+
| pipeline figure, full width                                       |
| 2D methods, wide lane        | 3D + VLM, stacked                  |
+------------------------------------------------------------------+
| image metric rail           | pixel metric rail                   |
| qualitative figure, full width                                    |
+------------------------------------------------------------------+
| BibTeX                              paper, code, project links     |
+------------------------------------------------------------------+

mobile
+---------------------------+
| compact nav + theme        |
| title and actions          |
| teaser                     |
| abstract                   |
| metrics, 2 x 2             |
| dataset narrative          |
| annotation figure          |
| dataset figure             |
| pipeline                   |
| benchmark lanes stacked    |
| results and qualitative    |
| citation                   |
+---------------------------+
```

## Motion rationale

- Hero copy and teaser reveal once to establish reading order and evoke image acquisition.
- Section reveals use `IntersectionObserver` to communicate entry into a new evidence block.
- Theme and citation controls animate only for action feedback.
- All motion changes only opacity and transform, and collapses under `prefers-reduced-motion`.
- There is no scroll event listener, parallax, marquee, or infinite animation.

## Self-critique before build

- Initial instinct: centered title, large acronym, and three method cards. This is too close to the common academic-project template.
- Revision: use a narrow title rail against a dominant real teaser, and describe method families as an uneven evidence map instead of three equal cards.
- Initial instinct: blue as a technical accent. That would blend into many 3D project pages and the robot imagery.
- Revision: use a restrained anomaly red derived from the paper figures, with cool neutral surfaces.
- Risk: experimental asymmetry can reduce skim speed. Countermeasure: keep navigation labels conventional, stack section headings vertically, and collapse every multi-column section explicitly on mobile.
- Risk: a long page can repeat image-and-text splits. Countermeasure: alternate layout families: split hero, prose block, metric rail, acquisition mosaic, full-width pipeline, asymmetric method map, result matrix, citation console.

## Content source notes

The page uses `/paper` from arXiv v4 as the factual source. The title and author order come from `root.tex`; benchmark values come from the two result tables; captions and figures come from the paper figure files.

The paper source has one count conflict. `Latex/3_dataset.tex` states 5,848 images, while `Table/dataset_comparsion.tex` and the sum of all rows in `Table/data_statistic.tex` both yield 1,224 normal plus 3,063 abnormal, or 4,287 total. The website uses the internally consistent table-derived total of 4,287.

The affiliation footnote also contains an unused Great Bay University index while the author list maps Yang Cao to superscript 8. The website preserves the author superscripts from `root.tex` and presents the institutions as an unnumbered collaboration list to avoid introducing a false mapping.

## Final pre-flight target

- One palette and one signal accent across both themes.
- Zero em dash or en dash characters in visible page copy.
- No invented claims, results, testimonials, logos, or media.
- Hero headline stays within two lines at desktop; summary stays under 20 words; actions stay visible in the first viewport.
- One-line desktop navigation, visible focus rings, semantic headings, alt text, keyboard controls, and reduced motion.
- Real teaser, pipeline, annotation, dataset, and qualitative figures.
- Explicit mobile collapse for every asymmetric layout.
- No duplicate CTA labels with the same intent.
