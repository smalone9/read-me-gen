// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function badge(data) {
const licenseType = data.license[0];
// badge information
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
if (licenseType === 'None'){
  licenseString === ``
};
return licenseString
}
// TODO: Create a function that returns the license link
![License: ${(data.license)data.license 'None'}](http://img.shields.io/badge/License-${(data.lic) ? data.license : 'None'})
// // If there is no license, return an empty string
function renderLicenseLink(license) {
Repo by ${data.name}
// // TODO: Create a function that returns the license section of README
${data.description}
}
// // If there is no license, return an empty string
function renderLicenseSection(license) {
---
Installation:
${data.installation}
}
// // TODO: Create a function to generate markdown for README add template literals, add table of contents
Usage:
${data.use}
function generateMarkdown(data) {
__Contribution:__
${data.contributors}

__Tests:__
${data.test}

__Questions:__
${data.questions}
  return `# ${data.title}
}`

module.exports = generateMarkdown;
