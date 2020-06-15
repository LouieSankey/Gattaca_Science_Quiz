//Question # is derived from slide #, so current question will be slideNumber - 1 after the initial slide is shown

const STORE = {
   slideNumber : 0,
   score : 0,
  questions : [
  {
    question: "In the movie Gattaca, a crewed rocket is sent into space to study the celestial body Titan. What is Titan?",
    options: [
      "a. Venus’s moon.",
      "b. One of Jupiter's moons.", 
      "c. One of Saturn's moons.",
      "d. An astroid named for its gigantic size"
    ],
    answer: "c. One of Saturn's moons.",
    explaination: "The correct answer is c. Titan is Saturn's 6th and largest moon. It's also known to have liquid rivers, lakes and oceans on its surface."
  },
  {
    question: "Uma Thurman's character in Gattaca is named Irene Cassini. She shares the same last name with Italian astronomer, Giovanni Domenico Cassini who is responsible for what?	", 
    options: [
    "a. Being the first to observe Saturn through a telescope in 1610.", 
    "b. Developing the Cassini space probe that NASA sent to study Saturn in 1997", 
    // <!-- In 1997, NASA launched the Cassini space probe, 
    // bound for Saturn. It carried the Huygens space probe, 
    // which was dropped into Titan in early 2005, 
    // and discovered ground under the clouds. -->
    "c. Naming Saturn.", 
    "d. Discovering the gap between Saturn's main rings, as well as several of the planet's icy moons."],
    answer: "d. Discovering the gap between Saturn's main rings, as well as several of the planet's icy moons.",
    explaination: "The correct answer is d. Galileo was the first to observe Saturn through a telescope. and it's named after the Roman god of agriculture."
  },
  {
    question: "Public address announcements, in the Gattaca Corporation headquarters building, are in Esperanto. What is Esparanto?",
    options: [
      "a. A dialect of ancient Greece.", 
      "b. A deceptive form of English double speak that George Orwell invented in his book 1984.", 
      "c. An easy to learn artificial language invented in the nineteenth century to address cross cultural communication difficulties.", 
      "d. A futuristic type of espresso drink"
    ],
    answer: "c. An easy to learn artificial language invented in the nineteenth century to address cross cultural communication difficulties.",
    explaination: "The correct answer is c. Esperanto was invented in 1887 by L.L. Zamenhof, a Polish optometrist"
  },
  {
    question: "Which of the characters names comes from the greek word meaning ‘well born'?",
    options: [
      "a. Eugene",  
      "b. Anton   ", 
      "c. Irene", 
      "d. Vincent"
    ],
    answer: "a. Eugene",
    explaination: "The correct answer is a. 'Eu' from the root word good, like Euthanasia (good death), & 'gene' from root word birth like genus/species."
  },
  {
    question: "GATTACA is spelled using four letters that stand for the four elements of DNA.  Which of these is not one of the four elements?",
    options: [
      "a. Adenine (A)", 
      "b. Cytosine (C)", 
      "c. Taurine (T)", 
      "d. Guanine (G)"
    ],
    answer: "c. Taurine (T)",
    explaination: "The correct answer is c. Taurine is an ingredient in energy drinks. Thymine is the fourth element that stands for T."
  },
  {
    question: "Which of the following statements is true?",
    options: [
      "a. NASA scientists voted Gattaca the most accurate sci-fi movie of all time.", 
      "b. The business plan of Gattaca Corporation in the movie closely resembles that of the real rocket company SpaceX today.", 
      "c. The movie features mostly electric cars, which didn’t exists and were only conjecture at the time of the movie's release in 1997.", 
      "d. All of the above."
    ],
    answer: "d. All of the above.",
    explaination: "The correct answer is d. All of the above are true."
  }

]
}

