"use strict";

(() => {
  const button = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const header = document.getElementById("heading");
  const title = document.getElementById("title");
  const hand = document.getElementById("wavingHand");
  const options = document.getElementsByClassName("option");
  const listings = document.getElementsByClassName("resList")

  const darkModeCheck = document.getElementById("check");
  const darkModeCheckBox = document.querySelector("#darkModeCheckBox");
  let expanded = document.getElementById("menu").getAttribute("aria-expanded");

  let open = false;
  let timeOut1;
  let timeOut2;

  button.addEventListener("click", () => {
    clearTimeout(timeOut1);

    if (!open) {
      button.classList.add("open");
      open = true;
      expanded = "true";
      menu.style.display = "grid";
    } else {
      button.classList.remove("open");
      open = false;
      expanded = "false";

      timeOut1 = setTimeout(() => {
        menu.style.display = "none";
      }, 500);
    }

    if (timeOut2) {
      clearTimeout(timeOut2);
    }
    timeOut2 = setTimeout(() => {
      menu.setAttribute("aria-expanded", expanded);
    });
  });

  let mode = false;

  darkModeCheck.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.transition =
      "all ease-in 0s";
    document.getElementsByTagName("header")[0].style.transition =
      "all ease-in 0.2s";

    if (!mode) {
      document.documentElement.style.setProperty("--white", "#272727");
      document.documentElement.style.setProperty("--black", "#ffffff");
      document.documentElement.style.setProperty("--gray", "#ffffff");
      mode = true;
    } else {
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty("--black", "#272727");
      document.documentElement.style.setProperty("--gray", "#3a3a3a");

      mode = false;
    }
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      options[0].classList.add("popIn");
    }, 100);

    setTimeout(() => {
      options[1].classList.add("popIn");
    }, 200);

    setTimeout(() => {
      options[2].classList.add("popIn");
    }, 300);

    setTimeout(() => {
      options[3].classList.add("popIn");
    }, 400);

    setTimeout(() => {
      listings[0].classList.add("popIn2");
    }, 100);
  
    setTimeout(() => {
      listings[1].classList.add("popIn2");
    }, 200);
  
    setTimeout(() => {
      listings[2].classList.add("popIn2");
    }, 300);
  
    setTimeout(() => {
      listings[3].classList.add("popIn2");
    }, 400);

  });
 
  
})();
