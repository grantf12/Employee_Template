const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const team = [];
// Function to add Members
function addMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What is the Employee's role?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
      if (`${response.role}` === "Manager") {
        addManager();
      }
      if (`${response.role}` === "Engineer") {
        addEngineer();
      }
      if (`${response.role}` === "Intern") {
        addIntern();
      }
    });
}
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee's Name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Employee's Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Employee's Office Number?",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Would you like to add a team member?",
        name: "anotherOne",
        choices: ["Yes", "No"],
      },
    ])
    .then((responseM) => {
      const newManager = new Manager(
        responseM.name,
        responseM.id,
        responseM.email,
        responseM.officeNumber
      );

      team.push(newManager);

      if (responseM.anotherOne === "Yes") {
        addMember();
      } else {
        renderStuff();
      }
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee's Name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Employee's Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Employee's Github account?",
        name: "github",
      },
      {
        type: "list",
        message: "Would you like to add a team member?",
        name: "anotherOne",
        choices: ["Yes", "No"],
      },
    ])
    .then((responseE) => {
      const newEngineer = new Engineer(
        responseE.name,
        responseE.id,
        responseE.email,
        responseE.github
      );

      team.push(newEngineer);

      if (responseE.anotherOne === "Yes") {
        addMember();
      } else {
        renderStuff();
      }
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Employee's Name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Employee's Email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Employee's school?",
        name: "school",
      },
      {
        type: "list",
        message: "Would you like to add a team member?",
        name: "anotherOne",
        choices: ["Yes", "No"],
      },
    ])
    .then((responseI) => {
      const newIntern = new Intern(
        responseI.name,
        responseI.id,
        responseI.email,
        responseI.school
      );
      team.push(newIntern);

      if (responseI.anotherOne === "Yes") {
        addMember();
      } else {
        renderStuff();
      }
    });
}
addMember();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
function renderStuff() {
  const teamArray = render(team);
  fs.writeFile(outputPath, teamArray, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
