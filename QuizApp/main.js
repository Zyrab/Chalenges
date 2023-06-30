// constants
    const forEventListener = document.querySelector('body');
    const selectedTopics = [] ;

    forEventListener.addEventListener('click', e => {
        var eId = e.target.id
        var eText = e.target.innerText
        var eClass = e.target.className

        
        
        
        // this toggles topics window. by toggling classes
        if ( eId === 'topicButton' || eId === 'topicContent' || eId === 'topicContentClose'){
            var userName = document.getElementById('name')
            var nameDiv = document.getElementById('nameDiv')
            var displayName = document.getElementById('playerName')
            displayName.innerHTML = userName.value+' You Scored'
            if ( userName.value ===''){
                nameDiv.style.background = 'red'
                userName.style.background = 'red'
            } else {
                ToggleClassList('topicContent' , 'displayed')
                nameDiv.style.background = '#F2F2F2'
                userName.style.background = '#F2F2F2'
            }
        }
        
        // this togels classes for selected topics and pushes selected topic to an array
        if ( eClass === 'topicList') {
            var spanId = eId+'Close'
            ToggleClassList(spanId , 'displayed')
            ToggleClassList(eId , 'topicSelected')
            selectedTopics.push(eText)
        }
        
        //this is to remove selection for topics based on their id s and remove unselected topic from array
        if ( eClass === 'material-symbols-outlined displayed') {
            var pId = eId.slice(0 , -5)
            var topicToRemove = pId
            ToggleClassList(eId , 'displayed')
            ToggleClassList(pId , 'topicSelected')
            var index = selectedTopics.findIndex(function(topic) {
                return topic === topicToRemove;
            })
            if (index !== -1) {
                selectedTopics.splice(index, 1);
            }
        }
        
        //StartQuiz button . 
        
        if ( eId === 'quizStart' && selectedTopics.length >= 3 ){
            ToggleClassList('introduction', 'unDisplayed')
            ToggleClassList('quiz', 'displayed')
            ToggleClassList('topicContent', 'displayed')
            displayNewQuestion()
            
        }
    })
    

//Toggle classlis function
function ToggleClassList ( elementId , elementClassName) {
        var toggleClass = document.getElementById(elementId)
        toggleClass.classList.toggle(elementClassName)
    }
// this function is for the rateke quiz button, it reloads the page
function reloadPage() {
    location.reload();
}

// this function is to show correct answers after finishing quest
function showCorrectAnswers(){
    var answerDiv = document.getElementById('correctAnswers')
    for ( i = 0; i < correctAnswers.length ; i++ ) {;   
        let correctAnswer = document.createElement('P')
        correctAnswer.innerHTML = i+1+ ')' + correctAnswers[i]+ '</br>' + 'youre answer was: ' + selectedAnswersValue[i]
        correctAnswer.classList = 'correctAnswer'
        answerDiv.appendChild(correctAnswer)
        correctAnswers[i]!== selectedAnswersValue[i] ? correctAnswer.classList.add('wrong') : correctAnswer.classList.add('correct')
        
    }
}