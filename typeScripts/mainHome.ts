import Typewriter from "./Typewriter"

const typewriterWelcome = new Typewriter(
  document.querySelector(".welcome") as HTMLDivElement,
  {
    loop: false,
    typingSpeed: 100,
    deletingSpeed: 100,
  }
)

const typewriterPF = new Typewriter(
    document.querySelector(".portfolio") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 100,
      deletingSpeed: 100,
    }
  )

  const typewriterIntro = new Typewriter(
    document.querySelector(".introP") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 20,
      deletingSpeed: 100,
    }
  )

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

let introTyped : boolean = false

window.addEventListener("scroll", () => {
    if(window.pageYOffset >= 300){
        if(!introTyped){
    typewriterWelcome
    .typeString("Welcome")
    .pauseFor(500)
    .typeString(" to my port")
    .deleteChars(4)
    .start()

    typewriterPF
    .pauseFor(500)
    .typeString("Portfolio")
    .start()

    typewriterIntro
    .pauseFor(1000)
    .typeString("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui odio quaerat nesciunt ut repellat, eius dolores at labore earum dolorum unde modi eos excepturi provident laudantium, delectus hic asperiores deleniti?")
    .start()

    introTyped = true;
    }
}
})