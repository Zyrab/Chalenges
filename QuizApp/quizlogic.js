const question = document.getElementById('quizQuestion')
const variants = document.getElementById('variants')
const nextQuestionbtn = document.getElementById('next')
var counter = 0
var selectedAnswers = []
fetch('quiz.json')
  .then(response => response.json())
  .then(quizQuestions => {
    // Process the JSON data here

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * quizQuestions.length);
    question.innerText = quizQuestions[randomIndex].question



    nextQuestionbtn.addEventListener( 'click' , nextQuestion)
    randomiseAnswers(quizQuestions[randomIndex].answers , quizQuestions[randomIndex].answers[quizQuestions[randomIndex].correctAnswer]);
})
.catch(error => {
    // Handle any errors that occur during the fetch
    console.error('Error fetching JSON:', error);
  });


function randomiseAnswers (answers, correctAnswer) {
    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    
    var btn1 = document.getElementById('btn-1').innerText = answers[0]
    var btn2 = document.getElementById('btn-2').innerText = answers[1]
    var btn3 = document.getElementById('btn-3').innerText = answers[2]
    var btn4 = document.getElementById('btn-4').innerText = answers[3]
    selectingAnswer()
  }

  function selectingAnswer() {

    variants.addEventListener('click' , e =>{
        if (e.target.id !== 'variants'){
            e.target.classList.toggle('selected')            
        }
    })
  }

  function nextQuestion () {
    
  }