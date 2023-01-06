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
document.querySelector(".copyright").innerText = `© ${new Date().getFullYear()} sheila blair`;