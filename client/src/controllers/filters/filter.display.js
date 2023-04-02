const chekMenu = () => {
  const menu = document.querySelector("#burger");
  const filters = document.querySelector("#filter-container");
  let main = document.querySelector("main");
  let intervalId, currentTranslateY;

  menu.addEventListener("click", () => {
    if (menu.classList.contains("closed")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  main.addEventListener("click", () => {
    if (menu.classList.contains("open")) {
      closeMenu();
      menu.checked = false;
    }
  });

  function openMenu() {
    currentTranslateY = -100;
    menu.classList.remove("closed");
    menu.classList.add("open");
    menu.disabled = true;

    main.classList.add("open-menu");

    intervalId = setInterval(function () {
      currentTranslateY += 1;

      if (currentTranslateY < 0) {
        filters.style.transform = `translateY(${currentTranslateY}%)`;
      } else {
        clearInterval(intervalId);
        menu.disabled = false;
      }
    }, 1);
  }

  function closeMenu() {
    currentTranslateY = 0;
    menu.classList.remove("open");
    menu.classList.add("closed");
    menu.disabled = true;

    main.classList.remove("open-menu");

    intervalId = setInterval(function () {
      currentTranslateY -= 1;

      if (currentTranslateY >= -100) {
        filters.style.transform = `translateY(${currentTranslateY}%)`;
      } else {
        clearInterval(intervalId);
        menu.disabled = false;
      }
    }, 1);
  }
};

export default chekMenu;
