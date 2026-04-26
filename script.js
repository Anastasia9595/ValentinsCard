document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".card");
  const container = document.querySelector(".container");

  container.addEventListener("click", function () {
    card.classList.toggle("open");
  });
});
