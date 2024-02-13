document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");
  let isCardUp = false;

  container.addEventListener("click", function () {
    if (!isCardUp) {
      card.style.top = "-90px";
      card.style.transition = "0.5s";
      isCardUp = true;
    } else {
      card.style.top = "0";
      isCardUp = false;
    }
  });
});
