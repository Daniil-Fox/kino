import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

new Swiper(".get__slider", {
  slidesPerView: "auto",
  spaceBetween: 40,
});
