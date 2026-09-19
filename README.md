# Barça Pulse — Web Analytics Project

This is an independent FC Barcelona-inspired student project for learning:
1. Website UX + multi-page navigation
2. Google Tag Manager (GTM)
3. Google Analytics 4 (GA4)
4. Tableau dashboards

IMPORTANT:
- Replace `GTM-XXXXXXX` in every HTML page with your real GTM container ID.
- Do not describe this site as the official FC Barcelona website.
- The ticket purchase and checkout interactions are demos; they do not process real transactions.

## Pages
- index.html — Home
- matches.html — Matches
- team.html — Team
- news.html — News + search
- tickets.html — Ticket search form
- shop.html — Products + demo ecommerce events

## Events already pushed to dataLayer
- navigation_click
- cta_click
- ticket_search
- newsletter_signup
- site_search
- view_item
- add_to_cart
- purchase

## Run locally
Option A: open `index.html` directly in a browser.

Option B (recommended for testing):
```bash
cd fcb_web_analytics_project
python -m http.server 5500
```
Then open:
http://localhost:5500

For GTM preview/debugging, use the browser version served from localhost.

## Suggested project funnel
Landing page → Matches/News/Shop → Tickets or Product → ticket_search/add_to_cart → demo purchase.

## Suggested Tableau dashboard tabs
1. Executive Overview
2. Acquisition & Traffic
3. Content & Navigation
4. Ticket Intent Funnel
5. Ecommerce Behaviour
6. Device / Technology

## Important analytics note
GTM is the tag management layer. GA4 is the measurement/reporting layer. Tableau is the presentation/visual analytics layer.