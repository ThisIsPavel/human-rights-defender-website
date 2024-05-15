import $ from "jquery";
import "slick-carousel";

// слайдер feedback
const slideConfig = {
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  appendArrows: $(".feedback .feedback__slider-btns"),
  prevArrow:
    '<button><svg class="icon"><use href="./img/icons/icons.svg#left"></use></svg></button>',
  nextArrow:
    '<button><svg class="icon"><use href="./img/icons/icons.svg#right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

$(".feedback .cards").slick(slideConfig);
