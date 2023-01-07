// accordion menu for projects
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItems.forEach((el) => el.classList.remove("active"));
      el.classList.add("active");
    }
  })
);

// update copyright year to current year
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear()

copyright.innerText = `hand-coded by sheila blair ©${currentYear}`;