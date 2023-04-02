let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

document.querySelector("#close-navbar").onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
console.log(slides);
let index = 0;
carousel();
function carousel() {
  if(slides!=undefined){
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }
  

  setTimeout(carousel, 5000);
}

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

let comment = document.getElementsByClassName("person");
console.log(comment);
let indexComment = 0;

function prevComment() {
  comment[indexComment].classList.remove("activeC");
  indexComment = indexComment - 1;
  if (indexComment < 0) {
    indexComment = comment.length - 1;
  }
  console.log(indexComment);
  comment[indexComment].classList.add("activeC");
}

function nextComment() {
  comment[indexComment].classList.remove("activeC");
  indexComment = indexComment + 1;
  if (indexComment === comment.length) {
    indexComment = 0;
  }
  console.log(indexComment);
  comment[indexComment].classList.add("activeC");
}

$(".toggle-btn").on("click", function () {
  $(this).toggleClass("active");
});

function priceDisplay(category) {
  let price = document.getElementsByClassName(category);
  console.log(category);
  Array.from(price).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  });
}

/*const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".random").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
*/
for (const titlePrice of document.getElementsByClassName("titlePrice")) {
  titlePrice.onmousemove = (e) => {
    const decimal = e.clientX / titlePrice.offsetWidth;
    const basePercent = 70,
      percentRange = 30,
      adjustablePercent = percentRange * decimal;

    const lightBluePercent = basePercent + adjustablePercent;

    titlePrice.style.setProperty("--bggradient", `${lightBluePercent}%`);
  };
}
