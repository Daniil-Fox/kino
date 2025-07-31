// Универсальный компонент для анимации элементов при скролле
class ScrollAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    // Находим все элементы с атрибутом data-animate
    const animatedElements = document.querySelectorAll("[data-animate]");

    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Элемент считается видимым, если 20% его площади видно
        rootMargin: "50px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  animateElement(element) {
    const animationType = element.getAttribute("data-animate");
    const delay = element.getAttribute("data-delay") || 0;

    setTimeout(() => {
      element.classList.add("animate");

      // Удаляем атрибут data-animate чтобы анимация не повторялась
      element.removeAttribute("data-animate");
    }, parseInt(delay));
  }
}

// Инициализация компонента при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new ScrollAnimation();
});

export default ScrollAnimation;
