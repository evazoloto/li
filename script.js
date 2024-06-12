function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
    tabContent[i].classList.remove("active");
  }
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
}
let slideIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  slideIndex += direction;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const translateX = slideIndex * -100;
  slides.style.transform = `translateX(${translateX}%)`;
}

// Auto slide functionality (optional)
//setInterval(() => {
//  changeSlide(1);
//}, 5000); // Change slide every 5 seconds
