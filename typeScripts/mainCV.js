"use strict";
exports.__esModule = true;
var Typewriter_1 = require("./Typewriter");
var education = document.getElementById("education");
var skills = document.getElementById("skills");
var exp = document.getElementById("experience");
var awards = document.getElementById("awards");
var options = document.getElementsByClassName("option");
var listings = document.getElementsByClassName("resList");
var typewriterTitle = new Typewriter_1["default"](document.querySelector(".resumeTitle"), {
    loop: false,
    typingSpeed: 100,
    deletingSpeed: 100
});
var typewriterIntro = new Typewriter_1["default"](document.querySelector(".resumeIntro"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan1 = new Typewriter_1["default"](document.querySelector(".resSpan1"), {
    loop: false,
    typingSpeed: 50,
    deletingSpeed: 100
});
var typewriterSpan2 = new Typewriter_1["default"](document.querySelector(".resSpan2"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan3 = new Typewriter_1["default"](document.querySelector(".resSpan3"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterSpan4 = new Typewriter_1["default"](document.querySelector(".resSpan4"), {
    loop: false,
    typingSpeed: 20,
    deletingSpeed: 100
});
var typewriterP1 = new Typewriter_1["default"](document.querySelector(".resP1"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP2 = new Typewriter_1["default"](document.querySelector(".resP2"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP3 = new Typewriter_1["default"](document.querySelector(".resP3"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
var typewriterP4 = new Typewriter_1["default"](document.querySelector(".resP4"), {
    loop: false,
    typingSpeed: 30,
    deletingSpeed: 40
});
typewriterTitle
    .typeString("Resume")
    .start();
typewriterIntro
    .typeString("Interact with the buttons...")
    .start();
var interact;
setTimeout(function () {
    interact = setInterval(function () {
        typewriterIntro
            .deleteChars(1)
            .pauseFor(500)
            .typeString(".")
            .start();
    }, 1000);
}, 500);
var timeout;
var click;
function clear() {
    typewriterSpan1
        .deleteAll()
        .start();
    typewriterSpan2
        .deleteAll()
        .start();
    typewriterSpan3
        .deleteAll()
        .start();
    typewriterSpan4
        .deleteAll()
        .start();
    typewriterP1
        .deleteAll()
        .start();
    typewriterP2
        .deleteAll()
        .start();
    typewriterP3
        .deleteAll()
        .start();
    typewriterP4
        .deleteAll()
        .start();
}
//EDUCATION
education.addEventListener("click", function () {
    clear();
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
    }
    timeout = setTimeout(function () {
        for (var i = 0; i < options.length; i++) {
            options[i].style.pointerEvents = "auto";
        }
    }, 6000);
    typewriterTitle
        .deleteAll()
        .start();
    typewriterIntro
        .deleteAll()
        .start();
    clearInterval(interact);
    typewriterTitle
        .deleteAll()
        .pauseFor(200)
        .typeString("Education")
        .start();
    typewriterSpan1
        .typeString("2006-2012:");
    typewriterP1
        .typeString("De Muse lagere")
        .deleteChars(4)
        .typeString("gere school Ghent")
        .deleteChars(4)
        .typeString("ent");
    typewriterSpan2
        .typeString("2006")
        .deleteChars(2)
        .typeString("12-2019:");
    typewriterP2
        .typeString("Koninklijk Atheneum Voskenslaan Gent")
        .typeString("\n\n")
        .typeString("- Economie Wetenschappen");
    typewriterSpan3
        .typeString("2019-2021:");
    typewriterP3
        .typeString("KU Leuven Gent")
        .typeString("\n")
        .typeString("- Architectuur");
    typewriterSpan4
        .typeString("2021-2024:");
    typewriterP4
        .typeString("Odissee Gent")
        .typeString("\n")
        .typeString("- Web Design");
});
//SKILLS
skills.addEventListener("click", function () {
    clear();
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
    }
    timeout = setTimeout(function () {
        for (var i = 0; i < options.length; i++) {
            options[i].style.pointerEvents = "auto";
        }
    }, 5000);
    typewriterTitle
        .deleteAll()
        .start();
    typewriterIntro
        .deleteAll()
        .start();
    clearInterval(interact);
    typewriterTitle
        .deleteAll()
        .pauseFor(200)
        .typeString("Skills")
        .start();
    typewriterSpan1
        .pauseFor(200)
        .typeString("Three.js:");
    typewriterP1
        .typeString("🥶 🥶 🥶");
    typewriterSpan2
        .pauseFor(400)
        .typeString("CSS")
        .deleteChars(3)
        .typeString("SCSS:");
    typewriterP2
        .typeString("🔥 🔥 🔥 🔥 🔥");
    typewriterSpan3
        .pauseFor(600)
        .typeString("TypeScript:");
    typewriterP3
        .typeString("🥶 🥶 🥶 🥶");
    typewriterSpan4
        .pauseFor(800)
        .typeString("Storybook:");
    typewriterP4
        .typeString("🔥 🔥 🔥");
});
//EXPERIENCE
exp.addEventListener("click", function () {
    clear();
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
    }
    timeout = setTimeout(function () {
        for (var i = 0; i < options.length; i++) {
            options[i].style.pointerEvents = "auto";
        }
    }, 5000);
    typewriterTitle
        .deleteAll()
        .start();
    typewriterIntro
        .deleteAll()
        .start();
    clearInterval(interact);
    typewriterTitle
        .deleteAll()
        .pauseFor(200)
        .typeString("Experience")
        .start();
});
//AWARDS
awards.addEventListener("click", function () {
    clear();
    clearTimeout(click);
    for (var i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
    }
    timeout = setTimeout(function () {
        for (var i = 0; i < options.length; i++) {
            options[i].style.pointerEvents = "auto";
        }
    }, 6000);
    typewriterTitle
        .deleteAll()
        .start();
    typewriterIntro
        .deleteAll()
        .start();
    clearInterval(interact);
    typewriterTitle
        .deleteAll()
        .pauseFor(200)
        .typeString("Awards")
        .start();
});
