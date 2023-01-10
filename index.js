// accordion menu arrows
const accordionItems = document.querySelectorAll(".accordion-item");

for (let i = 0; i < accordionItems.length; i++) {
  let item = accordionItems[i];

  item.addEventListener("click", () => {
    let arrows = document.querySelectorAll(".fa-chevron-down");
    let arrow = arrows[i];
    console.log(arrow);
    arrow.classList.toggle("active");
  })
}

// update copyright year to current year
const copyright = document.querySelector(".copyright");
const currentYear = new Date().getFullYear()

copyright.innerText = `hand-coded by sheila blair ©${currentYear}`;

// dark mode toggle
const toggle = document.querySelector('.checkbox');
const body = document.querySelector("body");
const links = document.querySelectorAll("a")
const skillsCard = document.getElementById("skills")

function handleClick() {
  // toggle dark mode on body
  if (body.classList.contains("light")) {
    body.classList.remove("light")
    body.classList.add("dark")
  } else {
    body.classList.remove("dark")
    body.classList.add("light")
  }

  // toggle dark mode on links
  links.forEach((a) => {
    if (a.classList.contains("dark-link")) {
      a.classList.remove("dark-link")
      a.classList.add("light-link")
    } else {
      a.classList.remove("light-link")
      a.classList.add("dark-link")
    }
  })

  //toggle dark mode on skills card
  if (skillsCard.classList.contains("light-card")) {
    skillsCard.classList.remove("light-card")
    skillsCard.classList.add("dark-card")
  } else {
    skillsCard.classList.remove("dark-card")
    skillsCard.classList.add("light-card")
  }
}

toggle.addEventListener("click", () => {
  handleClick();
})