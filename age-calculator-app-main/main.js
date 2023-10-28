// Select the necessary elements from the HTML
const ageCalculatorApp = document.querySelector(".input");
const calculateAge = document.querySelector("BUTTON");

// Get the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Month is 0-based, so add 1
const day = currentDate.getDate();
var yearV; // Variable to store the year input
var monthV; // Variable to store the month input
var dayV; // Variable to store the day input
var dayId; // Element for the day input

// Event listener to validate input areas when a key is released
ageCalculatorApp.addEventListener('keyup', (e) => {
    var element = e.target;
    var inputText = e.target.value;
    validDate(element, inputText);
});

// Function to validate date inputs
const validDate = (element, value) => {
    id = element.id;
    onlyNumbers = /^\d+$/;

    if (id === "year") {
        yearV = value;
        if (
            yearV > year ||
            (yearV == year && monthV > month) ||
            (yearV == year && monthV == month && dayV > day) ||
            !onlyNumbers.test(yearV.trim())
        ) {
            errorStyling(element);
        } else {
            correctStyling(element);
            if (dayV > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(dayV.trim())) {
                errorStyling(dayId);
            } else {
                correctStyling(dayId);
            }
        }
    }
    if (element.id === 'month') {
        monthV = value;
        if (
            monthV < 1 ||
            monthV > 12 ||
            !onlyNumbers.test(monthV.trim())
        ) {
            errorStyling(element);
        } else {
            correctStyling(element);
            if (dayV > getMaxDaysInMonth(yearV, monthV) || !onlyNumbers.test(dayV.trim())) {
                errorStyling(dayId);
            } else {
                correctStyling(dayId);
            }
        }
    }
    if (id === 'day') {
        dayV = value;
        dayId = element;
        if (!onlyNumbers.test(value.trim()) || dayV > getMaxDaysInMonth(yearV, monthV)) {
            errorStyling(element);
        } else {
            correctStyling(element);
        }
    }
};

// Function to get the maximum number of days in a month
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
};

// Function to check if a year is a leap year
function isLeapYear(yearV) {
    if (yearV === '' || isNaN(yearV)) {
        return false; // An empty or non-numeric year is not a leap year
    }

    yearV = parseInt(yearV); // Convert yearV to an integer for numeric comparison

    // Check for leap years (divisible by 4, except for years divisible by 100 but not by 400)
    return (yearV % 4 === 0 && yearV % 100 !== 0) || (yearV % 400 === 0);
}

// Function to apply error styling to an element
const errorStyling = (element) => {
    var validNumber = element.id + '1';
    var isRequired = element.id + '2';
    var mustBeValidNumber = document.getElementById(validNumber);
    var fieldIsRequired = document.getElementById(isRequired);

    element.classList.add('invalid');
    element.labels.item(0).style.color = '#f0575c';
    mustBeValidNumber.style.opacity = '1';
    fieldIsRequired.style.opacity = '0';
};

// Function to apply error styling for a required field
const errorStyling2 = (element) => {
    var validNumber = element.id + '1';
    var isRequired = element.id + '2';
    var mustBeValidNumber = document.getElementById(validNumber);
    var fieldIsRequired = document.getElementById(isRequired);

    element.classList.add('invalid');
    element.labels.item(0).style.color = '#f0575c';
    mustBeValidNumber.style.opacity = '0';
    fieldIsRequired.style.opacity = '1';
};

// Function to apply correct styling to an element
const correctStyling = (element) => {
    var validNumber = element.id + '1';
    var isRequired = element.id + '2';
    var mustBeValidNumber = document.getElementById(validNumber);
    var fieldIsRequired = document.getElementById(isRequired);

    element.classList.remove('invalid');
    element.labels.item(0).style.color = '#707070';
    mustBeValidNumber.style.opacity = '0';
    fieldIsRequired.style.opacity = '0';
};

// Add a click event listener to the "Calculate Age" button
calculateAge.addEventListener('click', (e) => {
    var childNodes = ageCalculatorApp.children;
    var allFieldsValid = true;

    for (i = 0; i < childNodes.length; i++) {
        var children = childNodes[i].children;
        for (j = 0; j < children.length; j++) {
            if (children[j].classList.contains('invalid')) {
                errorStyling(children[j]);
                allFieldsValid = false;
            }
            if ((children[j].value !== undefined && children[j].value === '') || children[j].value === '') {
                errorStyling2(children[j]);
                allFieldsValid = false;
            }
        }
    }
    if (allFieldsValid) {
        var monthDays = getMaxDaysInMonth(yearV, monthV);
        var monthFormat = month < monthV || (month == monthV && day < dayV) ? month - monthV + 12 : month - monthV;
        var spanYear = month < monthV || (month == monthV && dayV > day) ? year - yearV - 1 : year - yearV;
        var spanMonth = day < dayV ? monthFormat - 1 : monthFormat;
        var spanDay = day < dayV ? day + (monthDays - dayV) : day - dayV;

        countAnimation(spanYear, 'year-result');
        countAnimation(spanMonth, 'month-result');
        countAnimation(spanDay, 'day-result');
    }
});

// Function for the counting animation
const countAnimation = (target, id) => {
    var currentnumber = target > 31 ? target - 31 : 0;
    const incrementNumber = () => {
        if (currentnumber <= target) {
            document.getElementById(id).textContent = currentnumber;
            currentnumber++;
            setTimeout(incrementNumber, 30);
        }
    };
    incrementNumber();
};
