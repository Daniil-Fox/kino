// Компонент для анимации элементов в секции ready
class ReadyAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.readySection = document.querySelector(".ready");
    this.readyElems = document.querySelector(".ready__elems");
    this.images = this.readyElems?.querySelectorAll("img");

    if (!this.readySection || !this.readyElems || !this.images) return;

    this.isAnimated = false;
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.isAnimated) {
            this.animateElements();
          }
        });
      },
      {
        threshold: 0.3, // Анимация запустится когда 30% секции будет видно
        rootMargin: "50px",
      }
    );

    observer.observe(this.readySection);
  }

  animateElements() {
    this.isAnimated = true;

    // Анимация с задержкой для каждого элемента
    this.images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("animate");
      }, index * 200); // Задержка 200ms между элементами
    });
  }
}

// Инициализация компонента при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new ReadyAnimation();
});

export default ReadyAnimation;
