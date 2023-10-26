// Select the input element with the class "input"
const ageCalculatorApp = document.querySelector(".input");

// Get the current date
const currentDate = new Date();

// Extract the current year, month, and day
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

// Variables to store year and month values
var yearV;
var monthV;
var dayV;

// Event listener to validate input areas on keyup
ageCalculatorApp.addEventListener('keyup', (e) => {
    var element = e.target;
    var inputText = e.target.value;
    validDate(element, inputText);
});

// Function to validate input based on element and input value
const validDate = (element, value) => {
    // Get the ID of the element
    id = element.id;
    // Regular expression to match only numbers
    onlyNumbers = /^\d+$/;

    if (id === "year") {
        yearV = value;
        if (value > year || !onlyNumbers.test(value.trim())) {
            errorStyling(element);
        } else {
            correctStyling(element);
        }
    }
    if (element.id === 'month') {
        monthV = value;
        if (monthV < 1 || monthV > 12 || !onlyNumbers.test(monthV.trim())) {
            errorStyling(element);
        } else {
            correctStyling(element);
        }
    }
    if (id === 'day') {
        dayV = value;
        if (value > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(value.trim()) || (yearV === undefined && monthV === undefined)) {
            errorStyling(element);
        } else {
            correctStyling(element);
        }
    }
};

// Function to get the maximum number of days in a month
const getMaxDaysInMonth = (yearV, monthV) => {
    if (monthV === '') {
        return 1;
    }
    // Array to store the number of days in each month (accounting for leap years)
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's February (month 2) and a leap year
    if (monthV === 2 && isLeapYear(yearV)) {
        return 29; // February in a leap year
    }
    console.log(daysInMonth[monthV - 1], monthV);
    return daysInMonth[monthV - 1]; // Subtract 1 since months are 0-based in the array
};

// Function to check if a year is a leap year
function isLeapYear(yearV) {
    // Check for leap years (divisible by 4, except for years divisible by 100 but not by 400)
    return (yearV % 4 === 0 && yearV % 100 !== 0) || (yearV % 400 === 0);
}

// Function to apply error styling to an element
const errorStyling = (element) => {
    var validNumber = element.id + '1';
    var mustBeValidNumber = document.getElementById(validNumber);

    element.classList.add('invalid');
    element.labels.item(0).style.color = '#f0575c';
    mustBeValidNumber.style.opacity = '1';
};

// Function to apply correct styling to an element
const correctStyling = (element) => {
    var validNumber = element.id + '1';
    var mustBeValidNumber = document.getElementById(validNumber);

    element.classList.remove('invalid');
    element.labels.item(0).style color = '#707070';
    mustBeValidNumber.style.opacity = '0';
};
