function burgerHeader() {
  const burger = document.querySelector(".b-nav-list__burger");
  const menu = document.querySelector(".b-nav-list");
  const body = document.querySelector("body");
  const links = document.querySelectorAll(".b-nav-list__item");

  function turnOnBurger() {
    menu.classList.add("b-nav-list_active");
    burger.classList.add("b-nav-list__burger_active");
    body.classList.add("b-page_locked");
  }
  function turnOffBurger() {
    menu.classList.remove("b-nav-list_active");
    burger.classList.remove("b-nav-list__burger_active");
    body.classList.remove("b-page_locked");
  }

  function burgerMenu() {
    burger.addEventListener("click", () => {
      if (!menu.classList.contains("b-nav-list_active")) {
        turnOnBurger();
      } else {
        turnOffBurger();
      }
      links.forEach((el) => {
        el.addEventListener("click", () => {
          turnOffBurger();
        });
      });
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        turnOffBurger();
      }
    });
  }
  burgerMenu();
}
export default burgerHeader;
