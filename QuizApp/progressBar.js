//Selecting elements
const circles = document.querySelectorAll('.circle')
const progressBar = document.querySelector('.indicator')
const buttons = document.querySelector('.quizNavigation')
    let currentQuestion = 1
//add click event to buttons
buttons.addEventListener('click', e =>{
    if(e.target.nodeName === "BUTTON"){
    //function to update current question
        // update curren question based on button click
        currentQuestion = e.target.id === 'next' ? ++currentQuestion : --currentQuestion
        // loop through all circles and add/remove "active" class based on their index
        circles.forEach((circle , index) =>{
            circle.classList[`${index < currentQuestion ? 'add' : 'remove'}`]('active')
        })
        // upgrade progressbar width
        progressBar.style.width = `${((currentQuestion - 1) / (circles.length - 1)) * 100 }%`
        // check currentstep if it is last or first
        if (currentQuestion === circles.length){
            document.getElementById('next').disabled = true           
            document.getElementById('finish').style.display = 'block'          
        } else if ( currentQuestion !== 1){
            document.getElementById('next').disabled = false           
            document.getElementById('prev').disabled = false
            document.getElementById('finish').style.display = 'none'          
        } else {
            document.getElementById('next').disabled = false
            document.getElementById('prev').disabled = true
        }
    }
})