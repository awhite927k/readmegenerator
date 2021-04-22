// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === "Apache license 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  }
  else if (license === "GNU VPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  }
  else if (license === "Boost Software License 1.0") {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  }
  else if (license === "The Unlicense") {
    return "https://choosealicense.com/licenses/unlicense/"
  }
  else if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  }
  else { return "" }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let notApplicable = ['N/A', 'N/a', 'n/a', 'n/A', 'NA', 'na']
  if(notApplicable.includes(data.appLink)){
    data.deployedLink = 'N/a';
  } 

  data.contributors = data.contributors.split(' ');
  let teamMems = '';
  for(let i = 0; i < data.contributors.length; i++){
      if(i === data.contributors.length-1){
          teamMems += `${data.contributors[i]}`;
          break;
      }
      teamMems += `${data.contributors[i]}\n`
  }

  // let licenseSection = renderLicenseSection(data.license);
  // let licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}
## Deployed Site Link 
${data.applink}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Conrtibutors](#contributors)
- [Contact Information](#email)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
\`\`\`
${teamMems}
\`\`\`
## Contact Information
Contact information included below if you'd like to ask me any questions about this project!
- Email: ${data.email}`
}

module.exports = generateMarkdown;
