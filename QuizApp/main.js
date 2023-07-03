// constants
    //with this constant we select hole body element to call an event listener on body.
    const forEventListener = document.querySelector('body');
    // we will use this array to push selected toppics in it and use them later for displaying them
    const selectedTopics = [] ;

    // we are calling event listener on body
    forEventListener.addEventListener('click', e => {
        // varieble for targeted elements id
        var eId = e.target.id
        // variable for targeted element inner text
        var eText = e.target.innerText
        // variable for elements classname
        var eClass = e.target.className

        
        
        
        // this toggles topics window. by toggling classes. with the if statment we target element with specific ids. 
        if ( eId === 'topicButton' || eId === 'topicContent' || eId === 'topicContentClose'){
            //first we make sure if name is entered. if it is not input will turn red and u wont progress to topic selection.
            // if it is entered u will progres to topic selection
            // to get input value
            var userName = document.getElementById('name')
            // to give red coloure to input div
            var nameDiv = document.getElementById('nameDiv')
            //to display player name after finishing the quiz
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
        
        // this togels classes for selected topics and pushes selected topic to an array. also makes close span visible. wich removes selection from topics
        if ( eClass === 'topicList') {

            //generates an id for span to target selected topic later for removing it from an array if close span is clicked
            var spanId = eId+'Close'
            ToggleClassList(spanId , 'displayed')
            ToggleClassList(eId , 'topicSelected')
            //pushes clicked topic to an array
            selectedTopics.push(eText)
        }
        
        //this is to remove selection for topics based on their id s and remove unselected topic from array.
        if ( eClass === 'material-symbols-outlined displayed') {
            // slices span id to match to a topic name to remove it
            var pId = eId.slice(0 , -5)
            var topicToRemove = pId
            ToggleClassList(eId , 'displayed')
            ToggleClassList(pId , 'topicSelected')
            //cheks topic and removs if it matches sliced spam id
            var index = selectedTopics.findIndex(function(topic) {
                return topic === topicToRemove;
            })
            if (index !== -1) {
                selectedTopics.splice(index, 1);
            }
        }
        
        //StartQuiz button . quiz activatis if start button is clicked and selected topics are 3 or more.
        // we target button with its id and if it matches if statment is activated
        if ( eId === 'quizStart' && selectedTopics.length >= 3 ){
            // sets display none to a first page where u enter name
            ToggleClassList('introduction', 'unDisplayed')
            //sets display block to a quiz section 
            ToggleClassList('quiz', 'displayed')
            // toggles displayed class to a quiz topic section
            ToggleClassList('topicContent', 'displayed')
            // this function generates questions and answers from question list based of selected topics.
            displayNewQuestion()
        }
    })
    

    //Toggle classlis function. this function toggles given classlist to a given id.
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
        // selects an div where corect answers will be displayed
        var answerDiv = document.getElementById('correctAnswers')
        //loops through the corectanswers and selected answers and displayes them next to each other in containers
        for ( i = 0; i < correctAnswers.length ; i++ ) {;   
            // creates an p element
            let correctAnswer = document.createElement('P')
            // this line determines p elements textcontent.
            correctAnswer.innerHTML = i+1+ ')' + correctAnswers[i]+ '</br>' + 'youre answer was: ' + selectedAnswersValue[i]
            // sets a class to an p element
            correctAnswer.classList = 'correctAnswer'
            // adds p element to an html div element that we selected earlier
            answerDiv.appendChild(correctAnswer)
            // adds a class to p element if corect answer matches selected answer its corect if not its wrong
            correctAnswers[i]!== selectedAnswersValue[i] ? correctAnswer.classList.add('wrong') : correctAnswer.classList.add('correct')
        }
    }