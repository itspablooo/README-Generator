// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please wirte a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: ''
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
        message: ''
    },
    {
        type: 'input',
        name: 'test',
        message: ''
    },
    {
        type: 'input',
        name: 'questions',
        message: ''
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();