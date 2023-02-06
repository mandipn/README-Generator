// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  
  ${data.title}, 
  ${data.describe},
  ${data.install},
  ${data.usage},
  ${data.guidelines},
  ${data.testinst}  


`;
}

module.exports = generateMarkdown;
