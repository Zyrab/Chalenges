
      var correctAnswers = [] 
      var selectedAnswers = [] 
  // this function will create and uppend new question to html
  function displayNewQuestion(){
    fetch('quiz.json')
    .then(response => response.json())
    .then(quizQuestions => {
      // Process the JSON data here
      
    // Generate a random index
    //selecting div where questions will be displayed
    var QuestionDiv = document.getElementById('quizQuestion')
    var displayedQuestions = []
    for ( i = 1 ; i <= 10 ; i++ ){
      let randomIndex = Math.floor(Math.random() * quizQuestions.length);
      let random = quizQuestions[randomIndex]
      let question = document.createElement('p')
      if  (selectedTopics.includes(random.topic) && !displayedQuestions.includes(random)) {  
        question.textContent = random.question 
        question.id = '10' + i
        question.classList = 'quizQuestions'
        question.style.display = [`${question.id === '101' ? 'block' : 'none'}`]
        QuestionDiv.appendChild(question)
        randomiseAnswers (random.answers , question.id , random.answers[random.correctAnswer] )
        displayedQuestions.push(random)
      } else {
        i--
      }
    }
    selectingAnswer(1)        
    console.log(correctAnswers)
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching JSON:', error);
  });
}



function randomiseAnswers (answers , id , correctAnswer) {
  var answerDiv = document.getElementById('variants')
  for (let i = answers.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];   

    let button = document.createElement('button')
    button.id = id  + i
    button.innerText = answers[i]
    button.classList = 'variant'
    button.classList.add('v'+id.substring(2,4))
    button.style.display = button.id.slice(0, -1) === '101' ? 'block' : 'none';
    answerDiv.appendChild(button)
  }
    correctAnswers.push(correctAnswer)
    
  }
  
  
  function selectingAnswer(id) {
  const buttons = document.querySelectorAll(`.v${id}`);
  buttons.forEach(button => {
    button.addEventListener('click', () => {

      buttons.forEach(btn =>{ btn.classList.remove('selected')
    })
    button.classList.add('selected')
   // selectedAnswers[id-1] = button.textContent
    selectedAnswers[id-1] = correctAnswers[id-1] === button.textContent ? '1' : '0'
    })        
  })
}

