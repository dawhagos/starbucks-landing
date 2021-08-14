const imgSlider = (anything) => {
  document.querySelector(".starbucks").src = anything;
};

const changeCircleColor = (color) => {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
};

const toggleMenu = () => {
  const hamburgerToggle = document.querySelector(".hamburger");
  const navigation = document.querySelector(".navigation");
  hamburgerToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};
