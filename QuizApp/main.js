// constants
    const forEventListener = document.querySelector('body');


    forEventListener.addEventListener('click', e => {
        var eId = e.target.id

        console.log(e.target)
        if ( eId === 'topicButton' || eId === 'topicContent' || eId === 'topicContentClose'){
            ToggleClassList('topicContent' , 'displayed')
        }

    })



//Toggle classlis function
    function ToggleClassList ( elementId , elementClassName) {
        var toggleClass = document.getElementById(elementId)
        toggleClass.classList.toggle(elementClassName)
    }