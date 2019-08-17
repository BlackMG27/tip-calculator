//set up the variables
const percent = getId('percentage');
const totalTip = getId('totalTip');
const tipPerPerson = getId('tipPerPerson');
const totalAmount = getId('totalAmount');
const amountPerson = getId('amountPerson');
const totalPerson = getId('totalPerson');
let tipPercent;
//get the tipPercent
function getPercent() {
    tipPercent = percent.options[percent.selectedIndex].value;
}
//sets up the calculation
document
    .getElementById('tipForm')
    .addEventListener('submit', function (e) {
        //prevents the page from reloading
        e.preventDefault();
        getPercent();
        const people = getValue('people');
        const price = getValue('price');
        //if the input fields aren't empty
        if (people > 0 && price > 0 && tipPercent > 0) {
            //sends the variables to the respective functions to show in the app
            totalTips(price, tipPercent);
            totalPrice(price, tipPercent);
            tipsPerPerson(people, price, tipPercent);
            amountPerPerson(people, price);
            totalPerPerson(people, price, tipPercent);
            //get the ids for the inputs
            const clearPeople = getId('people');
            const clearPrice = getId('price');
            //clears the inputs on submit
            clearPeople.value = '';
            clearPrice.value = '';
        } else {
            //shows an error message
            showWarning('Please check your numbers.');
        }

    });

//gets the value in short form
function getValue(id) {
    return document
        .getElementById(id)
        .value;
}

//gets the shorthand for elements
function getId(id) {
    return document.getElementById(id);
}

//gets the total tips
function totalTips(price, percent) {
    //calculates the total tip
    const result = price * percent;
    //sets the text to the totalTips
    totalTip.textContent = ` Total tip amount: $${result.toFixed(2)}`;
    //adds a slight animation
    totalTip
        .classList
        .add('animated', 'fadeInUp', 'result');
}

//gets the total price
function totalPrice(price, percent) {
    const totalPrice = parseInt(price) + Number(price * percent);
    totalAmount.textContent = `Meal Price: $${totalPrice.toFixed(2)}`;
    totalAmount
        .classList
        .add('animated', 'fadeInUp', 'result');
}

function amountPerPerson(people, price) {
    const finalAmount = Number(price / people);
    amountPerson.textContent = `Meal price per person:  $${finalAmount.toFixed(2)}`;
    amountPerson
        .classList
        .add('animated', 'fadeInUp', 'result');
}

function tipsPerPerson(people, price, percent) {
    const tipPerson = Number(price * percent) / Number(people);
    tipPerPerson.textContent = `Tips per person:  $${tipPerson.toFixed(2)}`;
    tipPerPerson
        .classList
        .add('animated', 'fadeInUp', 'result');
}

function totalPerPerson(people, price, percent) {
    let finalAmountPerson = parseInt(price) + Number(price * percent);
    finalAmountPerson = finalAmountPerson / parseInt(people);
    totalPerson.textContent = `Total Amount per person: $${finalAmountPerson.toFixed(2)}`;
    totalPerson
        .classList
        .add('animated', 'fadeInUp', 'result');
}

//shows the warning message
function showWarning(error) {
    //creates the error placement
    const errorDiv = document.createElement('div');
    //adds the class to the error
    errorDiv.className = 'error';
    //adds the animation
    errorDiv
        .classList
        .add('animated', 'fadeIn');
    //puts the error message into the error div
    errorDiv.appendChild(document.createTextNode(error));
    //grabs the tip form and the parent div
    const tipForm = getId('tipForm');
    const tipEntry = getId('tipEntry');
    //inserts the error div before the tip form
    tipEntry.insertBefore(errorDiv, tipForm);
    //clears the error after 4 seconds
    setTimeout(clearError, 4000);

}
//removes the error message
function clearError() {
    document
        .querySelector('.error')
        .remove();
}