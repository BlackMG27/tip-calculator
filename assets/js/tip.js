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
        //sends the three values to the functions
        totalTips(price, tipPercent);
        totalPrice(price, tipPercent);
        tipsPerPerson(people, price, tipPercent);
        amountPerPerson(people, price);
        totalPerPerson(people, price, tipPercent);

    });

function getValue(id) {
    return document
        .getElementById(id)
        .value;
}

function getId(id) {
    return document.getElementById(id);
}

function totalTips(price, percent) {
    const result = price * percent;
    totalTip.textContent = ` Total tip amount: $${result.toFixed(2)}`;
    totalTip
        .classList
        .add('animated', 'fadeInUp');
}

function totalPrice(price, percent) {
    const totalPrice = parseInt(price) + Number(price * percent);
    totalAmount.textContent = `Meal Price: $${totalPrice.toFixed(2)}`;
    totalAmount
        .classList
        .add('animated', 'fadeInUp');
}

function amountPerPerson(people, price) {
    const finalAmount = Number(price / people);
    amountPerson.textContent = `Meal price per person:  $${finalAmount.toFixed(2)}`;
    amountPerson
        .classList
        .add('animated', 'fadeInUp');
}

function tipsPerPerson(people, price, percent) {
    const tipPerson = Number(price * percent) / Number(people);
    tipPerPerson.textContent = `Tips per person:  $${tipPerson.toFixed(2)}`;
    tipPerPerson
        .classList
        .add('animated', 'fadeInUp');
}

function totalPerPerson(people, price, percent) {
    let finalAmountPerson = parseInt(price) + Number(price * percent);
    finalAmountPerson = finalAmountPerson / parseInt(people);
    totalPerson.textContent = `Total Amount per person: $${finalAmountPerson.toFixed(2)}`;
    totalPerson
        .classList
        .add('animated', 'fadeInUp');
}
