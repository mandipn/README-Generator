const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    .prompt([

        {
          type: 'input',
          message: 'Please enter the title of your project',
          name: 'title',
          },
        {
          type: 'input',
          message: 'Please describe your project',
          name: 'describe',
        },
        {
          type: 'input',
          message: 'Please enter the installation instructions for your project',
          name: 'install',
        },
        {
          type: 'input',
          message: 'Please enter the usage information for your project',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Please enter the contribution guidelines for your project',
          name: 'guidelines',
        },
        {
          type: 'input',
          message: 'Please enter the test instructions for your project',
          name: 'testinst',
        },
            
      ])

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
