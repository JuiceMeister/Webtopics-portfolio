import Typewriter from "./Typewriter"

const education = document.getElementById("education") as HTMLInputElement
const skills = document.getElementById("skills") as HTMLInputElement
const exp = document.getElementById("experience") as HTMLInputElement
const awards = document.getElementById("awards") as HTMLInputElement
const options = document.getElementsByClassName("option") as HTMLCollectionOf<HTMLElement>
const listings = document.getElementsByClassName("resList") as HTMLCollectionOf<HTMLElement>

  const typewriterTitle = new Typewriter(
    document.querySelector(".resumeTitle") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 100,
      deletingSpeed: 100,
    }
  )

  const typewriterIntro = new Typewriter(
    document.querySelector(".resumeIntro") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 20,
      deletingSpeed: 100,
    }
  )

  const typewriterSpan1 = new Typewriter(
    document.querySelector(".resSpan1") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 50,
      deletingSpeed: 100,
    }
  )

  const typewriterSpan2 = new Typewriter(
    document.querySelector(".resSpan2") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 20,
      deletingSpeed: 100,
    }
  )

  const typewriterSpan3 = new Typewriter(
    document.querySelector(".resSpan3") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 20,
      deletingSpeed: 100,
    }
  )

  const typewriterSpan4 = new Typewriter(
    document.querySelector(".resSpan4") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 20,
      deletingSpeed: 100,
    }
  )

  const typewriterP1 = new Typewriter(
    document.querySelector(".resP1") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 30,
      deletingSpeed: 40,
    }
  )

  const typewriterP2 = new Typewriter(
    document.querySelector(".resP2") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 30,
      deletingSpeed: 40,
    }
  )

  const typewriterP3 = new Typewriter(
    document.querySelector(".resP3") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 30,
      deletingSpeed: 40,
    }
  )

  const typewriterP4 = new Typewriter(
    document.querySelector(".resP4") as HTMLDivElement,
    {
      loop: false,
      typingSpeed: 30,
      deletingSpeed: 40,
    }
  )

typewriterTitle
    .typeString("Resume")
    .start()

typewriterIntro
    .typeString("Interact with the buttons...")
    .start()

let interact 

setTimeout(() => {
    interact = setInterval(() => {
      typewriterIntro
      .deleteChars(1)
      .pauseFor(500)
      .typeString(".")
      .start()
    }, 1000) 
}, 500)

let timeout
let click;


function clear(){
  typewriterSpan1
    .deleteAll()
    .start()

  typewriterSpan2
    .deleteAll()
    .start()

  typewriterSpan3
    .deleteAll()
    .start() 

  typewriterSpan4
    .deleteAll()
    .start()
    
  typewriterP1
    .deleteAll()
    .start()

  typewriterP2
    .deleteAll()
    .start()

  typewriterP3
    .deleteAll()
    .start() 

  typewriterP4
    .deleteAll()
    .start()     
}

//EDUCATION

education.addEventListener("click", () => {
  clear() 
  for(let i = 0;i < options.length; i++){
    options[i].style.pointerEvents = "none"
  }
  timeout = setTimeout(() => {
    for(let i = 0;i < options.length; i++){
      options[i].style.pointerEvents = "auto"
    }
  }, 6000)
  typewriterTitle
    .deleteAll()
    .start()
  typewriterIntro
    .deleteAll()
    .start()
  clearInterval(interact) 

  typewriterTitle
    .deleteAll()
    .pauseFor(200)
    .typeString("Education")
    .start()


  typewriterSpan1
    .typeString("2006-2012:")

  typewriterP1
    .typeString("De Muse elementary")  
    .deleteChars(4)
    .typeString("tary school Ghent")
    .deleteChars(4)
    .typeString("ent")

  typewriterSpan2
    .typeString("2006")
    .deleteChars(2)
    .typeString("12-2019:")

  typewriterP2
    .typeString("Koninklijk Atheneum Voskenslaan Gent")  
    .typeString("\n\n")
    .typeString("- Economie Wetenschappen")

  typewriterSpan3
    .typeString("2019-2021:")

  typewriterP3
    .typeString("KU Leuven Gent")  
    .typeString("\n")
    .typeString("- Architecture")

  typewriterSpan4
    .typeString("2021-2024:")

  typewriterP4
    .typeString("Odissee Gent")  
    .typeString("\n")
    .typeString("- Web Design")
  
})

//SKILLS

skills.addEventListener("click", () => {
  clear() 
  for(let i = 0;i < options.length; i++){
    options[i].style.pointerEvents = "none"
  }
  timeout = setTimeout(() => {
    for(let i = 0;i < options.length; i++){
      options[i].style.pointerEvents = "auto"
    }
  }, 5000)
  typewriterTitle
    .deleteAll()
    .start()
  typewriterIntro
    .deleteAll()
    .start()
  clearInterval(interact)  

  typewriterTitle
    .deleteAll()
    .pauseFor(200)
    .typeString("Skills")
    .start()

  typewriterSpan1
    .pauseFor(200)
    .typeString("Three.js:")

  typewriterP1
    .typeString("???? ???? ????")  

  typewriterSpan2
    .pauseFor(400)
    .typeString("CSS")
    .deleteChars(3)
    .typeString("SCSS:")

  typewriterP2
    .typeString("???? ???? ???? ???? ????")  

  typewriterSpan3
    .pauseFor(600)
    .typeString("TypeScript:")

  typewriterP3
    .typeString("???? ???? ???? ????")  

  typewriterSpan4
    .pauseFor(800)
    .typeString("Storybook:")

  typewriterP4
    .typeString("???? ???? ????")  
})

//EXPERIENCE

exp.addEventListener("click", () => {
  clear() 
  for(let i = 0;i < options.length; i++){
    options[i].style.pointerEvents = "none"
  }
  timeout = setTimeout(() => {
    for(let i = 0;i < options.length; i++){
      options[i].style.pointerEvents = "auto"
    }
  }, 6000)
  typewriterTitle
    .deleteAll()
    .start()
  typewriterIntro
    .deleteAll()
    .start()
  clearInterval(interact)  

  typewriterTitle
    .deleteAll()
    .pauseFor(200)
    .typeString("Experience")
    .start()

  typewriterSpan1
    .pauseFor(200)
    .typeString("Barman:")

  typewriterP1
    .typeString("Baracita")  

  typewriterSpan2
    .pauseFor(400)
    .typeString("Barman:")

  typewriterP2
    .typeString("Bowl Inn Sint-Martens-Latem")  

  typewriterSpan3
    .pauseFor(600)
    .typeString("Medewerker:")

  typewriterP3
    .typeString("Ramen & Peol")  

  typewriterSpan4
    .pauseFor(800)
    .typeString("Verkoopmedewerker:")

  typewriterP4
    .typeString("Bakkerij Aernoudt Sint Denijs") 
})

//AWARDS

awards.addEventListener("click", () => {
  clear() 
  clearTimeout(click)
  for(let i = 0;i < options.length; i++){
    options[i].style.pointerEvents = "none"
  }
  timeout = setTimeout(() => {
    for(let i = 0;i < options.length; i++){
      options[i].style.pointerEvents = "auto"
    }
  }, 6000)
  typewriterTitle
    .deleteAll()
    .start()
  typewriterIntro
    .deleteAll()
    .start()
  clearInterval(interact) 

  typewriterTitle
    .deleteAll()
    .pauseFor(200)
    .typeString("Awards")
    .start()

  typewriterSpan1
    .pauseFor(200)
    .typeString("Hackaton Gent:")

  typewriterP1
    .typeString("7th place ????")  

  typewriterSpan2
    .pauseFor(400)
    .typeString("Academy Award:(not really)")
    .deleteChars(11)

  typewriterP2
    .typeString("1996 best actor")  

  typewriterSpan3
    .pauseFor(600)
    .typeString("Best Son award:")

  typewriterP3
    .typeString("My mother gave it to me...")  

  typewriterSpan4
    .pauseFor(800)
    .typeString("Digitaal VLaanderen")

  typewriterP4
    .typeString("1st place") 

})

