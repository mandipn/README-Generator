// function to generate markdown for README
function generateMarkdown(data) {
  return ` 

  ## Table of Contents
* [Project description](#description:)
* [Installation](#installation:)
* [Usage](#usage:)
* [Contributig](#Contribution guidelines for your project)
* [Tests](#test)
* [Contact Details](#contact-details)
* [License](#license)
  
  # Title of the project: ${data.title} 

  ## Description of the project: ${data.describe}

  ## Installation instructions of the project: ${data.install}
  
  ## Usage information of the project: ${data.usage}

  ## ${licenseselected}
  
  ## Contribution guidelines for your project: ${data.guidelines}
  
  ## Test instructions of the project: ${data.testinst}  

  ## Contact details in case of any queries for the project: ${data.contact}  

  ## Contact details in case of any queries for the project: ${data.license}  
`;
}

module.exports = generateMarkdown;

console.log (generateMarkdown)
