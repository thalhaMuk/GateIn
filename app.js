//Navigation Function
const navSlide = () => {
  const burger = document.querySelector(".banner__burger");
  const nav = document.querySelector(".banner__navLinks");
  const navLinks = document.querySelectorAll(".banner__navLinks li");

  //toggleNav
  burger.addEventListener("click", () => {
    nav.classList.toggle("banner__navLinks_active");
  });
  //Animate navLinks
  navLinks.forEach((link, index) => {
    link.style.animation = `navLinksFade 0.5s ease forwards ${
      index / 5 + 1.3
    }s`;
  });
};

navSlide();
