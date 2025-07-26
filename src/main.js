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
    /***
     * TODO:
     * Create the basic calculator logic. 
    */

    switch (button.dataset.type) {
      case "num":
        const value = button.dataset.value;

        if (mainDisplay.value.includes(".")
         && value === ".")
          break;

        if (mainDisplay.value === "0" && value === "."){
          mainDisplay.value += value;
          break;
        }

        if (mainDisplay.value === "0"){
          mainDisplay.value = value;
          break;
        }

        mainDisplay.value += value;
        break;
      case "op":
        /***
         * TODO: 
         * Write the logic that handles appending
         * operators to the expression. 
        ***/
        const operator = button.dataset.value;

        mainDisplay.value = "0";
        break;
      case "clear":
        mainDisplay.value = "0";
        expressionDisplay.value = "";
        break;
      case "equals":
        /***
          * TODO: 
          * Write the logic that evaluates the
          * expression and displays the answer to
          * the main display.
          ***/
        break;
      case "sign":
        if (mainDisplay.value !== "0") {
          if(mainDisplay.value.startsWith('-')) {
            mainDisplay.value = mainDisplay.value.slice(1);
          } else {
            mainDisplay.value = '-' + mainDisplay.value;
          }
        }
        break;
      default:
        alert(button.dataset.type);
        break;
    }
  });
})

