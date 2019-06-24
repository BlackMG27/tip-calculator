//set up the variables
const percent = document.getElementById('percentage');
const totalTip = document.getElementById('totalTip');
const tipPerPerson = document.getElementById('tipPerPerson');
const totalAmount = document.getElementById('totalAmount');
const amountPerson = document.getElementById('amountPerson')
let tipPercent;
//get the tipPercent
function getPercent() {
    tipPercent = percent.options[percent.selectedIndex].value;
}
//sets up the calculation
document
    .getElementById('tipForm')
    .addEventListener('submit', function (e) {
        //prevents the
        e.preventDefault();
        getPercent();
        const people = getValue('people');
        const price = getValue('price');
        //sends the three values to the functions
        totalTips(price, tipPercent);
        totalPrice(price, tipPercent);
        tipsPerPerson(people, price, tipPercent);
        amountPerPerson(people, price);

    });

function getValue(id) {
    return document
        .getElementById(id)
        .value;
}

function totalTips(price, percent) {
    const result = price * percent;
    totalTip.textContent = ` Total tip amount: $${result.toFixed(2)}`;
}

function totalPrice(price, percent) {
    const totalPrice = parseInt(price) + Number(price * percent);
    totalAmount.textContent = `Meal Price: $${totalPrice.toFixed(2)}`;
}

function tipsPerPerson(people, price, percent) {
    const tipPerson = Number(price * percent) / Number(people);
    tipPerPerson.textContent = `Tips per person:  $${tipPerson.toFixed(2)}`;
}

function amountPerPerson(people, price) {
    const finalAmount = Number(price / people);
    amountPerson.textContent = `Meal price per person:  $${finalAmount.toFixed(2)}`;
}
