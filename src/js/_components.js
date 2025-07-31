import "./components/sliders.js";
import "./components/video.js";
import "./components/ready-animation.js";
import "./components/scroll-animation.js";
import "./components/modal.js";
import "./components/inputs.js";
import "./components/dropdown.js";
import "./components/fancy.js";
import "./functions/validate-forms.js";
import CustomTextarea from "./components/textarea.js";

// Инициализация кастомных textarea
document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.querySelectorAll(".form__input--area");
  textareas.forEach((textarea) => {
    new CustomTextarea(textarea);
  });
});
