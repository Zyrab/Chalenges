      // array for correct answers
      var correctAnswers = [] 
      // array for selected answers
      var selectedAnswers = [] 

      var selectedAnswersValue = [] 
  // this function will create and uppend new question to html. it fetches questions from json file
  function displayNewQuestion(){
    // to get content of json file with quiz content
    fetch('quiz.json')
    .then(response => response.json())
    .then(quizQuestions => {
  // Process the JSON data here
    //selecting div where questions will be displayed
    var QuestionDiv = document.getElementById('quizQuestion')
    //creating array of displayed questions
    var displayedQuestions = []
    // loops through json file and gets 10 questions randomly. 
    for ( i = 1 ; i <= 10 ; i++ ){
      //to get randomquestion from json file
      let randomIndex = Math.floor(Math.random() * quizQuestions.length);
      // variable for random question
      let random = quizQuestions[randomIndex]
      // to create p element wich we will add to html with quix question text
      let question = document.createElement('p')
      //this is to get questions from selected topics and avoid reapiting them. 
      if  (selectedTopics.includes(random.topic) && !displayedQuestions.includes(random)) {  
        //here we add to the p element - text , id , class , and if question id matches 101, wich means this is first question it adds display block, other 9 question get display none.
        question.textContent = random.question 
        question.id = '10' + i
        question.classList = 'quizQuestions'
        question.style.display = [`${question.id === '101' ? 'block' : 'none'}`]
        QuestionDiv.appendChild(question)
        // function to randomise answers each time they are displayed.
        randomiseAnswers (random.answers , question.id , random.answers[random.correctAnswer] )
        displayedQuestions.push(random)
      } else {
        // this will decrement i to in case if - if statment didnt match . to try again and display all 10 questions.
        i--
      }
    }

    selectingAnswer(1)        
  })
  .catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching JSON:', error);
  });
}


// this function shaufless answers each time they are displayed again. it gets 4 probable answers, id , and correct answer.
function randomiseAnswers (answers , id , correctAnswer) {
  // div where answers will be dispplayed
  var answerDiv = document.getElementById('variants')
  // this loop shaulefs answers
  for (let i = answers.length - 1; i >= 0; i--) {
    // using destructuring we set answer i to be equal to answer j
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];   
    // creates an button sets its id, text , class, classlist - to use for adding selected class, and displays first questions answers.
    let button = document.createElement('button')
    button.id = id  + i
    button.innerText = answers[i]
    button.classList = 'variant'
    button.classList.add('v'+id.substring(2,4))
    button.style.display = button.id.slice(0, -1) === '101' ? 'block' : 'none';
    answerDiv.appendChild(button)
  }
    // pushes corectanswers to count corected select answers later
    correctAnswers.push(correctAnswer)
  }
  
  // this function gets current questions position and based on that information makes possible to select answer varinats.
  function selectingAnswer(id) {
  // seleects all 4 answers based on curent location. loops through all 4 answers and sets eventlisener on them.
  const buttons = document.querySelectorAll(`.v${id}`);
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // removes selected class from all 4 buttons whenever one of them is clicked and sets selected class on the one that waas clicked
      buttons.forEach(btn =>{ btn.classList.remove('selected')
    })
      button.classList.add('selected')
      selectedAnswersValue[id-1] = button.textContent
      //pushe if answer is correct 1 and 0 if it isnt to an array. to later count correct answers.
      selectedAnswers[id-1] = correctAnswers[id-1] === button.textContent ? '1' : '0'
    })        
  })
}

