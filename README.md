# Kairos Influence — Website Project (WEDE5020 PoE)

## Project Title
Kairos Influence — Cape Town Streetwear Boutique Website

## Student Information
- **Name:** Bandile Mngomezulu
- **Student Number:** 10518101
- **Module:** WEDE5020 — Web Development: Introduction
- **Group:** GR01

## Project Overview
Kairos Influence is an independent streetwear boutique based in Observatory, Cape Town, founded in 2022.
This project is the design and development of a professional, responsive, SEO-optimised website for
the brand, built in three parts across the semester:

- **Part 1:** HTML foundation — structure, content, navigation, and project planning.
- **Part 2:** CSS styling — brand identity, responsive layout, and visual design.
- **Part 3:** JavaScript functionality and SEO optimisation.

## Website Goals and Objectives
- Convert Kairos Influence's existing Instagram/WhatsApp following into a reliable online sales channel.
- Grow monthly website traffic and newsletter sign-ups.
- Provide a professional, mobile-first shopping experience.

**Key Performance Indicators (KPIs):**
- Monthly unique visitors and returning visitor rate.
- Online enquiry-to-sale conversion rate.
- Average session duration and bounce rate.
- Newsletter sign-up rate per visitor.

## Key Features and Functionality
- Five-page structure: Home, About Us, Shop, Enquiry, Contact Us.
- Product catalogue with sizing details.
- Product enquiry form (item, size, quantity).
- Contact form and two embedded store/stockist locations.
- Fully responsive, mobile-first layout.
- External CSS stylesheet with a dark, gothic-streetwear visual identity matching real product photography.
- Responsive images using `srcset`/`sizes` and the `<picture>` element for optimised loading across devices.

## Timeline and Milestones
| Milestone | Deliverable                                  | Target Date            |
|-----------|-----------------------------------------------|-------------------------|
| Part 1    | Project proposal, HTML structure, GitHub setup | Part 1 submission date |
| Part 2    | CSS styling, responsive layout                 | Part 2 submission date |
| Part 3    | JavaScript functionality, SEO optimisation     | Part 3 submission date |

## Part 1 Details
Part 1 covers the foundational build of the site:
- Two Website Project Proposals submitted and presented for lecturer approval — **Kairos Influence**
  (streetwear boutique, approved direction) and **Jesus is King Animal Sanctuary** (non-profit, backup).
- Content research and sourcing for the Kairos Influence site.
- Semantic HTML5 structure for all five pages (`header`, `nav`, `main`, `footer`, `article`, `section`).
- Organised file and folder structure (`css/`, `js/`, `images/`, `_private/`).
- Functional navigation linking all five pages.
- Initial commit and push to the private GitHub repository.

*(Part 3 details will be added to this README in a future submission/edit.)*

## Part 2 Details
Part 2 covers the CSS styling and responsive design build of the site:

**Feedback from Part 1:**
Part 1 has been submitted but has not yet reached its due date, so no formal lecturer feedback
has been received. Ahead of formal feedback, the following self-identified refinements were made
and are logged in the Changelog below: replacing three "Coming Soon" shop placeholders is deferred
until further stock is photographed (documented honestly rather than padded with fake products),
and all placeholder images were replaced with real, sourced assets (see Part 1 Changelog entries).
Any further corrections requested once formal feedback is received will be added to this section
and the Changelog in a future submission/edit.

**CSS Styling for Desktop:**
- Created an external stylesheet (`css/style.css`) linked identically across all five pages.
- Implemented a CSS reset for consistent cross-browser rendering.
- Established base styles (font family, font size, colour scheme, spacing) using CSS custom
  properties (design tokens) for consistency and easy maintenance.
- Applied a typographic scale using `font-family`, `font-size`, `font-weight`, `line-height`, and
  `letter-spacing`, with a display serif font for headings and a clean sans-serif for body text.
- Built page layouts using Flexbox (`display: flex`, `flex-wrap`, `justify-content`, `align-items`)
  for navigation, product grids, location cards, and forms.
- Applied visual styling (`color`, `background-color`, `border`, `box-shadow`, `border-radius`)
  matching the brand's dark, gothic-streetwear aesthetic.
- Used pseudo-classes (`:hover`, `:focus`, `:active`) on navigation links, buttons, product cards,
  and form fields for interactive feedback.

**Responsive Design:**
- Two breakpoints implemented via media queries: tablet (`max-width: 768px`) and mobile
  (`max-width: 480px`).
- Multi-column layouts (product grid, location cards) switch to single-column on smaller screens.
- Navigation menu switches from a horizontal row to a stacked vertical list on mobile.
- Typography scales down at each breakpoint using `clamp()` and relative units (`rem`, `em`).
- Relative units (`rem`, `%`, `vw`) used throughout for widths, spacing, and font sizes.
- Responsive images implemented via the `<picture>` element (homepage hero banner) and `srcset`/
  `sizes` attributes (all shop product images), serving appropriately sized images per device.
- Site tested across desktop, tablet, and mobile widths using browser-equivalent rendering tools;
  screenshot evidence below.

### Responsive Screenshot Evidence

**Homepage — Desktop (1200px), Tablet (768px), Mobile (375px):**

![Homepage desktop](screenshots/desktop_home.png)
![Homepage tablet](screenshots/tablet_home.png)
![Homepage mobile](screenshots/mobile_home.png)

**Shop Page — Desktop (1200px), Mobile (375px):**

![Shop desktop](screenshots/desktop_products.png)
![Shop mobile](screenshots/mobile_products.png)

**About Us Page — Desktop (1200px), Mobile (375px):**

![About desktop](screenshots/desktop_about.png)
![About mobile](screenshots/mobile_about.png)

**Enquiry Page — Desktop (1200px), Mobile (375px):**

![Enquiry desktop](screenshots/desktop_enquiry.png)
![Enquiry mobile](screenshots/mobile_enquiry.png)

*Note: The Contact page uses live embedded Google Maps iframes for both locations. These render
correctly in a standard browser with internet access; screenshot evidence for this page was
constrained by the local testing environment used and should be spot-checked directly in-browser.*

## Sitemap
```
index.html (Home)
├── about.html (About Us)
├── products.html (Shop)
├── enquiry.html (Enquiry)
└── contact.html (Contact Us)
```
See `sitemap.png` in the repository root for the visual sitemap diagram.

## File and Folder Structure
```
/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── sitemap.png
├── css/
│   └── style.css
├── js/
├── images/
│   ├── hero-banner.jpg (+ responsive variants: -480w, -800w, -1200w)
│   ├── logo.png
│   ├── about-team.jpg (+ responsive variants)
│   └── product-1.jpg ... product-6.jpg (+ responsive variants)
├── screenshots/
│   └── (responsive screenshot evidence — see Part 2 Details above)
└── _private/
```

## Changelog
| Date       | Change                                                                 |
|------------|-------------------------------------------------------------------------|
| 2026-08-04 | Initial repository setup — file/folder structure created.              |
| 2026-08-04 | Built semantic HTML5 structure for all 5 pages (index, about, products, enquiry, contact). |
| 2026-08-04 | Added base CSS for structural readability (full styling in Part 2).    |
| 2026-08-04 | Added sitemap diagram and README documentation.                        |
| 2026-08-05 | Added real hero banner image (AI-generated via ChatGPT) to homepage.   |
| 2026-08-05 | Added 3 real product photos (Sanctified Cross Tee, Kairos Zip Hoodie, Kairos Cross Joggers); remaining shop slots marked "Coming Soon". |
| 2026-08-05 | Created gothic wordmark logo using UnifrakturMaguntia typeface, matching embroidered "K" branding on garments. |
| 2026-08-05 | Added real crew photo to About Us page; updated team section copy to match. |
| 2026-08-13 | Created full external stylesheet (`css/style.css`): CSS reset, design tokens, typographic scale, base styles. |
| 2026-08-13 | Implemented Flexbox layout for navigation, product grid, location cards, mission/vision section, and forms. |
| 2026-08-13 | Applied visual styling (colour, borders, box-shadow) and interactive pseudo-classes (`:hover`, `:focus`, `:active`) across all pages. |
| 2026-08-13 | Implemented responsive design: tablet and mobile breakpoints via media queries; navigation, layout, and typography all adapt per breakpoint. |
| 2026-08-13 | Generated and implemented responsive image variants (480w/800w/1200w) with `srcset`/`sizes` on all shop product images. |
| 2026-08-13 | Implemented `<picture>` element with breakpoint-specific sources for the homepage hero banner. |
| 2026-08-13 | Restructured About Us Mission/Vision section into paired blocks (`.mv-block`) for a cleaner two-column responsive layout. |
| 2026-08-13 | Captured and added responsive screenshot evidence (desktop/tablet/mobile) to README for Home, Shop, About, and Enquiry pages. |
| 2026-08-13 | Updated README with full Part 2 documentation, changelog, and references. |

## References
Referencing style: **Harvard (IIE-adapted)**.

- Afrihost, 2026. *Shared Hosting*. [online] Available at: <https://www.afrihost.com/shared-hosting> [Accessed 4 August 2026].
- Krug, S., 2014. *Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability*. 3rd ed. Berkeley: New Riders.
- MDN Web Docs, 2026. *CSS Flexible Box Layout*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout> [Accessed 13 August 2026]. Used as a technical reference for Flexbox layout implementation.
- MDN Web Docs, 2026. *Responsive Images*. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images> [Accessed 13 August 2026]. Used as a technical reference for `srcset`, `sizes`, and the `<picture>` element.
- OpenAI, 2026. *ChatGPT* (image generation feature). [AI tool] Available at: <https://chatgpt.com> [Accessed 5 August 2026]. Used to generate the homepage hero banner image (`images/hero-banner.jpg`).
- Unifraktur Project, 2017. *UnifrakturMaguntia* (typeface). [online] Available at: <https://github.com/google/fonts/tree/main/ofl/unifrakturmaguntia> [Accessed 5 August 2026]. SIL Open Font License. Used for the "Kairos" wordmark logo (`images/logo.png`).
- W3Schools, 2026. *CSS Media Queries*. [online] Available at: <https://www.w3schools.com/css/css3_mediaqueries.asp> [Accessed 13 August 2026]. Used as a technical reference for responsive breakpoints.
- W3Schools, 2026. *HTML5 Semantic Elements*. [online] Available at: <https://www.w3schools.com/html/html5_semantic_elements.asp> [Accessed 4 August 2026].

*Additional references specific to the Website Project Proposal document appear in that file's own reference list.*
*Note: Use of ChatGPT for image generation and of Claude for development assistance will be documented in full in the AI Disclosure Annexe accompanying this submission, per IIE guidelines.*
