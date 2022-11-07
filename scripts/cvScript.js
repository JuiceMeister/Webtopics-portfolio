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

  function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/CV";
  }

  function setCookieHome(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    
      let c = ca[0];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    
    return "";
  }

  function checkCookie() {
    let mode = getCookie("darkMode");
    if (mode === "") {
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty("--black", "#272727");
      document.documentElement.style.setProperty("--gray", "#3a3a3a");

      darkModeCheckBox.checked = false;

      setCookie("darkMode", "false");
      setCookieHome("darkMode", "false");
    } else if (mode === "false") {
      document.documentElement.style.setProperty("--white", "#ffffff");
      document.documentElement.style.setProperty("--black", "#272727");
      document.documentElement.style.setProperty("--gray", "#3a3a3a");

      darkModeCheckBox.checked = false;
    } else if (mode === "true") {
      document.documentElement.style.setProperty("--white", "#272727");
      document.documentElement.style.setProperty("--black", "#ffffff");
      document.documentElement.style.setProperty("--gray", "#ffffff");

      darkModeCheckBox.checked = true;
    }
  }

  window.addEventListener("onload", checkCookie());

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

  // let mode = false;

  darkModeCheck.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.transition =
      "all ease-in 0s";
    document.getElementsByTagName("header")[0].style.transition =
      "all ease-in 0s";

      let mode = getCookie("darkMode");
      if (mode === "false") {
        document.documentElement.style.setProperty("--white", "#272727");
        document.documentElement.style.setProperty("--black", "#ffffff");
        document.documentElement.style.setProperty("--gray", "#ffffff");
        setCookie("darkMode", "true");
        setCookieHome("darkMode", "true");
      } else {
        document.documentElement.style.setProperty("--white", "#ffffff");
        document.documentElement.style.setProperty("--black", "#272727");
        document.documentElement.style.setProperty("--gray", "#3a3a3a");
  
        setCookie("darkMode", "false");
        setCookieHome("darkMode", "false");
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
