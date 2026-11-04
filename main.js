const cards = document.querySelectorAll(".skillCard");
const skillLabel = document.querySelector(".skillLabel");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    skillLabel.textContent = card.dataset.skill;
    skillLabel.classList.add("visible");
  });

  card.addEventListener("mouseleave", () => {
    skillLabel.classList.remove("visible");
  });
});