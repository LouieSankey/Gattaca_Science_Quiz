
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