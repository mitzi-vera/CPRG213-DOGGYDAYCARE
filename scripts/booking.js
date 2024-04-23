/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numOfDays = 0;

let fullDay = document.getElementById("full");
let halfDay = document.getElementById("half");
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let reset = document.getElementById("clear-button");
let totalElement = document.getElementById("calculated-cost");

let elements = [fullDay, halfDay, monday, tuesday, wednesday, thursday, friday];
let days = [monday, tuesday, wednesday, thursday, friday];

for (var i = 0; i < days.length; i++) {
    if (days[i]) {
        days[i].addEventListener('click', changeColour);
    }
}
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColour(event) {
    event.target.classList.add('clicked');
    // Update numOfDays based on the presence of 'clicked' class
    if (event.target.classList.contains('clicked')) {
        numOfDays++;
    } else {
        numOfDays--;
    }
    reCalculate(numOfDays, costPerDay);
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
reset.addEventListener('click', clearDays);
function clearDays() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('clicked');
    }
    numOfDays = 0;
    reCalculate(numOfDays, costPerDay);
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDay.addEventListener('click', halfRate);
function halfRate() {
    costPerDay = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    reCalculate(numOfDays, costPerDay);
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDay.addEventListener('click', fullRate);
function fullRate() {
    costPerDay = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    reCalculate(numOfDays, costPerDay);
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function reCalculate(numOfDays, costPerDay) {
    let total = numOfDays * costPerDay;
    totalElement.innerHTML = total;
}
