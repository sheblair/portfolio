// accordion menu
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      accordionItems.forEach((el2) => el2.classList.remove("active"));
      el.classList.add("active");
    }
  })
);



// trying to write a for loop 

// const arrow = document.querySelector("i");
// const content = document.querySelector("#content")


// for (let i = 0; i < accordionItems.length; i++) {
//     let item = accordionItems[i];

//     item.addEventListener("click", () => {
//         let arrows = document.querySelectorAll(".fa-chevron-down");
//         for (let i = item; i < arrows.length; i++) {
//             let arrow = arrows[i]
//             if (arrow.classList.contains("active")) {
//                 arrow.classList.remove("active")
//             } else {
//                 arrow.classList.add("active")
//             }
//         }

//     })
// }