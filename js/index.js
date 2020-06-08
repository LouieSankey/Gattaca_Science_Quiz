

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

              //handles restarting the quiz after the results slide is displayed
                case slideNumber > STORE.length:
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

//this will show the answer 
  if (!$('#answer').length) {
    let selectedInputHtml = $("input[name=options]:checked");
    if(selectedInputHtml.val()){
      showCorrectAnswer(selectedInputHtml); 
    }else{
      //or alert the user to make a selection
      alert("Choose an option");
      return;
    }
  }
  //if the answer is already shown from previous question, this will render the next question
  else{
    renderNextSlide();
    updateSlideNumber();
    
  }
}

function showCorrectAnswer(selectedInputHtml){
  //show the answer if it is correct 
  //(slideNumber - 1 because slides is incremented from initil slide) 
  let answer = STORE[slideNumber - 1].answer; 

  if(selectedInputHtml.val() === answer){
    let correctAnswerId = '#' + selectedInputHtml.attr('id');    
    $(correctAnswerId).next().after('<p id="answer">This is the correct answer</p>')
    updateScore();
   }
   //show the answer if it is incorrect
   else{
    let correctAnswerId = '#' + selectedInputHtml.attr('id');    
    $(correctAnswerId).next().after(
      `<p id="answer">That's inccorect. The correct answer is: ${answer}</p>`)
   }

   $('.submit-button').text('next');   
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

  