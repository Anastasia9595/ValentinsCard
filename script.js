document.addEventListener("DOMContentLoaded", function () {
  // Your code here
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");
  let isCardUp = false;

  container.addEventListener("click", function () {
    if (!isCardUp) {
      card.style.top = "-180px";
      card.style.transform = "scale(2)";
      card.style.transition = "0.5s";
      card.style.zIndex = "1000";
      isCardUp = true;
    } else {
      card.style.top = "0";
      card.style.transform = "scale(1)";
      card.style.zIndex = "0";
      isCardUp = false;
    }
  });
});
