const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require ('./utils/generateMarkdown')

const promptUser = () =>
  inquirer.prompt([
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
                type: 'list',
                message: 'Please select the license you require from the below list',
                name: 'license',
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 2.0', 'Mozilla Public License 2.0', 'None']
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
  ]);

// const getlicenselogo(License) => {

//   switch(License)

// }

promptUser()
  .then((answers) => writeFileAsync('readme.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to README file'))
  .catch((err) => console.error(err));




// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

//     inquirer.prompt(questions).then(function(userEntry) {

//     const markdownString = generateMarkdown(userEntry)

// }

// // function call to initialize program
// init();
