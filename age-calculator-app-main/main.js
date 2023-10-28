// Select the necessary elements from the HTML
const ageCalculatorApp = document.querySelector(".input");
const calculateAge = document.querySelector("BUTTON");

// Get the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is 0-based, so add 1
const day = currentDate.getDate();
var inputYear; // Variable to store the year input
var inputMonth; // Variable to store the month input
var inputDay; // Variable to store the day input
var inputDayId; // Element for the day input

// Event listener to validate input areas when a key is released
ageCalculatorApp.addEventListener('keyup', (e) => {
    var element = e.target;
    var inputText = e.target.value;
    handleInput(element, inputText)
});

// Function to validate date inputs
const handleInput = (element, value) => {
    id = element.id;
    onlyNumbers = /^\d+$/;

    if (id === "year") {
        inputYear = value;
        if ( inputYear > year || (inputYear == year && inputMonth > month) ||(inputYear == year && inputMonth == month && inputDay > day) || !onlyNumbers.test(inputYear.trim())) {
            validation (element, 1 , 0 , 1);
        } else {
            validation (element, 0 , 0 , 2);
            if (inputDay > getMaxDaysInMonth(inputYear, inputMonth) || !onlyNumbers.test(inputDay.trim())) {
                validation (inputDayId, 1 , 0, 1);
            } else {
                validation (inputDayId, 0 , 0 , 2);
            }
        }
    }
    if (element.id === 'month') {
        inputMonth = value;
        if ( inputMonth < 1 || inputMonth > 12 || !onlyNumbers.test(inputMonth.trim())
        ) {
            validation (element, 1 , 0 , 1);
        } else {
            validation (element, 0 , 0 , 2);
            if (inputDay > getMaxDaysInMonth(inputYear, inputMonth) || !onlyNumbers.test(inputDay.trim())) {
                validation (inputDayId, 1 , 0 , 1);
            } else {
                validation (inputDayId, 0 , 0 , 2);
            }
        }
    }
    if (id === 'day') {
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
    // Array to store the number of days in each month (accounting for leap years)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's February (month 2) and a leap year, or if inputMonth is undefined
    if (inputMonth == 2 && isLeapYear(inputYear)) {
        return 29; // February in a leap year 
    }
    //if month isnt enterd yet
    if (inputMonth === undefined) {
        return 31 ;
    }
    // Handle other months
    if (inputMonth >= 1 && inputMonth <= 12) {
        return daysInMonth[inputMonth - 1]; // Subtract 1 since months are 0-based in the array
    }
    return 0; // Return 0 for invalid months
};

// Function to check if a year is a leap year
function isLeapYear(inputYear) {
    if (inputYear === '' || isNaN(inputYear)) {
        return false; // An empty or non-numeric year is not a leap year
    }

    inputYear = parseInt(inputYear); // Convert inputYear to an integer for numeric comparison

    // Check for leap years (divisible by 4, except for years divisible by 100 but not by 400)
    return (inputYear % 4 === 0 && inputYear % 100 !== 0) || (inputYear % 400 === 0);
}


// Function to apply error validation for a field
const validation = (element , op1, op2,classBehave ) => {
    var validNumber = element.id + '1';
    var isRequired = element.id + '2';
    var mustBeValidNumber = document.getElementById(validNumber);
    var fieldIsRequired = document.getElementById(isRequired);
    element.classList[`${classBehave === 1 ? 'add' : 'remove'}`]('invalid')
    element.labels.item(0).style.color = `${classBehave === 1 ? '#f0575c' : '#707070'}`;
    mustBeValidNumber.style.opacity = op1;
    fieldIsRequired.style.opacity = op2;
};


// Add a click event listener to the "Calculate Age" button
calculateAge.addEventListener('click', (e) => {
    var childNodes = ageCalculatorApp.children;
    var allFieldsValid = true;

    for (i = 0; i < childNodes.length; i++) {
        var children = childNodes[i].children;
        for (j = 0; j < children.length; j++) {
            if (children[j].classList.contains('invalid')) {
               validation (children[j], 1 , 0, 1);
               allFieldsValid = false;
            }
            if ((children[j].value !== undefined && children[j].value === '') || children[j].value === '') {
                validation (children[j], 0 , 1, 1);
                allFieldsValid = false;
            }
        }
    }
    if (allFieldsValid) {
        var monthDays = getMaxDaysInMonth(inputYear, inputMonth);
        var monthFormat = month < inputMonth || (month == inputMonth && day < inputDay) ? month - inputMonth + 12 : month - inputMonth;
        var spanYear = month < inputMonth || (month == inputMonth && inputDay > day) ? year - inputYear - 1 : year - inputYear;
        var spanMonth = day < inputDay ? monthFormat - 1 : monthFormat;
        var spanDay = day < inputDay ? day + (monthDays - inputDay) : day - inputDay;

        countAnimation(spanYear, 'year-result');
        countAnimation(spanMonth, 'month-result');
        countAnimation(spanDay, 'day-result');
    }
});

// Function for the counting animation
const countAnimation = (target, id) => {
    var currentNumber = target > 31 ? target - 31 : 0;
    const incrementNumber = () => {
        if (currentNumber <= target) {
            document.getElementById(id).textContent = currentNumber;
            currentNumber++;
            setTimeout(incrementNumber, 30);
        }
    };
    incrementNumber();
};






