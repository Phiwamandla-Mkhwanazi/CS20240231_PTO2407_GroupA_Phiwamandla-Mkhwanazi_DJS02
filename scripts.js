"use strict";

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => 
  {
    event.preventDefault();

    //Get input values.
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

   //Scenario: Dividing numbers result in a whole number.
    result.innerText = dividend / divider;  
    
   //Scenario: Dividing numbers result in a decimal number.


   //Scenario: Validation when values are missing.


   //Scenario: An invalid division should log an error in the console.


   //Scenario: Providing anything that is not a number should crash the program.


  });