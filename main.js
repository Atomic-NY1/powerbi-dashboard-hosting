function checkPassword() {
  const input = document.getElementById('password-input');
  const prompt = document.getElementById('password-prompt');
  const correct = atob("c3BhY2UxMjM="); // "space123"

  if (input.value === correct) {
    prompt.style.display = 'none';
    document.body.classList.remove('gated');
    triggerFadeIn();
  } else {
    alert("Incorrect password");
  }
}

function triggerFadeIn() {
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}
