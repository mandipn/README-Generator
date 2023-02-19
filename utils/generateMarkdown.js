function generateMarkdown(data) {
  return ` 

  # Title of the project: ${data.title} 

  ## Table of Contents  

* [Project description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Guidelines)
* [Tests](#Testing)
* [GitHub](#GitHub)
* [Email](#Email)
  
  ### Description ${data.describe}

  ### Installation ${data.install}
  
  ### Usage ${data.usage}  

  ### License ${licenseselected}
  
  ### Guidelines ${data.guidelines}
  
  ### Testing ${data.testinst}  

  ### GitHub [${data.github}](https://github.com/${data.github}/)  

  ### Email [${data.email}](mailto:${data.email})  

 `;
}

module.exports = generateMarkdown;

console.log (generateMarkdown)
