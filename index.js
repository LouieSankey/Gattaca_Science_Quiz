

  const STORE = [
    {
      question: "In the movie Gattaca, a crewed rocket is sent into space to study the celestial body Titan. What is Titan?",
      options: [
        "Venus’s moon.",
        "One of Jupiter's moons.", 
        "One of Saturn's moons.",
        "An astroid named for its gigantic size"
      ],
      answer: "One of Saturn's moons."
    },
    {
      question: "Uma Thurman's character in Gattaca is named Irene Cassini. She shares the same last name with Italian astronomer, Giovanni Domenico Cassini who is responsible for what?	", 
      options: [
      "Being the first to observe Saturn through a telescope in 1610.", 
      "Developing the Cassini space probe that NASA sent to study Saturn in 1997", 
      // <!-- In 1997, NASA launched the Cassini space probe, 
      // bound for Saturn. It carried the Huygens space probe, 
      // which was dropped into Titan in early 2005, 
      // and discovered ground under the clouds. -->
      "Naming Saturn.", 
      "Discovering the gap between Saturn's main rings, as well as several of the planet's icy moons."],
      answer: "Discovering the gap between Saturn's main rings, as well as several of the planet's icy moons."
    },
    {
      question: "Public address announcements, in the Gattaca Corporation headquarters building, are in Esperanto. What is Esparanto?",
      options: [
        "A dialect of ancient Greece.", 
        "A deceptive form of English double speak that George Orwell invented in his book 1984.", 
        "An easy to learn artificial language invented in the nineteenth century to address cross cultural communication difficulties.", 
        "A futuristic type of espresso drink"
      ],
      answer: "An easy to learn artificial language invented in the nineteenth century to address cross cultural communication difficulties."
    },
    {
      question: "Which of the characters names comes from the greek word meaning ‘well born'?",
      options: [
        "Anton   ", 
        "Irene", 
        "Eugene", 
        "Vincent"
      ],
      answer: "Eugene"
    },
    {
      question: "GATTACA is spelled using four letters that stand for the four nitrogen bases of DNA.  Which of these is not one of the four bases?",
      options: [
        "Adenine (A)", 
        "Cytosine (C)", 
        "Taurine (T)", 
        "Guanine (G)"
      ],
      answer: "Taurine (T)"
    },
    {
      question: "Which of the following statements is true about the movie Gattaca?",
      options: [
        "NASA scientist voted Gattaca the most accurate sci-fi movie of all time.", 
        "The business plan of Gattaca Corporation in the movie closely resembles that of the real rocket company SpaceX today.", 
        "The movie features mostly electric cars, which didn’t exists and were only conjecture at the time of the movie's release in 1997.", 
        "All of the above."
      ],
      answer: "All of the above."
    }

  ]


let slideNumber = 0;
let score = 0;

//this handles every button click in the app
function showNextSlide() {
    $('.inner-box').on('click', '.submit-button', function(event){
       event.preventDefault();

            switch (true) {

              //handles the intial slide
              case slideNumber === 0:
                renderNextSlide()
                updateSlideNumber()
                break;

              //handles restarting the quiz after the 'results' are displayed
                case slideNumber === STORE.length + 1:
                  startQuiz()
                break;

                //handles the default
              default:
                showAnswerOrRenderNext()
                break;
            }

     }
    );
  }


function showAnswerOrRenderNext() {

//if the answer is shown from previous question, this will render the next question
  if ($('#answer-shown').length) {
    renderNextSlide();
    updateSlideNumber();
    
  }
  //if the answer is not shown, this will show it
  else {
    let selectedInputHtml = $("input[name=options]:checked");
    if(selectedInputHtml.val()){
      showCorrectAnswer(selectedInputHtml); 
    }else{
      alert("Choose an option");
      return;
    }
  }
}


function showCorrectAnswer(selectedInputHtml){
  //show answer if it is correct
  let answer = STORE[slideNumber - 1].answer;

  if(selectedInputHtml.val() === answer){
    let correctAnswerId = '#' + selectedInputHtml.attr('id');    
    $(correctAnswerId).next().after('<p id="answer-shown">This is the correct answer</p>')
    updateScore();
   }
   //show if it is incorrect
   else{
    let correctAnswerId = '#' + selectedInputHtml.attr('id');    
    $(correctAnswerId).next().after(`<p id="answer-shown">That's inccorect. The correct answer is: ${answer}</p>`)
   }

   $('.submit-button').text('next')   
}

function renderNextSlide(){
 
  //renders the default 
    if(slideNumber < STORE.length){

      let question = STORE[slideNumber]
      displayQuestionHtml(question);
      $('.submit-button').text('submit')
    }
    //handles rendering the final results slide
    else{
      displayResultsHtml();
    }
  }


function displayInitialHtml(){
  const initialHtml = $(`<img src="img/title.png" alt="a photo of the move gattaca" class="title-image">
  <legend>Science of the Movie Quiz</legend>
  <form>
  <button class="submit-button" type="submit"> Begin</button>
  </form>`);
  $('.inner-box').find('span').html(initialHtml)
}

function displayScoreHtml(){

  if(slideNumber <= STORE.length){
    const html = $(`<ul>
    <li id="js-answered">Question Number: ${slideNumber}/${STORE.length}</li>
    <li id="js-score">Score: ${score}/${STORE.length}</li>
    </ul>`);
    $(".question-and-score").html(html)
  }
}

function displayResultsHtml(){
  const resultsHtml = $(`
  <Sectuib>Results</section>
  <p>You scored: ${score}/${STORE.length}</p>
  <form>
  <button class="submit-button" type="submit">Restart</button>
  </form>`);
  $('.inner-box').find('span').html(resultsHtml);
}

function displayQuestionHtml(question){
  let questionHtml = $(`
  <form>
      <fieldset>
          <legend>${question.question}</legend>
          <label>
              <input type="radio" id="js-id${0}" name="options" value="${question.options[0]}">
              <span>${question.options[0]}</span>
          </label>
          <label>
              <input type="radio" id="js-id${1}" name="options" value="${question.options[1]}">
              <span>${question.options[1]}</span>
          </label>
          <label>
              <input type="radio" id="js-id${2}" name="options" value="${question.options[2]}">
              <span>${question.options[2]}</span>
          </label>
          <label>
              <input type="radio" id="js-id${3}" name="options" value="${question.options[3]}">
              <span>${question.options[3]}</span>
          </label>
          <button type="submit" class="submit-button button"> Submit</button>
      </fieldset>
    </form>`)
  
    $('#render-area').html(questionHtml);
  
  }
  

  function startQuiz(){
    slideNumber = 0;
    score = 0;
    displayScoreHtml()
    displayInitialHtml()
  }

  function updateSlideNumber() {
    slideNumber++;
    displayScoreHtml()

  }

  function updateScore(){
    score++;
    displayScoreHtml()
  }



  function initializeApp(){
    startQuiz();
    showNextSlide();
    displayScoreHtml();
  }

  initializeApp();

  