
    
    //Selecting elements
    const circles = document.querySelectorAll('.circle')
    const progressBar = document.querySelector('.indicator')
    const buttons = document.querySelector('.quizNavigation')
    let currentQuestion = 1
    //add click event to buttons
    buttons.addEventListener('click', e =>{
        if(e.target.nodeName === "BUTTON"){
            const quiestionList = document.querySelectorAll('.quizQuestions')
            const quiestionButtons = document.querySelectorAll('.variant')
            // update curren question based on button click
            currentQuestion = e.target.id === 'next' ? ++currentQuestion : --currentQuestion
            // loop through all circles and questions and add/remove "active","Displayed" class based on their index
            circles.forEach((circle , index) =>{
                circle.classList[`${index < currentQuestion ? 'add' : 'remove'}`]('active')
            })
            quiestionList.forEach((quiestionList , index) =>{
                quiestionList.style.display = index === currentQuestion - 1 ? 'block' : 'none'
            })
            quiestionButtons.forEach((quiestionButton ) => {
                quiestionButton.style.display = quiestionButton.id.slice(0, -1) == '10' + currentQuestion ? 'block' : 'none'
            })
            // upgrade progressbar width
            progressBar.style.width = `${((currentQuestion - 1) / (circles.length - 1)) * 100 }%`
            // check currentstep if it is last or first
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
            

            
        }

    })
