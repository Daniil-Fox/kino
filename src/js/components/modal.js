// Компонент для работы с модальными окнами
class ModalController {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Обработчики для кнопок открытия модальных окон
    document.addEventListener("click", (e) => {
      const openButton = e.target.closest("[data-target]");
      if (openButton) {
        e.preventDefault();
        const targetModal = openButton.getAttribute("data-target");
        this.openModal(targetModal);
      }
    });

    // Обработчики для кнопок закрытия модальных окон
    document.addEventListener("click", (e) => {
      const closeButton = e.target.closest(".modal__close");
      if (closeButton) {
        e.preventDefault();
        this.closeModal(closeButton.closest(".modal"));
      }
    });

    // Закрытие при клике вне modal__body
    document.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal");
      if (modal && e.target === modal) {
        this.closeModal(modal);
      }
    });

    // Закрытие по Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const openModal = document.querySelector(".modal--active");
        if (openModal) {
          this.closeModal(openModal);
        }
      }
    });
  }

  openModal(targetSelector) {
    const modal = document.querySelector(targetSelector);
    if (!modal) {
      console.error(`Модальное окно ${targetSelector} не найдено`);
      return;
    }

    // Закрываем все открытые модальные окна
    this.closeAllModals();

    // Открываем целевое модальное окно
    modal.classList.add("modal--active");
    document.body.classList.add("modal-open");

    // Фокусируемся на первом инпуте в модальном окне
    const firstInput = modal.querySelector("input, textarea, select");
    if (firstInput) {
      setTimeout(() => {
        firstInput.focus();
      }, 100);
    }

    // Блокируем скролл на странице
    this.disableScroll();
  }

  closeModal(modal) {
    if (!modal) return;

    modal.classList.remove("modal--active");
    document.body.classList.remove("modal-open");

    // Разблокируем скролл на странице
    this.enableScroll();

    // Сбрасываем форму в модальном окне
    const form = modal.querySelector("form");
    if (form) {
      form.reset();
    }
  }

  closeAllModals() {
    const openModals = document.querySelectorAll(".modal--active");
    openModals.forEach((modal) => {
      this.closeModal(modal);
    });
  }

  disableScroll() {
    document.body.style.overflow = "hidden";
  }

  enableScroll() {
    document.body.style.overflow = "";
  }
}

// Инициализация компонента при загрузке DOM
document.addEventListener("DOMContentLoaded", () => {
  new ModalController();
});

export default ModalController;
