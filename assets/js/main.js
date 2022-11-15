window.addEventListener("DOMContentLoaded", (event) => {
  new Swiper(".d-page__cards_content.swiper", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        direction: "horizontal",
        centeredSlides: true,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 15,
        direction: "horizontal",
        centeredSlides: false,
      },
      1200: {
        direction: "vertical",
        slidesPerView: "auto",
        loop: false,
        centeredSlides: false,
      },
    },
  });

  new Swiper(".d-page__content_gallery_slider .swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".d-page__content_gallery_slider .swiper-button-next",
      prevEl: ".d-page__content_gallery_slider .swiper-button-prev",
    },
  });

  new Swiper(".d-page__content_similar_slider.swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
    },
  });

  const tabsUniversal = document.querySelector(".tabs");
  const tabsContentUniversal = document.querySelectorAll(".tab-content");

  tabsUniversal.addEventListener("click", (event) => {
    let currentTabTarget = event.target;
    let currentTab = event.target.dataset.tab;

    for (let i = 0; i < tabsUniversal.children.length; i++) {
      const element = tabsUniversal.children[i];
      element.classList.remove("active");
    }

    tabsContentUniversal.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        console.log("error");
      }

      currentTabTarget.classList.add("active");
      if (item.dataset.tabContent == currentTab) {
        item.classList.add("active");
      }
    });
  });
});
