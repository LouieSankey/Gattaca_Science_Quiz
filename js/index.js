
//Question # is derived from slide #, so current question will be slideNumber - 1 after the initial slide is shown
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

              //handles restarting the quiz after the final results slide is displayed
                case slideNumber > STORE.length:
                  startQuiz()
                break;

              default:
                showAnswerOrRenderNext()
                break;
            }
     }
    );
  }

function showAnswerOrRenderNext() {

//if the answer isn't shown from the previous question, this will show the answer
  if (!$('#answer').length) {
    let selectedInputHtml = $("input[name=options]:checked");
    if(selectedInputHtml.val()){
      showCorrectAnswer(selectedInputHtml); 
    }else{
      //or alert the user to make a selection if none has been made
      /*  TODO: style alert */
      alert("Choose an option");
      return;
    }
  }
  //if the previous answer is shown, this will render the next question
  else{
    renderNextSlide();
    updateSlideNumber();
    
  }
}

function showCorrectAnswer(selectedInputHtml){

  //show the answer if it is correct 
  let answer = STORE[slideNumber - 1].answer; 
  let explaination = STORE[slideNumber - 1].explaination; 

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
   $('.submit-button').text('Next');   
}

function renderNextSlide(){
 
  //renders all the slides the are before the results slide
    if(slideNumber < STORE.length){
      let question = STORE[slideNumber]
      displayQuestionHtml(question);
      $('.submit-button').text('Validate')
    }
    //renders the results slide
    else{
      
if(score >= STORE.length - 2){
  const won = {
    message: "Congratulations, you're going to Titan!",
    imgAlt: "A picture of the main character Vincent as he prepares to board a rocketship",
    img: "results-won.jpeg"
  }
  displayResultsHtml(won);
}else{
  const lost = {
    message: "The mission director caught you, better luck next time!",
    imgAlt: "A picture of the main character Vincent looking concerned",
    img: "results-lost.jpeg"
  }
  displayResultsHtml(lost);
}



      
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
    showNextSlide();
    displayScoreHtml();
  }

  initializeApp();

  