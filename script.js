
// FC Barcelona-inspired Web Analytics Demo
// Replace GTM-XXXXXXX with your real GTM container ID in every HTML page.

window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, params = {}) {
  window.dataLayer.push({
    event: eventName,
    ...params
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Navigation clicks
  document.querySelectorAll("[data-nav]").forEach(link => {
    link.addEventListener("click", () => {
      trackEvent("navigation_click", {
        link_text: link.textContent.trim(),
        link_url: link.getAttribute("href"),
        nav_location: link.dataset.nav
      });
    });
  });

  // Generic CTA tracking
  document.querySelectorAll("[data-cta]").forEach(btn => {
    btn.addEventListener("click", () => {
      trackEvent("cta_click", {
        cta_name: btn.dataset.cta,
        cta_location: btn.dataset.location || "unknown"
      });
    });
  });

  // Product view / add to cart
  document.querySelectorAll("[data-product]").forEach(card => {
    const product = card.dataset.product;
    const price = Number(card.dataset.price || 0);

    const viewBtn = card.querySelector("[data-view-product]");
    if (viewBtn) {
      viewBtn.addEventListener("click", () => {
        trackEvent("view_item", {
          currency: "EUR",
          value: price,
          items: [{ item_name: product, price }]
        });
        toast("Product view tracked");
      });
    }

    const cartBtn = card.querySelector("[data-add-cart]");
    if (cartBtn) {
      cartBtn.addEventListener("click", () => {
        trackEvent("add_to_cart", {
          currency: "EUR",
          value: price,
          items: [{ item_name: product, price, quantity: 1 }]
        });
        toast("Add-to-cart event sent");
      });
    }
  });

  // Ticket form
  const ticketForm = document.querySelector("#ticketForm");
  if (ticketForm) {
    ticketForm.addEventListener("submit", e => {
      e.preventDefault();
      const match = ticketForm.querySelector("[name=match]").value;
      const qty = Number(ticketForm.querySelector("[name=quantity]").value);
      trackEvent("ticket_search", {
        match_name: match,
        ticket_quantity: qty
      });
      toast("Ticket search tracked");
    });
  }

  // Newsletter
  const newsletter = document.querySelector("#newsletter");
  if (newsletter) {
    newsletter.addEventListener("submit", e => {
      e.preventDefault();
      trackEvent("newsletter_signup", {
        signup_location: "footer"
      });
      toast("Newsletter signup tracked");
      newsletter.reset();
    });
  }

  // Search
  const searchForm = document.querySelector("#searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", e => {
      e.preventDefault();
      const term = searchForm.querySelector("input").value.trim();
      trackEvent("site_search", { search_term: term });
      toast("Search event tracked");
    });
  }

  // Demo purchase
  document.querySelectorAll("[data-purchase]").forEach(btn => {
    btn.addEventListener("click", () => {
      trackEvent("purchase", {
        transaction_id: "DEMO-" + Date.now(),
        currency: "EUR",
        value: Number(btn.dataset.value || 99),
        items: [{ item_name: btn.dataset.item || "Demo item", price: Number(btn.dataset.value || 99), quantity: 1 }]
      });
      toast("Demo purchase event tracked");
    });
  });

  // Mobile nav
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "62px";
      navLinks.style.right = "4%";
      navLinks.style.background = "#071a3d";
      navLinks.style.padding = "18px";
      navLinks.style.borderRadius = "16px";
    });
  }
});

function toast(message) {
  const el = document.querySelector("#toast");
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.style.display = "none", 2200);
}
