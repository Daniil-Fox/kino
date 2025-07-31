import "./_components.js";

import { validateForms } from "./functions/validate-forms.js";
const checks = [];
const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".select-contact",
    rules: [
      {
        rule: "required",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");

  // Находим модальное окно
  const modal = document.querySelector(".modal");
  if (!modal) return;

  // Находим заголовок и контейнер для контента
  const modalTitle = modal.querySelector(".modal__title");
  const modalContent = modal.querySelector(".modal__content");

  if (modalTitle && modalContent) {
    // Изменяем заголовок
    modalTitle.textContent = "Спасибо, ваша заявка принята";

    // Создаем подзаголовок
    const subtitle = document.createElement("p");
    subtitle.className = "desc2 text-dark";
    subtitle.textContent =
      "Наши специалисты свяжутся с вами в ближайшем времени";

    // Очищаем контент и добавляем новый подзаголовок
    modalContent.innerHTML = "";
    modalContent.appendChild(subtitle);
  }
};
validateForms(".modal__form", rules1, [], afterForm);

function draggableScrollHorizontal(selector) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return false;

  elements.forEach((element) => {
    let isDragging = false,
      wasDragging = false,
      startX,
      scrollLeft,
      targetDown,
      targetUp;

    element.classList.add("is-ready-to-grab");

    element.addEventListener("mouseenter", (e) => {
      element.style.cursor = isOverflow() ? "grab" : "";
    });

    element.addEventListener("mousedown", (e) => {
      if (!isOverflow()) return;
      isDragging = true;
      targetDown = e.target;
      startX = e.pageX - element.offsetLeft;
      scrollLeft = element.scrollLeft;
      element.style.cursor = "grabbing";
    });

    document.addEventListener("mouseleave", () => {
      if (!isOverflow()) return;
      isDragging = false;
      element.style.cursor = "grab";
    });

    document.addEventListener("mouseup", (e) => {
      if (!isOverflow()) return;
      isDragging = false;
      targetUp = e.target;
      element.style.cursor = "grab";
    });

    document.addEventListener("click", (e) => {
      if (targetDown === targetUp && wasDragging) e.preventDefault();
      wasDragging = false;
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging || !isOverflow()) return;
      e.preventDefault();
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2;
      element.scrollLeft = scrollLeft - walk;
      wasDragging = true;
    });

    // this is nessesery
    element.addEventListener("mousedown", (e) => {
      if (isDragging) e.preventDefault();
    });

    function isOverflow() {
      return element.scrollWidth > element.clientWidth;
    }
  });
}

draggableScrollHorizontal(".testi__slider .swiper-wrapper");
