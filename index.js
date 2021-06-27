// TODO: Include packages needed for this application (fs, inquirer, maybe path)
const fs = require('fs');
const {prompt} = require('inquirer');
const path = require('path');

// create generateMarkdown var
var generateMarkdown = require('./utils/generateMarkdown.js');

// const writeToFile = (fileName, data) => {
//     let rmObject = {}
//     do {
//         const { rmUser, rmRepo } = prompt([
//            {
//             type: 'input',
//             name: 'rmUser',
//             message: 'What is your GitHub User name?'
//            },
//            {
//                type: 'input',
//                name: 'rmRepo',
//                message: 'What is your Repo name?'
//            }
//         ])
//         rmObject = await applicationCache.getUser(rmUser, rmRepo)
//         if (!rmObject) {
//             console.error('Repo Not Found!')
//         } else {
//             console.log(`${rmObject.fullName} found!`)
//         }
//     } while (!rmObject)
// };
// TODO: Create an array of questions for user input
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
        type: 'list',
        name: 'license',
        message: 'Which licence would you like to include?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD3', 'None']
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
    }
];

// TODO: Create a function to write README file, name of file created
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName),data)
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
