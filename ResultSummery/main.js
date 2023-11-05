const calculate = document.getElementById('button')

const displaySummeryResults = () => {
        // to get content of json file with quiz content
        fetch('data.json')
        .then(response => response.json())
        .then(summeryResult => {
        let totalScore = 0
        var score = document.getElementById('score')
        var summeryDiv = document.getElementById('summeryDiv')
        // loops through json file and gets 10 questions randomly. 
        for ( i = 0 ; i < summeryResult.length ; i++ ){
            totalScore += summeryResult[i].score
        //   let question = document.createElement('p')
        //   //this is to get questions from selected topics and avoid reapiting them. 
        //   if  (selectedTopics.includes(random.topic) && !displayedQuestions.includes(random)) {  
        //     //here we add to the p element - text , id , class , and if question id matches 101, wich means this is first question it adds display block, other 9 question get display none.
        //     question.textContent = random.question 
        //     question.id = '10' + i
        //     question.classList = 'quizQuestions'
        //     question.style.display = [`${question.id === '101' ? 'block' : 'none'}`]
        //     QuestionDiv.appendChild(question)
        //     // function to randomise answers each time they are displayed.
        //     randomiseAnswers (random.answers , question.id , random.answers[random.correctAnswer] )
        //     displayedQuestions.push(random)
        //   } else {
        //     // this will decrement i to in case if - if statment didnt match . to try again and display all 10 questions.
        //     i--
        //   }
        }     
        score.innerText = Math.round(totalScore/ summeryResult.length)
      })
      .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error fetching JSON:', error);
      });
}
calculate.addEventListener('click' , (e) =>{
    displaySummeryResults()
} )