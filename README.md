# Barça Pulse — Web Analytics Project 🔵🔴

An independent FC Barcelona-inspired student project combining front-end web development, user experience design, and digital analytics.

**Live Website:** https://ferno718.github.io/barca-pulse/

**GitHub Repository:** https://github.com/ferno718/barca-pulse

---

## 📌 Project Overview

Barça Pulse is a multi-page football website developed to explore how users interact with a sports-focused digital platform.

The project focuses on understanding website engagement, navigation patterns, user interactions, and conversion-related behaviour through web analytics tools.

It integrates Google Tag Manager (GTM), Google Analytics 4 (GA4), and Tableau as part of an end-to-end analytics workflow.

**Project Objectives:**
1. Develop an interactive, multi-page football website.
2. Implement event-based tracking using Google Tag Manager.
3. Measure user engagement using Google Analytics 4.
4. Analyse user behaviour and website performance.
5. Present analytical findings through Tableau dashboards.

> This is an independent educational project and is not affiliated with or endorsed by FC Barcelona.

## 🌐 Website Pages

| Page | Description |
|---|---|
| `index.html` | Homepage and primary navigation |
| `matches.html` | Football matches and related content |
| `team.html` | Team and player information |
| `news.html` | News browsing and search |
| `tickets.html` | Interactive ticket search form |
| `shop.html` | Product browsing and demo e-commerce interactions |

## 🛠️ Technology Stack

- **HTML5** — Website structure
- **CSS3** — Styling and responsive layouts
- **JavaScript** — Interactive functionality and event tracking
- **Google Tag Manager (GTM)** — Tag management
- **Google Analytics 4 (GA4)** — Website measurement and reporting
- **Tableau** — Data visualization and analytics
- **GitHub Pages** — Website hosting
- **GitHub** — Version control

## 📊 Google Analytics Implementation

The project uses JavaScript's `dataLayer` to capture important website interactions.

### Events implemented

| Event Name | Purpose |
|---|---|
| `navigation_click` | Tracks navigation interactions |
| `cta_click` | Tracks call-to-action clicks |
| `ticket_search` | Tracks ticket search submissions |
| `newsletter_signup` | Tracks newsletter signup interactions |
| `site_search` | Tracks website search activity |
| `view_item` | Tracks product views |
| `add_to_cart` | Tracks cart interactions |
| `purchase` | Tracks simulated purchase activity |

These events provide the foundation for analysing user engagement and conversion-related behaviour.

The corresponding GTM tags and GA4 event collection must be configured and validated separately.

## 🔄 Suggested User Journey & Conversion Funnel

The project follows a simulated visitor journey:

**Landing Page → Matches / News / Shop → Tickets or Product Interaction → Engagement Events → Demo Purchase**

This funnel can be used to investigate:
- Navigation behaviour
- Content engagement
- Ticket-search interest
- Product interaction
- Cart activity
- Simulated purchase progression

## 📈 Proposed Tableau Dashboards

The following dashboard structure is planned for analysing website performance:

1. **Executive Overview** — Overall website performance and engagement.
2. **Acquisition & Traffic** — Traffic sources and visitor acquisition.
3. **Content & Navigation** — Page performance and navigation patterns.
4. **Ticket Intent Funnel** — Ticket searches and interaction progression.
5. **E-commerce Behaviour** — Product views, cart additions and demo purchases.
6. **Device / Technology** — Device categories and technology breakdown.

These dashboards will use collected analytics data once the GA4 data extraction and reporting workflow is established.

## ⚙️ Run Locally

**Option A — Direct Browser Access**

Open `index.html` directly in your browser.

**Option B — Local Development Server (Recommended)**

Clone the repository:

```bash
git clone https://github.com/ferno718/barca-pulse.git
```

Navigate to the project directory:

```bash
cd barca-pulse
```

Start the local server:

```bash
python -m http.server 5500
```

Open the following URL:

http://localhost:5500

For Google Tag Manager Preview and debugging, use the locally hosted version of the website.

## 🏗️ Analytics Architecture

The project follows a three-layer analytics architecture:

| Layer | Technology | Responsibility |
|---|---|---|
| Tag Management | Google Tag Manager | Manages tracking tags and event transmission |
| Measurement | Google Analytics 4 | Collects and reports website interaction data |
| Visualization | Tableau | Presents analytical findings through dashboards |

**Workflow:**

Website Interaction → JavaScript Data Layer → GTM → GA4 → Tableau

## ⚠️ Important Notes

- This is an independent student project, not the official FC Barcelona website.
- Ticket searches are simulated and do not book actual tickets.
- Shopping cart and checkout interactions are demonstrations.
- No real payments or financial transactions are processed.
- Newsletter interactions demonstrate analytics tracking and do not necessarily create actual subscriptions.
- Event pushes to `dataLayer` do not automatically guarantee successful GA4 collection. GTM configuration and testing are required.
- Tableau dashboards require collected data before meaningful analytical conclusions can be drawn.

## 👨‍💻 Author

**Yash Gharat**

GitHub: https://github.com/ferno718

Project Repository: https://github.com/ferno718/barca-pulse

---

*Developed as an independent learning project exploring web development, digital analytics, user behaviour, and data visualization.*