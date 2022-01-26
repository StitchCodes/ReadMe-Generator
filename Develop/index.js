// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["Proyect Name: ", "Description: ", "Contents: ", "Installation: ", "Usage: ", "License: ", "Contributors: ", "Tests: ", "Questions: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  console.log("We are ready to generate your ReadMe. Please answer a few questions");

  inquirer
  .prompt([
    {
      name:"title",
      message: questions[0]
    },
    {
      name:"description",
      message: questions[1]
    },
    {
      name:"contents",
      message: questions[2]
    },
    {
      name:"installation",
      message: questions[3]
    },
    {
      name:"usage",
      message: questions[4]
    },
    {
      name:"license",
      message: questions[5]
    },
    {
      name:"contributing",
      message: questions[6]
    },
    {
      name:"tests",
      message: questions[7]
    },
    {
      name:"questions",
      message: questions[8]
    }
  ])
  .then((answers) => {
    writeToFile("README.md", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error. Try again.")
    } else {
      console.log(error, "Error. We couldn't process your request")
    }
  });

}

// 
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// Function call to initialize app
init();