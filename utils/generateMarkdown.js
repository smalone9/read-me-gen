// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function badge(data) {
const licenseType = data.license[0];
// badge information
// TODO: Create a function that returns the license link
let licenseString = " "
if (licenseType === 'MIT'){
  licenseString === `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
};
if (licenseType === 'Apache 2.0'){
  licenseString === `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
};
if (licenseType === 'GPL 3.0'){
  licenseString === `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
};
if (licenseType === 'BSD3'){
  licenseString === ``
};
// // If there is no license, return an empty string
if (licenseType === 'None'){
  licenseString === `![License: 'None'}](http://img.shields.io/badge/License-None)`
};
return licenseString
}
// // TODO: Create a function to generate markdown for README add template literals, add table of contents
function generateMarkdown(data) {
  return `# ${data.name}
# Table of Contents: 
  [Title](#title)
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contribution](#contributors)
  [Tests](#test)
  [Questions](#questions)
  [License(#license)
  [Email](#email)
  [GitHub](#github)

# Title: 
${data.title}

# Description:
${data.description}
---
# Installation:
${data.installation}

# Usage:
${data.use}

# Contribution:
${data.contributors}

# Tests:
${data.test}

# Questions:
${data.questions}

# License:
${badge(data)}

# Email:
${data.email}

# GitHub:
${data.github}`
}

module.exports = generateMarkdown;
