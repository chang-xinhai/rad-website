# RAD project page design

## Design read

Reading this as: a research project page for computer vision and robotics researchers, with a precise spatial-reasoning and restrained experimental language, leaning toward dependency-free native HTML, CSS, and JavaScript.

Mode: greenfield.

- `DESIGN_VARIANCE: 4` because the page should read first as a serious academic artifact.
- `MOTION_INTENSITY: 1` because research content should remain stable while reading and comparing results.
- `VISUAL_DENSITY: 6` because the title, full authorship, affiliations, resources, and teaser belong together above the fold.

## Compact token system

### Color

| Token | Value | Purpose |
| --- | --- | --- |
| Canvas | `#FFFFFF` | Pure white academic canvas |
| Surface | `#F7F7F5` | Quiet inset grouping without large color blocks |
| Ink | `#1D1D1C` | Primary text |
| Muted | `#65635F` | Secondary text |
| Rule | `#DEDED9` | Structural separators |
| Signal | `#B83E38` | The one accent, tied to anomaly marks |

Pure white is an explicit project requirement for the academic canvas. The page still avoids pure black, neon glow, and multi-accent gradients.

### Type

- Display: `Iowan Old Style`, then `Palatino`, `Georgia`, or a platform serif. It is reserved for paper titles, section headings, abstract statements, and benchmark numbers.
- Body and UI: `Avenir Next`, then `Helvetica Neue` or a platform sans-serif, for technical clarity.
- Utility and data: `SFMono-Regular`, then `IBM Plex Mono` or platform monospace.
- The serif and sans-serif roles remain consistent. Monospace is reserved for metrics, code, and metadata.

### Layout and shape

- Maximum reading width: 1100 px, leaving clear side margins on desktop.
- Desktop: asymmetric 12-column grid. Mobile below 768 px: strict single column.
- Media and content surfaces: 14 px corners. Paper figures sit inside a white mat with 12 px inset space, a neutral hairline, and a restrained shadow. Buttons remain full pill.
- Cards are used only for benchmark hierarchy. Most grouping uses whitespace and one-sided rules.
- Z-index scale: base 0, sticky navigation 20, skip link 40.

### Signature

The hero fills the first viewport with a compact two-column paper-header composition: the full title, authorship, affiliations, and resources sit beside the paper teaser. The next section begins only after the fold, matching the pacing of the Stream3D reference without copying its visual language.

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
| composition notes           | dataset statistics figure          |
+------------------------------------------------------------------+
| pipeline figure             | evaluation protocol                |
| 2D methods, wide lane        | 3D + VLM, stacked                  |
+------------------------------------------------------------------+
| image metric rail           | pixel metric rail                   |
| qualitative notes           | qualitative figure                 |
+------------------------------------------------------------------+
| BibTeX                              paper, code, project links     |
+------------------------------------------------------------------+

mobile
+---------------------------+
| compact nav                |
| title, authors, actions    |
| teaser                     |
| abstract                   |
| metrics, 2 x 2             |
| dataset narrative          |
| annotation figure          |
| dataset notes + figure     |
| protocol + pipeline       |
| benchmark lanes stacked    |
| results and qualitative    |
| citation                   |
+---------------------------+
```

## Motion rationale

- Content does not animate into view; figures and results remain stable for comparison.
- Only restrained hover, focus, menu, and citation-control feedback remains.
- There is no parallax, marquee, staged reveal, or infinite animation.

## Self-critique before build

- Initial instinct: centered title, large acronym, and three method cards. This is too close to the common academic-project template.
- Revision: use a narrow title rail against a dominant real teaser, and describe method families as an uneven evidence map instead of three equal cards.
- Initial instinct: blue as a technical accent. That would blend into many 3D project pages and the robot imagery.
- Revision: use a restrained anomaly red derived from the paper figures, with cool neutral surfaces.
- Risk: experimental asymmetry can reduce skim speed. Countermeasure: keep navigation labels conventional, stack section headings vertically, and collapse every multi-column section explicitly on mobile.
- Risk: standalone paper figures can feel detached and create empty side margins. Countermeasure: reuse one evidence-row system that pairs each major figure with source-backed context and compact facts.

## Content source notes

The page uses `/paper` from arXiv v4 as the factual source. The title and author order come from `root.tex`; benchmark values come from the two result tables; captions and figures come from the paper figure files.

The paper source has one count conflict. `Latex/3_dataset.tex` states 5,848 images, while `Table/dataset_comparsion.tex` and the sum of all rows in `Table/data_statistic.tex` both yield 1,224 normal plus 3,063 abnormal, or 4,287 total. The website uses the internally consistent table-derived total of 4,287.

The affiliation footnote also contains an unused Great Bay University index while the author list maps Yang Cao to superscript 8. The website therefore shows only the unambiguous equal-contribution and corresponding-author markers, and presents institutions as an unnumbered collaboration list.

## Final pre-flight target

- One pure-white palette and one signal accent across the page.
- Zero em dash or en dash characters in visible page copy.
- No invented claims, results, testimonials, logos, or media.
- Hero keeps the complete title, all authors, affiliations, resources, and teaser visible in the first desktop viewport.
- One-line desktop navigation, visible focus rings, semantic headings, alt text, keyboard controls, and reduced motion.
- Real teaser, pipeline, annotation, dataset, and qualitative figures.
- Explicit mobile collapse for every asymmetric layout.
- No duplicate CTA labels with the same intent.
