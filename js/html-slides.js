
function correctAnswerHtml(correctAnswerId, explaination){
  $(correctAnswerId).next().after(`<div id="answer-box-correct">
  <p id="answer">${explaination}</p>
  <img class="validate-image" src="img/valid.jpeg" alt="A Gattaca badge showing a 'valid' employee"/>
  </div>
  
  `)
    
}

function incorrectAnswerHtml(correctAnswerId, explaination){
  $(correctAnswerId).next().after(`<div id="answer-box-incorrect">
  <p id="answer">${explaination}</p>
  <img class="validate-image" src="img/invalid.png" alt="A Gattaca badge showing an 'in-valid' employee"/>
  </div>
  `)
 }


function displayInitialHtml(){
    const initialHtml = $(`<img src="img/launch.png" alt="A photo of the three main characters from Gattaca, with a DNA helix between them." class="intro-image">
    <form>
    <button class="submit-button" type="submit">Launch!</button>
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
  
  function displayResultsHtml(result){
    const resultsHtml = $(`
    <section id="results-screen">
      <h1>Results</h1>
      <p>You scored: ${score}/${STORE.length}</p>
      <img class="results-image" src="img/${result.img}" alt="${result.imgAlt}"/>
      <p>${result.message}</p>
      <form>
        <button class="submit-button" type="submit">Restart</button>
      </form>
    </section>`);

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