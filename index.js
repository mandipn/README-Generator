const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeToFile = util.promisify(fs.writeFile);
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
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'None']
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
              {
                type: 'input',
                message: 'Please enter your GitHub username',
                name: 'github',
              },
              {
                type: 'input',
                message: 'Please enter your email address',
                name: 'email',
              },
  ])

  .then((answers) => {
    
    switch (answers.license) {

        case 'Apache License 2.0':
        licenseselected = "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;  
        case 'GNU General Public License v3.0':
        licenseselected = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;      
        case 'MIT License':
        licenseselected = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
        case 'Boost Software License 1.0':
        licenseselected = "[![License: MIT](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://opensource.org/licenses/bsl1-0)";
        break;     
        case 'Mozilla Public License 2.0':
        licenseselected = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
        break;
        default:
        licenseselected = "Check your License!";
    };
  writeToFile('README.md', generateMarkdown(answers))
  .then(() => console.log('Successfully wrote to README file'))
  .catch((err) => console.error(err))
    });

promptUser()