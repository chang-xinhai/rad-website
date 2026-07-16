# RAD project page

Official project page for **RAD: A Realistic Multi-View Benchmark for Pose-Agnostic Anomaly Detection**.

[Project page](https://chang-xinhai.github.io/rad-website/) | [Paper](https://arxiv.org/abs/2410.00713) | [Code](https://github.com/kaichen-z/RAD) | [Dataset with masks](https://drive.google.com/file/d/1p3v2FeNlHinXFCTZzZujhYhCGUiOL38G/view?usp=drive_link) | [Dataset without masks](https://drive.google.com/file/d/1cPeHh69vErvC3yZSejyxU4SNK9fVlJWL/view?usp=drive_link)

## About

RAD is a robot-captured, multi-view benchmark for pose-agnostic anomaly detection. It contains 4,287 RGB images across 13 object categories, 68 predefined robot viewpoints, and four defect types: scratched, missing, stained, and squeezed.

The website is a dependency-free static site built with semantic HTML, CSS, and JavaScript. It supports light and dark themes, responsive layouts, visible keyboard focus, reduced motion, and GitHub Pages deployment.

## Local preview

From the repository root:

```bash
python3 -m http.server 4173
```

Open [http://localhost:4173](http://localhost:4173).

## Content and figures

All scientific claims, author order, benchmark values, and paper figures are sourced from arXiv v4. The teaser is copied without modification. PDF figures are rendered to web-ready PNG files without changing their content.

The v4 source has an image-count inconsistency: the dataset prose states 5,848, while the category table and comparison table both resolve to 1,224 normal plus 3,063 abnormal images, or 4,287 total. The website uses the internally consistent table-derived total.

The author superscripts are preserved from `root.tex`. Institutions are shown as an unnumbered collaboration list because the source affiliation footnote includes a conflicting unused index.

## Citation

```bibtex
@misc{zhou2024rad,
  title   = {RAD: A Realistic Multi-View Benchmark for Pose-Agnostic Anomaly Detection},
  author  = {Zhou, Kaichen and Chang, Xinhai and Kim, Taewhan and Zhang, Jiadong and Cao, Yang and Peng, Chufei and Zhan, Fangneng and Zhao, Hao and Dong, Hao and Ting, Kai Ming and Zhu, Ye},
  year    = {2024},
  eprint  = {2410.00713},
  archivePrefix = {arXiv},
  primaryClass  = {cs.CV},
  doi     = {10.48550/arXiv.2410.00713},
  url     = {https://arxiv.org/abs/2410.00713}
}
```

## Deployment

The workflow in `.github/workflows/pages.yml` deploys the repository root through GitHub Pages after each push to `main`. In the repository settings, set Pages source to **GitHub Actions**.

Recommended repository metadata:

- Description: `Official project page for RAD, a realistic multi-view benchmark for pose-agnostic anomaly detection.`
- Website: `https://chang-xinhai.github.io/rad-website/`
- Topics: `anomaly-detection`, `computer-vision`, `robotics`, `multi-view`, `benchmark`, `pose-estimation`, `industrial-inspection`, `github-pages`

## Structure

```text
.
├── index.html
├── 404.html
├── assets/
│   ├── figures/
│   ├── icons/
│   ├── main.js
│   └── style.css
├── DESIGN.md
└── .github/workflows/pages.yml
```
