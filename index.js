// accordion menu arrows
const accordionItems = document.querySelectorAll(".accordion-item");

// accordionItems.forEach((el) =>
//   el.addEventListener("click", () => {
//     let arrows = document.querySelectorAll(".fa-chevron-down");
//     let arrow = arrow
//     if (arrow.classList.contains("active")) {
//       arrow.classList.remove("active");
//     } else {
//       arrow.classList.add("active");
//     }
//   })
// );

for (let i = 0; i < accordionItems.length; i++) {
  let item = accordionItems[i];

  item.addEventListener("click", () => {
    let arrows = document.querySelectorAll(".fa-chevron-down");
    let arrow = arrows[i];
    arrow.classList.toggle("active");
  })
}

// update copyright year to current year
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear()

copyright.innerText = `hand-coded by sheila blair ©${currentYear}`;

// dark mode toggle
const toggle = document.querySelector('.theme-switch');
const body = document.querySelector("body");
const links = document.querySelectorAll("a")


toggle.addEventListener('input', () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light")
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
    body.classList.add("light")
  }

  links.forEach((a) => {
    if (a.classList.contains("dark-link")) {
      a.classList.remove("dark-link")
      a.classList.add("light-link")
    } else {
      a.classList.remove("light-link")
      a.classList.add("dark-link")
    }
  })
});

