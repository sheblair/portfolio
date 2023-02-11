// toggle accordion menu arrows
const accordionItems = document.querySelectorAll(".accordion-item");

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
const toggle = document.querySelector(".checkbox");
const toggleWrapper = document.querySelector(".toggle")
const body = document.querySelector("body");
const links = document.querySelectorAll(".link")
const skillsCard = document.getElementById("skills")
let darkMode = localStorage.getItem("dark-mode");

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

function enableDarkMode() {
  links.forEach((link) => {
      link.classList.add("dark-link")
  })
  body.classList.add("dark")
  skillsCard.classList.add("dark-card")
  localStorage.setItem("dark-mode", "enabled")
}

function disableDarkMode() {
  links.forEach((link) => {
      link.classList.remove("dark-link")
  })
  body.classList.remove("dark")
  skillsCard.classList.remove("dark-card")
  localStorage.setItem("dark-mode", "disabled")
}

toggle.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
      toggleWrapper.classList.add("dark-toggle")
    } else {
      disableDarkMode();
    }
})

