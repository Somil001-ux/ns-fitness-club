const phone = "917291072578";
const generalMessage = "Hello NS FITNESS CLUB! I visited your website and would like to know more about your gym, membership plans, fees and available facilities. Can I get more details?";
const wa = (message) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.getElementById("whatsappFloat").href = wa(generalMessage);
document.querySelectorAll("[data-message]").forEach(button => {
  button.addEventListener("click", () => window.open(wa(button.dataset.message), "_blank", "noopener,noreferrer"));
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
document.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => {
  lightboxImage.src = item.dataset.full;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}));
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}
lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLightbox(); });
