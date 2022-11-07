"use strict";

import LocomotiveScroll from 'locomotive-scroll';
import { RetrowaveScene } from "../retrowave_scene.js";

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: false
});

document.addEventListener("DOMContentLoaded", loadComplete);

function loadComplete() {
	let retrowaveScene = new RetrowaveScene('');

	retrowaveScene.prepareScene(true, true);
}




(() => {

    const button = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const header = document.getElementById("heading");
    const title = document.getElementById("title")
    const hand = document.getElementById("wavingHand")
    const navigateProjects = document.getElementsByClassName("navigateProjects")
    const projects = document.getElementById("projectCards")
    const projectsLink = document.getElementById("projectsLink")

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

      window.addEventListener("scroll", () => {

        header.classList.toggle("scrolled", window.pageYOffset >= 200)
        title.classList.toggle("scrolled2", window.pageYOffset >= 200)
        hand.classList.toggle("wave", window.pageYOffset >= 200)

        for(let i = 0; i < 3; i++){
          button.children[i].classList.toggle("scrolled3", window.pageYOffset >= 200)
        }

        for(let i = 0;i < 5; i++){
          menu.children[i].children[0].classList.toggle("scrolled4", window.pageYOffset >= 200)
        }

        menu.children[2].classList.toggle("scrolled4", window.pageYOffset >= 200)

        for(let i = 0;i < document.getElementsByClassName("icon").length;i++){
          document.getElementsByClassName("icon")[i].classList.toggle("scrolled2", window.pageYOffset >= 200);
        }

        
      })

      let mode = false

      darkModeCheck.addEventListener("click", () => {
        document.getElementsByTagName("body")[0].style.transition =
          "all ease-in 0s";
        document.getElementsByTagName("header")[0].style.transition =
          "all ease-in 0.2s";
    
        if (!mode) {
          document.documentElement.style.setProperty("--white", "#272727");
          document.documentElement.style.setProperty("--black", "#ffffff");
          document.documentElement.style.setProperty("--gray", "#ffffff");
          mode = true
        } else {
          document.documentElement.style.setProperty("--white", "#ffffff");
          document.documentElement.style.setProperty("--black", "#272727");
          document.documentElement.style.setProperty("--gray", "#3a3a3a");
          
          mode = false
          
        }
      });

      navigateProjects[0].addEventListener("click", () => {
        scroll.scrollTo(projects, {
          offset: -80,
        });
      })

      projectsLink.addEventListener("click", () => {
        scroll.scrollTo(projects, {
          offset: -80,
        });

        console.log("click")
      })

      
})()