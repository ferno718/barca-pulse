// FC Barcelona-inspired Web Analytics Demo

window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, params = {}) {
  window.dataLayer.push({
    event: eventName,
    ...params
  });
}

// Simple demo cart
window.demoCart = [];

document.addEventListener("DOMContentLoaded", () => {

  // Navigation clicks
  document.addEventListener("click", e => {
    const link = e.target.closest("a[data-nav]");

    if (!link) return;

    trackEvent("navigation_click", {
      link_text: link.textContent.trim(),
      link_url: link.getAttribute("href"),
      nav_location: link.dataset.nav
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

    // View product
    const viewBtn = card.querySelector("[data-view-product]");

    if (viewBtn) {
      viewBtn.addEventListener("click", () => {

        trackEvent("view_item", {
          currency: "EUR",
          value: price,
          items: [
            {
              item_name: product,
              price: price,
              quantity: 1
            }
          ]
        });

        toast("Product view tracked");
      });
    }

    // Add to cart
    const cartBtn = card.querySelector("[data-add-cart]");

    if (cartBtn) {
      cartBtn.addEventListener("click", () => {

        const cartItem = {
          item_name: product,
          price: price,
          quantity: 1
        };

        // Store the actual selected product
        window.demoCart = [cartItem];

        trackEvent("add_to_cart", {
          currency: "EUR",
          value: price,
          items: [cartItem]
        });

        toast(product + " added to cart");
      });
    }
  });

  // Ticket form
  const ticketForm = document.querySelector("#ticketForm");

  if (ticketForm) {
    ticketForm.addEventListener("submit", e => {

      e.preventDefault();

      const match = ticketForm.querySelector("[name=match]").value;
      const qty = Number(
        ticketForm.querySelector("[name=quantity]").value
      );

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

      trackEvent("site_search", {
        search_term: term
      });

      toast("Search event tracked");
    });
  }

  // Purchase
  document.querySelectorAll("[data-purchase]").forEach(btn => {

    btn.addEventListener("click", () => {

      // Check whether an item was added to cart
      if (window.demoCart.length === 0) {
        toast("Please add a product to cart first");
        return;
      }

      // Get the actual item added to cart
      const cartItems = window.demoCart;

      // Calculate total value
      const totalValue = cartItems.reduce(
        (total, item) =>
          total + (item.price * item.quantity),
        0
      );

      trackEvent("purchase", {

        transaction_id: "DEMO-" + Date.now(),

        currency: "EUR",

        value: totalValue,

        items: cartItems

      });

      toast("Purchase event tracked");

      // Clear cart after purchase
      window.demoCart = [];
    });
  });

  // Mobile nav
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.style.display =
        navLinks.style.display === "flex"
          ? "none"
          : "flex";

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

  window.__toastTimer = setTimeout(() => {
    el.style.display = "none";
  }, 2200);
}