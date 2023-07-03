
    // with this code progressbar is able to work
    //Selecting elements
    const circles = document.querySelectorAll('.circle')
    const progressBar = document.querySelector('.indicator')
    const buttons = document.querySelector('.quizNavigation')
    const quizRezult = document.getElementById('quizRezult')
    let currentQuestion = 1
    //add click event to buttons
    buttons.addEventListener('click', e =>{
        if(e.target.nodeName === "BUTTON"){
            const quiestionList = document.querySelectorAll('.quizQuestions')
            const quiestionButtons = document.querySelectorAll('.variant')
            // update curren question based on button click. it increments or decrements currentquestion, and buy currentquestion value changes the id.
            currentQuestion = e.target.id === 'next' ? ++currentQuestion : --currentQuestion
            // loop through all circles and questions and add/remove "active","Displayed" class based on their index
            circles.forEach((circle , index) =>{
                circle.classList[`${index < currentQuestion ? 'add' : 'remove'}`]('active')
            })
            // changes displaye property based on currentquestion value. it displays current question
            quiestionList.forEach((quiestionList , index) =>{
                quiestionList.style.display = index === currentQuestion - 1 ? 'block' : 'none'
            })
            // does same as question lis but on question variants.
            quiestionButtons.forEach((quiestionButton  ) => {
                quiestionButton.style.display = quiestionButton.id.slice(0, -1) == '10' + currentQuestion ? 'block' : 'none'
            })
            // upgrade progressbar width
            progressBar.style.width = `${((currentQuestion - 1) / (circles.length - 1)) * 100 }%`
            // check currentstep if it is last or first. displayes finish button on tenth question
            if (currentQuestion === circles.length){          
                document.getElementById('finish').style.display = 'block'          
                document.getElementById('next').style.display = 'none'          
            } else if ( currentQuestion !== 1){
                document.getElementById('next').disabled = false           
                document.getElementById('prev').disabled = false
                document.getElementById('next').style.display = 'block'          
                document.getElementById('finish').style.display = 'none'          
            } else {
                document.getElementById('prev').disabled = true
            } 
            // selectionanswer function gets id based on currentquestion to set ides of questions    
            selectingAnswer(currentQuestion)  
            // if button id is finish. finishing the quiz and displaying the result
            if (e.target.id === 'finish'){
                // selected answers contain 1 for correct and 0 for wrong answered uestions. this variable adds arrays elements by asigning them number property.
                let sum = selectedAnswers.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
                // this displayes sum value
                quizRezult.innerText = sum
                ToggleClassList('result' , 'displayed')
            }
        }       
    })
