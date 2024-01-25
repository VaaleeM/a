// JavaScript con Intersection Observer
const elementos = document.querySelectorAll('.transicion');

const aparecerLentamente = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(aparecerLentamente, {
  root: null,
  threshold: 0.1 // Puedes ajustar el umbral según tus necesidades
});

elementos.forEach(elemento => {
  observer.observe(elemento);
});