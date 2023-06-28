// constants
    const forEventListener = document.querySelector('body');
    const selectedTopics = [] ;

    forEventListener.addEventListener('click', e => {
        var eId = e.target.id
        var eText = e.target.innerText
        var eClass = e.target.className

        //console.log(selectedTopics)


        
        // this toggles topics window. by toggling classes
        if ( eId === 'topicButton' || eId === 'topicContent' || eId === 'topicContentClose'){
            var userName = document.getElementById('name')
            var nameDiv = document.getElementById('nameDiv')

            if ( userName.value ===''){
                nameDiv.style.background = 'red'
                userName.style.background = 'red'
            } else {
                ToggleClassList('topicContent' , 'displayed')
                nameDiv.style.background = '#F2F2F2'
                userName.style.background = '#F2F2F2'
            }
        }

        // this togels classes for selected topics
        if ( eClass === 'topicList') {
            var spanId = eId+'Close'
            ToggleClassList(spanId , 'displayed')
            ToggleClassList(eId , 'topicSelected')
            selectedTopics.push(eText)
        }

        //this is to remove selection for topics
        if ( eClass === 'material-symbols-outlined displayed') {
            var pId = eId.slice(0 , -5)
            var topicToRemove = pId
            ToggleClassList(eId , 'displayed')
            ToggleClassList(pId , 'topicSelected')
            var index = selectedTopics.findIndex(function(topic) {
                return topic === topicToRemove;
            });
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


// // this function will create and uppend new question to html
//     function displayNewQuestion(text , id ){
//         minusId = id - 1
//         plusId = id + 1
//         var QuestionDiv = document.getElementById('quizQuestion')
//         var question = document.createElement('p')
//         question.id = '10' + id

//         noTodisplay = '10' + minusId
//         question.textContent = text 
//         QuestionDiv.appendChild(question)
//         console.log(minusId)
//         console.log(id)
//         ToggleClassList(question.id, 'displayed')
//         ToggleClassList(noTodisplay, 'unDisplayed')
      
//     }