
//Question # is derived from slide #, so current question will be slideNumber - 1 after the initial slide is shown
let slideNumber = 0;
let score = 0;

function launch() {
  $('.inner-box').on('click', '#launch-button', function(event){
    event.preventDefault();
    renderNextSlide()
    updateSlideNumber()
  })
}

function next() {
  $('.inner-box').on('click', '#next-button', function(event){
    event.preventDefault()
    renderNextSlide()
    updateSlideNumber()
});
}

function showAnswer() {
  $('.inner-box').on('click', '#answer-button', function(event){
    event.preventDefault();

    let selectedInputHtml = $("input[name=options]:checked");
    if(selectedInputHtml.val()){
      showCorrectAnswer(selectedInputHtml); 
    }else{
      
      alert("Choose an option");
      return;
    }

});
}

function restart() {
  $('.inner-box').on('click', '#restart-button', function(event){
    event.preventDefault();
    startQuiz();
});
}

function showCorrectAnswer(selectedInputHtml){

  let answer = STORE[slideNumber - 1].answer; 
  let explaination = STORE[slideNumber - 1].explaination; 

  //show the answer if it is correct 
  if(selectedInputHtml.val() === answer){
    let correctAnswerId = '#' + selectedInputHtml.attr('id'); 
    correctAnswerHtml(correctAnswerId, explaination)
    updateScore();
   }
   //show the answer if it is incorrect
   else{
    let correctAnswerId = '#' + selectedInputHtml.attr('id');  
    incorrectAnswerHtml(correctAnswerId, explaination)
   }

   $('#answer-button').text('Next').attr("id", "next-button");

}

function renderNextSlide(){

  if(slideNumber < STORE.length){
      let question = STORE[slideNumber]
      displayQuestionHtml(question);
  }else{  
  
    showWinOrLoose();
  }

}

function showWinOrLoose() {
  if (score >= STORE.length - 2) {
    const won = {
      message: "Congratulations, you're going to Titan!",
      imgAlt: "A picture of the main character Vincent as he prepares to board a rocketship",
      img: "results-won.jpeg"
    };
    displayResultsHtml(won);
  }
  else {
    const lost = {
      message: "The mission director caught you, better luck next time!",
      imgAlt: "A picture of the main character Vincent looking concerned",
      img: "results-lost.jpeg"
    };
    displayResultsHtml(lost);
  }
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
    launch();
    showAnswer()
    next()
    restart()
  
  }

  initializeApp();

  