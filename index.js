// TODO: Include packages needed for this application (fs, inquirer, maybe path)
const fs = require('fs');
const {prompt} = require('inquirer');
const path = require('path');

// create generateMarkdown var
var generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type in your description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is it used?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the tests?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licence would you like to include?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub name?'
    }
];

// TODO: Create a function to write README file, name of file created
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName),data)
// add function path.join with outputDir/fileName
}

// TODO: Create a function to initialize app
function init() {
    prompt(questions)
    .then(answers => {
        writeToFile('README.md', generateMarkdown(answers))
        // console.log(answers.description)
    })
}

// Function call to initialize app
init();
