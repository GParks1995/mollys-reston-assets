# Molly’s Dog Care Reston – Client Website

This repository contains a rebuilt, fully responsive marketing site for **Molly’s Dog Care Reston**, a premium dog daycare, grooming and boarding facility. The project was created as part of a full design and development overhaul to better reflect the 2025 brand identity and improve performance, accessibility and client conversion.

## Structure

```text
mollys_site/
├── assets/
│   └── images/       # Decorative backgrounds and illustrations (generated)
├── css/
│   └── style.css     # Global styles with colour variables and components
├── js/
│   └── script.js     # Client‑side interactions, carousels, modals and animations
├── index.html        # Homepage with hero slider, service previews and testimonials
├── services.html     # Detailed descriptions of daycare, boarding and grooming
├── about.html        # Brand story, mission and values
├── team.html         # Profiles of leadership and staff
├── pricing.html      # Pricing tables with membership toggle and sticky CTA
├── testimonials.html # Carousel of full client testimonials
├── contact.html      # Contact information, enquiry form and FAQ
└── README.md         # This file
```

## Developing locally

No build tools are required. Simply open `index.html` in your browser or serve the directory with a static HTTP server. All JavaScript is written in vanilla ES6 and external dependencies are loaded from CDNs.

```bash
# From the project root
python -m http.server 8000
# Then visit http://localhost:8000/mollys_site/index.html
```

## Notes

* **Responsive design:** The layout uses CSS Grid and Flexbox and adapts to mobile, tablet and desktop screens. Navigation collapses into a hamburger menu on small devices.
* **Animations:** Powered by GSAP and ScrollTrigger for subtle entrance effects. You can adjust or disable animations in `js/script.js`.
* **Accessibility:** Semantic HTML5 elements (`header`, `nav`, `section`, `footer`), ARIA labels on controls, visible focus states and sufficient colour contrast are provided. Forms include basic validation and keyboard navigation.
* **Customisation:** Colour palette, typography and spacing are defined via CSS variables in `style.css`. Update these variables to adapt the design to future brand refinements.
* **Placeholders:** Images used in this build are abstract illustrations generated to evoke the Molly’s brand colours and spirit. Replace files in `assets/images/` with your own photography if available. Ensure that new images are optimised for web and update the `<img>` `alt` text accordingly.
* **Integration hooks:** Comments and classes in the HTML mark where future integrations with systems like Gingr, Mailchimp or Zapier can be inserted.

---

This project is a foundation for continued development. Feel free to extend and adapt it as Molly’s Dog Care Reston grows.