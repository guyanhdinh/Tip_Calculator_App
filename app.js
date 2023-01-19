
const billAmount = document.getElementById("bill");
const numberOfPeople = document.getElementById("people");

const customTipPercentage = document.getElementById("customTip");
const buttons = document.querySelectorAll(".tip-button button");

const tipAmountPerPerson = document.getElementById("tipAmount");
const totalAmountPerPerson = document.getElementById("totalAmount");

const resetButton = document.getElementById("resetBtn");

//Tip Percentage When Buttons Got Clicked

buttons.forEach((button) => {
    button.addEventListener("click", function(event) {
        let tipPercentage = event.target.value;
        tipPercentage = parseFloat(tipPercentage) 

        if (billAmount.value === "") return;
        if (numberOfPeople.value === "") numberOfPeople.value = 1;

        calculateTip(parseFloat(billAmount.value), parseFloat(tipPercentage), parseInt(numberOfPeople.value));
    });
});

//Custom Tip Percentage

customTipPercentage.addEventListener("blur", function(event) {
    if (billAmount.value === "") {
        resetEverything();
        return;
    } 
    if (numberOfPeople === "") numberOfPeople.value === 1;

    calculateTip(parseFloat(billAmount.value), parseFloat(event.target.value), parseInt(numberOfPeople.value));
});

//Calculate Tip

function calculateTip(billAmount, tipPercentage, numberOfPeople) {
    let tipPerPerson = ((billAmount * tipPercentage) / 100) / numberOfPeople;
    let totalPerPerson = (billAmount / numberOfPeople) + tipPerPerson;

    const tipAmountPerPerson = tipPerPerson.toFixed(2);
    const totalAmountPerPerson = totalPerPerson.toFixed(2);

    if (numberOfPeople <= 0) {
        document.getElementById("error").innerHTML = "Can't be zero";
        document.querySelector(".people-input input").style.outlineColor = "red";

    } else {
        document.getElementById("error").innerHTML = "";

        document.getElementById("tipAmount").innerHTML = "$" + tipAmountPerPerson;
        document.getElementById("totalAmount").innerHTML = "$" + totalAmountPerPerson;
    }
}

//Reset Everything

resetButton.addEventListener("click", resetEverything)
function resetEverything() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    document.getElementById("customTip").value = "";
    document.getElementById("tipAmount").innerHTML = "$0.00";
    document.getElementById("totalAmount").innerHTML = "$0.00";
};






























