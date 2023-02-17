const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the project title?",
    "Write a description of your project",
    "How can I install your project?",
    "How do I use your project?",
    "Which license would you like to use?",
    "What are your guidelines for contributing to this project?",
    "What are the test instructions?",
    "What is your GitHub username?",
    "What is your email address?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
