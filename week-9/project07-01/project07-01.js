"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Robert King
      Date:   October 12, 2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");
    //Prevent form from submitting until all criteria ar met
    e.preventDefault();

    //Variable that checks for uppercase letters
    let regex1 = /[A-Z]/;
    //Variable that checks for numbers
    let regex2 = /[0-9]/;
    //Variable that checks for symbols
    let regex3 = /[!$#%]/;

//Password(pwd) length must be at least 8 characters long
if(pwd.length < 8) {
    feedback.textContent = "Your password must be at least 8 characters";
    //Password(pwd) must include at least one uppercase letter
    } else if (regex1.test(pwd) === false) {
        feedback.textContent = "Your password must include an upper case";
    //Password(pwd) must include at least one number
    } else if (regex2.test(pwd) === false) {
        feedback.textContent = "Your password must include a number";
    //Password(pwd) must include at least one specified symbol
    } else if (regex3.test(pwd) === false) {
      feedback.textContent = "Your password must include one of the following: !$#%";
    } else {
        //Submit form for processing if password validation meets requirements
        signupForm.submit();
    }
  }
);