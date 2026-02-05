/* ================================
   Data Waly Foundation – Script.js
   Smooth & Professional
================================ */

// ---------- Smooth Scroll ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  });
});

// ---------- Button Hover Effect ----------
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.opacity = '0.9';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.opacity = '1';
  });
});

// ---------- WhatsApp Safety Confirm ----------
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

whatsappLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const ok = confirm(
      "You are being redirected to WhatsApp to contact Data Waly Foundation.\n\nContinue?"
    );
    if (!ok) e.preventDefault();
  });
});

// ---------- Language Toggle (Future Ready) ----------
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ur" : "en";
  alert(
    currentLang === "ur"
      ? "Urdu mode activated (content switch coming soon)"
      : "English mode activated"
  );
}

// ---------- Console Branding ----------
console.log(
  "%cData Waly Foundation",
  "color:#2ECC71;font-size:20px;font-weight:bold;"
);
console.log(
  "%cServing Humanity with Dignity",
  "color:#0A2A43;font-size:14px;"
);