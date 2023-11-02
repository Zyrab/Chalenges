// Select the necessary elements from the HTML
const ageCalculatorApp = document.querySelector(".input");
const calculateAge = document.querySelector("BUTTON");

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is 0-based, so add 1
const day = currentDate.getDate();
let inputYear;
let inputMonth; 
let inputDay; 
let inputDayId; 

ageCalculatorApp.addEventListener('keyup', (e) => {
    handleInput(e.target, e.target.value)
});

// Function to validate date inputs
const handleInput = (element, value) => {
    onlyNumbers = /^\d+$/;
    if (element.id === "year") {
        inputYear = value;
        if ( inputYear > year || (inputYear == year && inputMonth > month) ||(inputYear == year && inputMonth == month && inputDay > day) || !onlyNumbers.test(inputYear.trim())) {
            validation (element, 1 , 0 , 1);
        } else {
            validation (element, 0 , 0 , 2);
            if (inputDay > getMaxDaysInMonth(inputYear, inputMonth)) {
                validation (inputDayId, 1 , 0, 1);
            } else {
                validation (inputDayId, 0 , 0 , 2);
            }
        }
    }
    if (element.id === 'month') {
        inputMonth = value;
        if ( inputMonth < 1 || inputMonth > 12 || !onlyNumbers.test(inputMonth.trim())) {
            validation (element, 1 , 0 , 1);
        } else {
            validation (element, 0 , 0 , 2);
            if ( inputDay > getMaxDaysInMonth(inputYear, inputMonth)) {
                validation (inputDayId, 1 , 0 , 1);
            } else {
                validation (inputDayId, 0 , 0 , 2);
            }
        }
    }
    if (element.id === 'day') {
        inputDay = value;
        inputDayId = element;
        if (!onlyNumbers.test(value.trim()) ||inputDay > getMaxDaysInMonth(inputYear, inputMonth)) {
            validation (element, 1 , 0, 1);
        } else {
            validation (element, 0 , 0 , 2);
        }
    }
};


// Function to get the maximum number of days in a month
const getMaxDaysInMonth = (inputYear, inputMonth) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (inputMonth == 2 && isLeapYear(inputYear)) {
        return 29; 
    }
    if (inputMonth === undefined) {
        return 31 ;
    }
    if (inputMonth >= 1 && inputMonth <= 12) {
        return daysInMonth[inputMonth - 1]; 
    }
    return 0;
};

// Function to check if a year is a leap year
function isLeapYear(inputYear) {
    if (inputYear === '' || isNaN(inputYear)) {
        return false;
    }
    inputYear = parseInt(inputYear); 
    return (inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0);
}


// Function to apply error validation for a field
const validation = (element , op1, op2,classBehave ) => {
    let validNumber = element.id + '1';
    let isRequired = element.id + '2';
    let mustBeValidNumber = document.getElementById(validNumber);
    let fieldIsRequired = document.getElementById(isRequired);
    element.classList[`${classBehave === 1 ? 'add' : 'remove'}`]('invalid')
    element.labels.item(0).style.color = `${classBehave === 1 ? '#f0575c' : '#707070'}`;
    mustBeValidNumber.style.opacity = op1;
    fieldIsRequired.style.opacity = op2;
};


// Add a click event listener to the "Calculate Age" button
calculateAge.addEventListener('click', (e) => {
    let childNodes = ageCalculatorApp.children;
    let allFieldsValid = true;

    for (i = 0; i < childNodes.length; i++) {
        let children = childNodes[i].children;
        for (j = 0; j < children.length; j++) {
            if (children[j].classList.contains('invalid')) {
               validation (children[j], 1 , 0, 1);
               allFieldsValid = false;
            }
            if (children[j].value === '') {
                validation (children[j], 0 , 1, 1);
                allFieldsValid = false;
            }
        }
    }
    if (allFieldsValid) {
        let monthDays = getMaxDaysInMonth(inputYear, inputMonth);
        let monthFormat = month < inputMonth || (month == inputMonth && day < inputDay) ? month - inputMonth + 12 : month - inputMonth;
        let spanYear = month < inputMonth || (month == inputMonth && inputDay > day) ? year - inputYear - 1 : year - inputYear;
        let spanMonth = day < inputDay ? monthFormat - 1 : monthFormat;
        let spanDay = day < inputDay ? day + (monthDays - inputDay) : day - inputDay;

        countAnimation(spanYear, 'year-result');
        countAnimation(spanMonth, 'month-result');
        countAnimation(spanDay, 'day-result');
    }
});

// Function for the counting animation
const countAnimation = (target, id) => {
    let currentNumber = target > 31 ? target - 31 : 0;
    const incrementNumber = () => {
        if (currentNumber <= target) {
            document.getElementById(id).textContent = currentNumber;
            currentNumber++;
            setInterval(incrementNumber, 30);
        }
    };
    incrementNumber();
};






