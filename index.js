// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?', 
    'Describe your project, including your motivation for starting it, the problem you are solving, and what you learned', 
    'What are the installation steps required to run the project?', 
    'Describe the anticipated usage for the project', 
    'Please add the full name of anyone that contributed to this project', 
    'What license is your project is covered under?', 
    'What is your email address?',
    'Include a link to your deployed application if one exists'
]

const licenses = ['Apache license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Creative Commons Zero', 'Creative Commons Zero v1.0 Universal', 'Creative Commons Attribution 4.0', 'Creative Commons Attribution ShareAlike 4.0', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0', 'GNU Lesser General Public License v3.0', 'IBM v1.0', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'The Perl License', 'SIL Open Font License 1.1', 'The Unlicense', 'zLib License']

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator(data), (err) => {
        err ? console.log(err) : console.log(`Success!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributors'
        },
        {
            type: 'list',
            message: questions[5],
            name: 'license',
            choices: licenses
        },
        {
            type: 'input',
            message: questions[6],
            name: 'email'
        },
        {
            type: 'input',
            message: `${questions[8]} If not, enter 'N/a'!`,
            name: 'applink',
            default: 'N/a'
        },
    ])
        .then((response) => {
            writeToFile('customREADME.md', response)
        })
}

// Function call to initialize app
init();
