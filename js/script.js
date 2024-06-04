function orderRange() {
  const orderSection = document.querySelector(".order");

  if (orderSection) {
    const rangeInput = document.querySelector(".order__input-range");
    const rangeOutput = document.querySelector(".order__range-output output");

    rangeOutput.textContent = rangeInput.value;

    rangeInput.addEventListener("input", (e) => {
      rangeOutput.textContent = e.target.value;
    });
  }
}

function testimonialsSwiper() {
  const swiper = new Swiper(".swiper", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}

window.addEventListener("load", () => {
  orderRange();
  testimonialsSwiper();
});
