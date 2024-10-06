"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Robert King
      Date:   October 6, 2024

      Filename: project06-03.js
*/

/*Declare useShip variable*/
let useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

/*Function for copyShippingToBilling*/
function copyShippingToBilling() {
    if (useShip.checked) {
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    }
}

/*Declare formElements variable*/
let formElements = document.querySelectorAll("input[type='text']");

/*Declare fieldCount variable*/
let fieldCount = formElements.length;

/*Declare errorBox referencing Id(errorBox)*/
let errorBox = document.getElementById("errorBox");

/*For loop that iterates through formElements and applies event listeners*/
for(let i = 0; i < fieldCount; i++) {
    formElements[i].addEventListener("invalid", showValidationError);
}

/*showValidationError(evt) function*/
function showValidationError(evt) {
    evt.preventDefault();
    errorBox.textContent = "Complete all highlighted fields";
}