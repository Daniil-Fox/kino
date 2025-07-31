import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

new Swiper(".get__slider", {
  slidesPerView: "auto",
  spaceBetween: 40,

  breakpoints: {
    320: {
      spaceBetween: 30,
    },
    577: {
      spaceBetween: 40,
    },
  },
});

// new Swiper(".testi__slider", {
//   slidesPerView: "auto",
//   spaceBetween: 28,
// });
