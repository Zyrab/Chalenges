const ageCalculatorApp = document.querySelector(".input");
const calculateAge = document.querySelector("BUTTON");
const currentDate = new Date()
const year = currentDate.getFullYear();
const month = currentDate.getMonth() +1;
const day = currentDate.getDate();
var yearV
var monthV
var dayV
var dayId

//eventlistener to validate inout areas.
ageCalculatorApp.addEventListener('keyup', e =>{
    var element = e.target
    var inputText = e.target.value
    validDate (element, inputText)
})

const validDate = (element, value) =>{
    id = element.id
    onlyNumbers = /^\d+$/
    
    if (id ==="year"){
        yearV = value
        if  ((yearV > year || (yearV == year && monthV > month) || (yearV == year && monthV == month && dayV > day)) || !onlyNumbers.test(yearV.trim())) {
            errorStyling (element)
    } else {
    
            correctStyling (element)
            if (dayV > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(dayV.trim())){
                errorStyling (dayId)
            } else {
                correctStyling (dayId)
            }
        }
    }
    if ( element.id ==='month'){
        monthV = value
        if ( monthV < 1 || monthV > 12 || !onlyNumbers.test(monthV.trim()) ) {
            errorStyling (element)
        } else {
            correctStyling (element)
            if (dayV > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(dayV.trim())){
                errorStyling (dayId)
            } else {
                correctStyling (dayId)
            }

        }
    }
    if (id ==='day'){
        dayV = value
        dayId = element
        if (!onlyNumbers.test(value.trim()) ||dayV > getMaxDaysInMonth(yearV, monthV)){
            errorStyling (element)
        } else {
            correctStyling (element)
        }
    }
}


const getMaxDaysInMonth = (yearV, monthV) => {
    // Array to store the number of days in each month (accounting for leap years)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Check if it's February (month 2) and a leap year, or if monthV is undefined
    if (monthV == 2 && isLeapYear(yearV)) {
        
        return 29; // February in a leap year or when monthV is undefined
    }
    // Handle other months
    if (monthV >= 1 && monthV <= 12) {
        return daysInMonth[monthV - 1]; // Subtract 1 since months are 0-based in the array
    }
    return 0; // Return 0 for invalid months
}
function isLeapYear(yearV) {
    if (yearV === '' || isNaN(yearV)) {
        return false; // An empty or non-numeric year is not a leap year
    }

    yearV = parseInt(yearV); // Convert yearV to an integer for numeric comparison

    // Check for leap years (divisible by 4, except for years divisible by 100 but not by 400)
    return (yearV % 4 === 0 && yearV % 100 !== 0) || (yearV % 400 === 0);
}











const errorStyling =(element) =>{
    var validNumber = element.id + '1'
    var isRequired = element.id + '2'
    var mustBeValidNumber = document.getElementById(validNumber)
    var fieldIsRequired = document.getElementById(isRequired)

    element.classList.add('invalid')
    element.labels.item(0).style.color = '#f0575c'
    mustBeValidNumber.style.opacity = '1'
    fieldIsRequired.style.opacity = '0'
}
const errorStyling2 =(element) =>{
    var validNumber = element.id + '1'
    var isRequired = element.id + '2'
    var mustBeValidNumber = document.getElementById(validNumber)
    var fieldIsRequired = document.getElementById(isRequired)

    element.classList.add('invalid')
    element.labels.item(0).style.color = '#f0575c'
    mustBeValidNumber.style.opacity = '0'
    fieldIsRequired.style.opacity = '1'
}
const correctStyling =(element) =>{
    var validNumber = element.id + '1'
    var isRequired = element.id + '2'
    var mustBeValidNumber = document.getElementById(validNumber)
    var fieldIsRequired = document.getElementById(isRequired)
    
    element.classList.remove('invalid')
    element.labels.item(0).style.color = '#707070'
    mustBeValidNumber.style.opacity = '0'
    fieldIsRequired.style.opacity = '0'
}

calculateAge.addEventListener('click' , e =>{
    var childNodes = ageCalculatorApp.children;
    for ( i = 0; i < childNodes.length; i++) {
        var children = childNodes[i].children
        for ( j = 0; j < children.length; j++) {
            if (children[j].value!== undefined && children[j].value==='' ){
                errorStyling2 (children[j])
            }else{

            }
    
        } 
        
    } 

})