// Start Navbar
let links = document.querySelectorAll(".navbar .nav-link");
links.forEach(link => {
  link.addEventListener("click", function() {
    links.forEach(ln => {
      ln.classList.remove("active");
      this.classList.add("active");
    });
  });
});

// Scroll To Elements
let navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((item) => {
  item.addEventListener("click", function(e) {
    e.preventDefault();
    let section = document.getElementById(item.getAttribute("data-scroll"));
    section.scrollIntoView({behavior: "smooth"});
  });
});

// Animate Progerss Section
let skills = document.querySelector(".skills");
let langs = document.querySelectorAll(".skills .skill-content .progress .progress-bar");

let resume = document.querySelector(".resume");
let timeRight = document.querySelectorAll(".resume .timeline-content .info");
window.onscroll = function () {
  // Skills Scroll
  if (window.scrollY >= skills.offsetTop) {
    langs.forEach(el => {
      el.style.width = el.dataset.progress;
    });
  }

  // Resume
  if (window.scrollY >= resume.offsetTop) {
    timeRight.forEach(line => {
      line.style.transform = "translateX(0)";
    });
  }
}