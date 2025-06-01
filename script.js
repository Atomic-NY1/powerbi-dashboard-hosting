// Scroll-to-top button functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    scrollTopBtn.classList.add("show");
    scrollTopBtn.classList.remove("hide");
  } else {
    scrollTopBtn.classList.remove("show");
    scrollTopBtn.classList.add("hide");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
