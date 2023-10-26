const ageCalculatorApp = document.querySelector(".input")
const currentDate = new Date()
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
var yearV
var monthV


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
        if (value > year || !onlyNumbers.test(value.trim()) ) {
            errorStyling (element)
        } else {
            correctStyling (element)
        }
    }
    if ( element.id ==='month'){
        monthV = value
        if ( monthV < 1 || monthV > 12 || !onlyNumbers.test(monthV.trim())) {
            errorStyling (element)
        } else {
            correctStyling (element)
        }
    }
    if (id ==='day'){
        if (value > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(value.trim())){
            errorStyling (element)
        } else {
            correctStyling (element)
        }
    }
    console.log( monthV)
}
// const setValidDate = (id , value , targetId) => {
//     if (id ===targetId){
//        var targetId+'V
//         ' = value
//         if (value > year || !onlyNumbers.test(value.trim()) ) {
//             errorStyling (element)
//         } else {
//             correctStyling (element)
//         }
//     }
// }


const getMaxDaysInMonth = (yearV, monthV) => {
    // Array to store the number of days in each month (accounting for leap years)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Check if it's February (month 2) and a leap year, or if monthV is undefined
    if ((monthV === 2 && isLeapYear(yearV)) || monthV === undefined) {
        return 29; // February in a leap year or when monthV is undefined
    }

    // Handle other months
    if (monthV >= 1 && monthV <= 12) {
        return daysInMonth[monthV - 1]; // Subtract 1 since months are 0-based in the array
    }

    return 0; // Return 0 for invalid months
}
  function isLeapYear(yearV) {
    // Check for leap years (divisible by 4, except for years divisible by 100 but not by 400)
    return (yearV % 4 === 0 && yearV % 100 !== 0) || (yearV % 400 === 0);
  }





const errorStyling =(element) =>{
    var validNumber = element.id + '1'
    var mustBeValidNumber = document.getElementById(validNumber)

    element.classList.add('invalid')
    element.labels.item(0).style.color = '#f0575c'
    mustBeValidNumber.style.opacity = '1'
}
const correctStyling =(element) =>{
    var validNumber = element.id + '1'
    var mustBeValidNumber = document.getElementById(validNumber)
    
    element.classList.remove('invalid')
    element.labels.item(0).style.color = '#707070'
    mustBeValidNumber.style.opacity = '0'
}




//  //function to check input value 
//  const inputValue = (element, text) => {
//     var validNumber = element.id + '1'
//     var mustBeValidNumber = document.getElementById(validNumber)
//     var onlyNumbers = /^\d+$/
//     var yearV 
//     var monthV 
//     var dayV
//     if (element.id === 'year') {
//         yearV = element.value;
//     }
//     if (element.id === 'month') {
//         monthV = element.value;
//     }
//     if (element.id === 'day') {
//         dayV = element.value;
//     }
//     var validDate = checkValidDate( dayV, monthV , yearV)
//     if(!onlyNumbers.test(text.trim()) && !validDate){
//         element.classList.add('invalid')
//         element.labels.item(0).style.color = '#f0575c'
//         mustBeValidNumber.style.opacity = '1'
//     } else {
//         element.classList.remove('invalid')
//         element.labels.item(0).style.color = '#707070'
//         mustBeValidNumber.style.opacity = '0'
//         console.log( dayV, monthV , yearV)
//     }  
//  }

//  const checkValidDate = ( dayV, monthV , yearV) => {
//         if(yearV <= year && dayV <= getMaxDaysInMonth(yearV, monthV) ){
            
        
//         }
//  }
