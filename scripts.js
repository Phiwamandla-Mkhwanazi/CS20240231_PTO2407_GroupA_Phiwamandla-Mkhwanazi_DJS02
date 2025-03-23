"use strict";

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  try
  {
  
  //Get input values.
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //Scenario: Validation when values are missing.
  if (!dividend || !divider) 
  {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  //Scenario: Providing anything that is not a number should crash the program.
  if (isNaN(dividend) || isNaN(divider)) 
  {
        throw new Error("Non-numeric input provided.");
  }

  //Scenario: An invalid division should log an error in the console.
  if (Number(divider) === 0) {
    console.error("Division not performed. Invalid number provided. Try again");
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }

  //Scenario: Dividing numbers result in a whole number.
  result.innerText = dividend / divider;  
      
  
  //Scenario: Dividing numbers result in a decimal number.
  
  }
  catch(error)
  {
    console.error(error);
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
  }

});