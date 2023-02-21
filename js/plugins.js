// Check Local Storage
let savedColor = localStorage.getItem("color_option");

if (savedColor !== null ) {
  document.documentElement.style.setProperty('--main-color', savedColor);

  // Remove Class Active From All Colors
  document.querySelectorAll(".color-list li").forEach(el => {
    el.classList.remove("active");

    // Add Class Active To Current Color
    if(el.dataset.color === savedColor) {
      el.classList.add("active");
    }
  });
}

// Start Settings Box
let settingsBtn = document.querySelector(".settings .set-icon");
let optionsBox = document.querySelector(".settings .options");

settingsBtn.onclick = (e) => {
  e.stopPropagation();
  optionsBox.classList.toggle("open");
}
// Switch Colors
const colorsLi = document.querySelectorAll(".color-list li");
colorsLi.forEach(li => {
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    let colorActive = e.target.parentElement.querySelectorAll(".active");
    colorActive.forEach(el => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
document.addEventListener("click", (e) => {
  if(e.target !== settingsBtn && e.target !== optionsBox) {
    if(optionsBox.classList.contains("open")) {
      optionsBox.classList.toggle("open")
    }
  }
});
optionsBox.onclick = function (e) {
  e.stopPropagation();
}
//-----------------------------------------------------------
// Start Navbar
let links = document.querySelectorAll(".navbar .nav-link");
links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(ln => {
      ln.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// Start Hesham Description
let developer = document.querySelector(".hesham");
let textOption = true;
let textInterval;
developer.textContent = "Frontend Developer";

function randomText() {
  if(textOption === true) {
    let textArray = ["Frontend Developer", "Backend Developer", "Fullstack"];
    textInterval = setInterval(() => {
      let randText = Math.floor(Math.random() * textArray.length);

      developer.textContent = textArray[randText];
      
    }, 1500);
  } else {
    clearInterval(textInterval);
  }
}
randomText();

// Scroll To Elements
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((item) => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    let section = document.getElementById(item.getAttribute("data-scroll"));
    section.scrollIntoView({behavior: "smooth"});
  });
});

// Animate Sections And Scroll To Top Button
let scrollBtn = document.querySelector(".up");
let skills = document.querySelector(".skills");
let langs = document.querySelectorAll(".skills .skill-content .progress .progress-bar");

let resume = document.querySelector(".resume");
let timeRight = document.querySelectorAll(".resume .timeline-content .info");
window.onscroll = function () {
  // Scroll To Top Button
  if (window.scrollY >= 540) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }

  // Skills Scroll
  if (window.scrollY >= skills.offsetTop) {
    langs.forEach(el => {
      el.style.width = el.dataset.progress;
    });
  }
}

// Scroll Top Button Action
scrollBtn.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
}