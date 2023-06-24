// constants
    const forEventListener = document.querySelector('body');
    const selectedTopics = [] ;

    forEventListener.addEventListener('click', e => {
        var eId = e.target.id
        var eClass = e.target.className
        var elem = e.target

        console.log(e.target.id)


        
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
            selectedTopics.push(eId)
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
    })



//Toggle classlis function
    function ToggleClassList ( elementId , elementClassName) {
        var toggleClass = document.getElementById(elementId)
        toggleClass.classList.toggle(elementClassName)
    }