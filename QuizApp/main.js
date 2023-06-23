


//Toggle classlis function
    function ToggleClassList ( elementId , elementClassName) {
        var toggle = document.getElementById(elementId)
        toggle.classlist.toggle(elementClassName)
    }