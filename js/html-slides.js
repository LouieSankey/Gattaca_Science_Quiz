
function correctAnswerHtml(correctAnswerId, explaination){
  $(correctAnswerId).next().after(`<div id="answer-box-correct">
   <img class="validate-image" src="img/valid.jpeg" alt="A Gattaca badge showing a 'valid' employee"/>
  <p id="answer">${explaination}</p>
  </div>
`)
    
}

function incorrectAnswerHtml(correctAnswerId, explaination){
  $(correctAnswerId).next().after(`<div id="answer-box-incorrect">
  <img class="validate-image" src="img/invalid.png" alt="A Gattaca badge showing an 'in-valid' employee"/>
  <p id="answer">${explaination}</p>
  
  </div>
  `)
 }


function displayInitialHtml(){
    const initialHtml = $(`<img src="img/launch.png" alt="A launching rocketship with a helix as its exhaust." class="intro-image">
    <form>
    <button id="launch-button" class="main-button" type="submit">Launch!</button>
    </form>`);
    $('.inner-box').find('span').html(initialHtml)
  }
  
  function displayScoreHtml(){
  
    if(STORE.slideNumber <= STORE.questions.length){
      const html = $(`<ul>
      <li id="question-number">Question Number: ${STORE.slideNumber}/${STORE.questions.length}</li>
      <li id="score">Score: ${STORE.score}/${STORE.questions.length}</li>
      </ul>`);
      $(".question-and-score").html(html)
    }
  }
  
  function displayResultsHtml(result){
    const resultsHtml = $(`
    <section id="results-screen">
      <h1>Results</h1>
      <p>You scored: ${STORE.score}/${STORE.questions.length}</p>
      <img class="results-image" src="img/${result.img}" alt="${result.imgAlt}"/>
      <p>${result.message}</p>
      <form>
        <button id="restart-button" class="main-button"  type="submit">Restart</button>
      </form>
    </section>`);

    $('.inner-box').find('span').html(resultsHtml);
  }


  function displayQuestionHtml(question){
    let questionHtml = $(`
    <form>
        <fieldset>
            <legend>${question.question}</legend>
            <div id="select-input"></div>
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
            <button type="submit" id="answer-button" class="main-button">Answer</button>
        </fieldset>
      </form>`)
    
      $('#render-area').html(questionHtml);
    
    }