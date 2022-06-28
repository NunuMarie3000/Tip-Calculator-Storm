'use strict';
console.log('up and running');

//what is the math i'm looking for? how do i find tip?
// bill * (tip * .01) = tip amount
function calculateTip(e){
    //no print form info in url
    //it also keeps that weird error page from popping up since i'm only using the form data in javascript and not sending it anywhere
    e.preventDefault();
    //we want to create a function that calculates tip amount selected against bill amount given
    //grab the bill amount from html
    let billAmount = document.getElementById('bill').value;
    //grab tip amount from html
    let tipAmount = document.getElementById('tip').value;
    //grab amount of customers from html
    let custAmount = document.getElementById('customers').value;
    //grab where we wanna print results at from html
    let tipResults = document.getElementById('tip-results');
    let totalPerPerson = document.getElementById('total-results');

    let tipTotal = (billAmount * (tipAmount * .01))/custAmount;
    //we have how much tip everyone is supposed to pay
    //now we need to divide the bill amount by everyone that's tipping, then add the tip amount to that split total
    let individualAmountPreTip = billAmount/custAmount;
    // pre tip amount + tip = amount each person should pay
    let whatEachPersonShouldPay = individualAmountPreTip + tipTotal;   
    //we wanna assign tipTotal value as text content to tipResults
    //the extra math.round(num + Number.EPSILON) etc... is basically rounding the tipTotal to two decimal places more accurately for the equity of tipping customers
    tipResults.textContent = `$${Math.round((tipTotal + Number.EPSILON) * 100) / 100}`;
    //assign whatEachPersonShouldPay as text content to totalPerPerson
    totalPerPerson.textContent = `$${Math.round((whatEachPersonShouldPay + Number.EPSILON) * 100) / 100}`;

}
//okay, so the math is mathing, but i need to get the results from the form when the form is submitted so i can use it in this function..add an event listener to the form then
//get the form from html
let tipForm = document.getElementById('tip-form');
tipForm.addEventListener('submit', calculateTip);

//i need to create a reset button
//the reset button needs to clear the form values as well as let the text content of tipResults and totalPerPerson equal ''
let resetButton = document.getElementById('reset-button');
//create reset function
function reset(){
    let tipResults = document.getElementById('tip-results');
    let totalPerPerson = document.getElementById('total-results');
    //resetting values in my form
    tipForm.reset();
    //setting the text content to an empty string for tipResults and totalPerPerson div
    tipResults.textContent = '';
    totalPerPerson.textContent = '';
}
resetButton.addEventListener('click', reset);