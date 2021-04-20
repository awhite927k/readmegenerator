// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: "Enter a title for your project:",
    name: 'title',
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("Response required.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Describe your project, including your motivation for starting it, the problem you are solving, and what you learned:",
    name: "description",
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("Response required.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Include any installation requirements:",
    name: 'installation',
  },
  {
    type: 'input',
    message: "Describe how the project is used:",
    name: 'usage',
    validate: function lengthCheck(text) {
        if (text.length < 1) {
            console.log ("Response required.")
        } else {
            return true
        }
    }
  },
  {
    type: 'input',
    message: "Name any contributors here:",
    name: 'contributing',
  },
  {
    type: 'list',
    message: "Please select the license that your application is covered under.",
    choices: ["Apache License 2.0", "Boost Software License 1.0", "GNU General Public License v3.0", "MIT License", "Mozilla Public License 2.0", "None"],
    name: 'license',
  },
  {
    type: 'input',
    message: "What is your email?",
    name: 'email',
    validate: function validEmail(text) {
        if (text.includes('@') && text.includes('.com')){
          return true
        } else {
          console.log( "You must enter a valid email address." )
        }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
