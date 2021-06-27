// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string

function renderLicenseBadge(license) {
${data.license}
if (license === 'MIT'){
  return 
  // badge information
}
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

module.exports = generateMarkdown
