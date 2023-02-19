function generateMarkdown(data) {
  return ` 

  # Title of the project: ${data.title} 

  ## Table of Contents  

* [Project description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributig](#Guidelines)
* [Tests](#Testing)
* [Contact Details](#Contacts)
  
  ### Description ${data.describe}

  ### Installation ${data.install}
  
  ### Usage ${data.usage}  

  ### License ${licenseselected}
  
  ### Guidelines ${data.guidelines}
  
  ### Testing ${data.testinst}  

  ### Contacts ${data.contact}  

 `;
}

module.exports = generateMarkdown;

console.log (generateMarkdown)
