const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {type: "input", message: "What is the project title?", name: "title"},
    {type: "input", message: "Write a description of your project", name: "description"},
    {type: "input", message: "How can I install your project?", name: "install"},
    {type: "input", message: "How do I use your project?", name: "usage"},
    {type: "list", message: "Which license would you like to use?", name: "license", 
    choices: ["Apache License 2.0", "GNU General Public License v3.0",
    "MIT License", "BSD 2-Clause 'Simplified' License",
    "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0",
    "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0",
    "GNU Affero General Public License v3.0", "GNU General Public License v2.0",
    "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0",
    "The Unlicense"]},
    {type: "input", message: "What are your guidelines for contributing to this project?", name: "contribute"},
    {type: "input", message: "What are the test instructions?", name: "testing"},
    {type: "input", message: "What is your GitHub username?", name: "github"},
    {type: "input", message: "What is your email address?", name: "email"}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const readme = generateMarkdown(response);
        writeToFile('projectREADME.md', readme);
    });
}

// function call to initialize program
init();
