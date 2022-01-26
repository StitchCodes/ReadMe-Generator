// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## Contents: ${data.contents}
  ## Run the following commands in your terminal to Install the app: ${data.installation}
  ## To use this app please follow this steps: ${data.usage}
  ## License: ${data.license}
  ## Developed by: ${data.contributing}
  ## The following test were performed to ensure the functinability of this app: ${data.tests}
  ## For questions please reach me at ${data.questions}

`;
}

module.exports = generateMarkdown;
