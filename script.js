const doc = document;

doc.addEventListener('DOMContentLoaded', initScrollSpy);

function initScrollSpy() {
  const sections = doc.querySelectorAll('section[data-scroll-spy]');
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5,
  });

  sections.forEach(section => observer.observe(section));
}

function handleIntersection(entries) {
  entries.forEach(entry => {
    const id = entry.target.id;
    const link = document.querySelector(
      `a[data-scroll-spy][href="#${id}"]`
    );

    if (!link) return;

    link.classList.toggle('active', entry.isIntersecting);
  });
}