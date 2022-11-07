"use strict";
exports.__esModule = true;
var Typewriter_1 = require("./Typewriter");
var typewriterWelcome = new Typewriter_1["default"](document.querySelector(".welcome"), {
    loop: false,
    typingSpeed: 100,
    deletingSpeed: 100
});
var typewriterPF = new Typewriter_1["default"](document.querySelector(".portfolio"), {
    loop: false,
    typingSpeed: 100,
    deletingSpeed: 100
});
var typewriterIntro = new Typewriter_1["default"](document.querySelector(".introP"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
//   typewriter1
//   .typeString("Where do I start?")
//   .pauseFor(1000)
//   .typeString("\n\nfunctio")
//   .deleteChars(7)
//   .typeString("const temp")
//   .pauseFor(150)
//   .deleteAll(10)
//   .typeString("Why is this so hard?")
//   .pauseFor(1000)
//   .typeString("\n\nDoes everyone struggle this much?")
//   .pauseFor(1000)
//   .typeString("\n\nThere has to be an easier way")
//   .pauseFor(1000)
//   .deleteAll(10)
//   .start()
var introTyped = false;
window.addEventListener("scroll", function () {
    if (window.pageYOffset >= 300) {
        if (!introTyped) {
            typewriterWelcome
                .typeString("Welcome")
                .pauseFor(500)
                .typeString(" to my port")
                .deleteChars(4)
                .start();
            typewriterPF
                .pauseFor(500)
                .typeString("Portfolio")
                .start();
            typewriterIntro
                .pauseFor(1000)
                .typeString("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio quaerat nesciunt ut repellat, eius dolores at labore earum dolorum unde modi eos excepturi provident laudantium, delectus hic asperiores deleniti?")
                .start();
            introTyped = true;
        }
    }
});
