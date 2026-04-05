A personal portfolio website built with pure HTML5 and CSS3 — no frameworks, no build tools, no dependencies.

Structure
portfolio/
├── index.html       # Complete single-page portfolio
├── styles.css       # All styling — TRON neon red theme
├── profile.jpeg     # Profile photo
├── server.js        # Minimal static file server (Node.js built-ins only)
└── package.json     # Single script: runs server.js

Running Locally
You need Node.js installed (any version 12+).

node server.js

Then open http://localhost:3000 in your browser.

To run on a custom port:

PORT=8080 node server.js

Without a server
Because this is plain HTML and CSS, you can also just open index.html directly in any browser — no server required. Double-click the file or drag it into your browser.

Customising
Everything is in two files:

What to change	Where
Name, bio, links, projects, education	index.html
Colors, fonts, layout, animations	styles.css
Key CSS variables at the top of styles.css:

--primary: #ff003c;   /* neon red — change this to recolour the whole site */
--bg:      #050507;   /* background */
--card:    #0d0d10;   /* card/panel background */

Sections
Hero — Name, title, tagline, resume button, social links
About — Short bio and philosophy quote
Skills — Languages, tools, development areas, AI capabilities
Architecture Thinking — System design philosophy with flow diagrams
Education & Certifications — Academic and professional credentials
Projects — Deployed systems with problem/approach breakdown
Contact — Email, LinkedIn, WhatsApp
Fonts used
All loaded from Google Fonts — no installation needed:

Rajdhani — headings and display text
Inter — body text
JetBrains Mono — code labels and monospace elements

Scroll to latest
