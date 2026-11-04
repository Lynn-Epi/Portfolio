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


cards.forEach((card) => {
  card.addEventListener("click", () => {

    if (window.matchMedia("(max-width: 600px)").matches) {
      return;
    }

    if (card.classList.contains("selected")) {
      card.classList.remove("selected");
    } else {
      cards.forEach((otherCard) => {
        otherCard.classList.remove("selected");
      });

      card.classList.add("selected");
    }
  });
});
