'use strict'

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const course = document.getElementById('course');
const lastname = document.getElementById('lastname');
const gender = document.getElementById('gender');
const contact = document.getElementById('phone');
const address = document.getElementById('current-address');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const allError = document.querySelectorAll('small');
const male = document.getElementById('Male');
const female = document.getElementById('Female');
const other = document.getElementById('Other');



let firstnameState = true;
let middlenameState = true;
let lastnameState = true;
let courseState = true;
let genderState = true;
let contactState = true;
let addressState = true;
let emailState = true;
let passwordState = true;
let password2State = true;



const empty = /\s+/g;
const checkForName = (input) => {
    switch (input) {
        case firstname:
        case middlename:
        case lastname:
            firstnameState = !empty.test(input.value) && /[a-zA-Z]{3,20}/g.test(input.value);
            firstnameState || errorDisplay(input);
            console.log('firstname triggered');
            return firstnameState
        case course:
            courseState = course.value === 'socialstudies' || course.value === 'computerscience';

            courseState || errorDisplay(input)('please select a course!');
            console.log('here');
            console.log(course.value);
            console.log('here');
            return firstnameState
        case gender:
            genderState = male.checked || female.checked || other.checked || false;
            genderState || document.getElementById('Other').nextElementSibling.setAttribute('style', 'visibility:visible;');
            console.log('gender state');
            return contactState
        case email:
            emailState = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
            emailState || errorDisplay(input);
            console.log('mail');
            return emailState

        case contact:
            contactState = /[0-9]{7,20}/g.test(input.value);
            contactState || errorDisplay(input);
            console.log('tel');
            return contactState

        case password:
            passwordState = !empty.test(input.value) && /[a-zA-Z0-9]{8,20}/g.test(input.value);
            passwordState || errorDisplay(input);

            return passwordState
        case password2:


            if (password2.value !== password.value) {
                errorDisplay(input)(`passwords don't match babe!`)
                password2State = false;
            } else if (password2.value === password.value && !empty.test(input.value) && /[a-zA-Z0-9]{8,20}/g.test(input.value)) {
                password2State = true;
            }
            // password2.value !== password.value ? errorDisplay(input)(`passwords don't match babe!`) : password2.value === password.value ?:;
            // passwordState || errorDisplay(input);
            // password2.value !== password.value || errorDisplay(input)(`passwords don't match babe!`)
            return password2State





    }

}


const errorDisplay = (input) => {

    input.nextElementSibling.setAttribute('style', 'visibility:visible;');
    return function (message) {
        input.nextElementSibling.innerHTML = message;
    }

}
const logInfo = () => {
    console.log(`
this user's details are as below:
First name:${firstname}
Middle name:${middlename}
course of study:${course}
last name:${lastname}
gender:${gender}
phone number:${contact}
address:${address}
email address:${email}
password${password}

`);
}
form.addEventListener('submit', e => {
    e.preventDefault();

    allError.forEach(element => {
        element.setAttribute('style', 'visibility:hidden;')
    });
    console.log('submitted');
    checkForName(firstname);
    checkForName(middlename);
    checkForName(lastname);

    checkForName(email);
    checkForName(contact);
    checkForName(password);
    checkForName(password2);
    checkForName(course);
    checkForName(gender);
    firstnameState && middlenameState && lastnameState && courseState && genderState && contactState && addressState && emailState && passwordState && password2State && logInfo();

    // checkInputs();
});
// const checkForName = (input) => {
//     return !empty.test(input.value) && /[a-zA-Z]{3,20}/g.test(input.value)

// }