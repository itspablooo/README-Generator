// Import packages needed 
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('./utils/generateMarkdown.js')
// define questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please wirte a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please note installation commands'
    },
    {
        type: 'input',
        name: 'usage',
        message: ''
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your project license',
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause Simplified License',
            'BSD 3-Clause New or Revised License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can developers contibute?'
    },
    {
        type: 'input',
        name: 'test',
        message: ''
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your Github username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your email'
    },
];

// function to write file and log a confirmation message to the console. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README.md successfully generated!')
    });
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        let md = utils.generateMarkdown(answers);
        writeToFile('README.md', md);
    });
};

// Function call to initialize app
init();