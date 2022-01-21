// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["Proyect Name: ", "Description: ", "Contents: ", "Installation: ", "Usage: ", "License: ", "Contributing: ", "Tests: ", "Questions: "];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
    const jsonAnsw = console.log(JSON.stringify(answers));
    generateMarkdown(answers);
    writeToFile("README.md", jsonAnsw);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error. Try again.")
    } else {
      console.log("Error. We couldn't process your request")
    }
  });

}

// Function call to initialize app
init();