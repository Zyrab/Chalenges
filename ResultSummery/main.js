
const displaySummeryResults = () => {
        // to get content of json file with quiz content
        fetch('data.json')
        .then(response => response.json())
        .then(summeryResults => {
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