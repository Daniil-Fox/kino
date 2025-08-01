// Компонент для анимации заголовков секций
class HeadingsAnimation {
  constructor() {
    this.init();
  }

  init() {
    this.setupHeadingsAnimation();
  }

  setupHeadingsAnimation() {
    // Находим все заголовки секций
    const sectionHeadings = document.querySelectorAll("h1, h2, h3");

    sectionHeadings.forEach((heading, index) => {
      // Добавляем анимацию только если у элемента еще нет data-animate
      if (!heading.hasAttribute("data-animate")) {
        heading.setAttribute("data-animate", "fade-in-up");
        heading.setAttribute("data-delay", (index * 100).toString());
      }
    });
  }
}

// Инициализация компонента при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new HeadingsAnimation();
});

export default HeadingsAnimation;
