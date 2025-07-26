/*
 * main.js
 * Written by: Michael Anthony Dollentes
 */


"use strict";

const buttons = document.querySelectorAll("button");
const expressionDisplay = document.getElementById("expression-display");
const mainDisplay = document.getElementById("main-display");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonType = button.dataset.type;
    const buttonValue = button.dataset.value; 

    switch (buttonType) {
      case "num":
        if (mainDisplay.value.includes(".") &&
          buttonValue === ".")
          break;

        if (mainDisplay.value === "0" &&
          buttonValue === "."){
          mainDisplay.value += buttonValue;
          break;
        }

        if (mainDisplay.value === "0"){
          mainDisplay.value = buttonValue;
          break;
        }

        mainDisplay.value += buttonValue;
        break;
      case "sign":
        if (mainDisplay.value === "0") break;

        if (mainDisplay.value.startsWith('-')){
          mainDisplay.value = mainDisplay.value
            .slice(1);
        } else {
          mainDisplay.value = '-' + mainDisplay.
            value;
        }
        break;
      case "op":
        if (mainDisplay.value === "0" &&
          expressionDisplay.value === "") break;

        if (mainDisplay.value === "0") {
          expressionDisplay.value = expressionDisplay
            .value.replace(/[\+\-\×\÷]\s*$/, 
            `${buttonValue} `);
          break;
        }

        expressionDisplay.value += mainDisplay.value
          + ` ${buttonValue} `;
        mainDisplay.value = "0";
        break;
      case "clear":
        expressionDisplay.value = "";
        mainDisplay.value = "0";
        break;
      case "equals":
        break;
      default:
        break;
    }
  });
});
