const burgerToggler = document.querySelector(".header__burger");
const navigation = document.querySelector(".header__nav");

burgerToggler.addEventListener("click", function () {
  if (!burgerToggler.classList.contains("header__burger--opened")) {
    burgerToggler.classList.add("header__burger--opened");
    navigation.classList.add("header__nav--opened");
  } else {
    burgerToggler.classList.remove("header__burger--opened");
    navigation.classList.add("header__nav--closing");
  }
});

navigation.addEventListener("animationend", function (evt) {
  if (evt.animationName === "nav-close") {
    navigation.classList.remove("header__nav--opened");
    navigation.classList.remove("header__nav--closing");
  }
});