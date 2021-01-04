const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamManaged = false;

const employeeList = [];
const roles = ["Manager", "Engineer", "Intern", "Finished Building Team"];

// Questions for every employee, regardless of role
const employeeBasics = [
    {
        type: 'input',
        message: "What is the team member's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team member's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team member's email?",
        name: 'email',
    },
];

// Unique questions dependent on employee role
const managerInfo = [
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'officeNumber',
    }
];

const engineerInfo = [
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'github',
    }
];

const internInfo = [
    {
        type: 'input',
        message: "What is the intern's school's name?",
        name: 'school',
    }
];

// Primary Inquirer Prompt
const roleChoice = [
    {
        type: 'list',
        message: '\nPlease choose a new member role to add to your team:',
        choices: roles,
        name: 'role',
    }
];

// Employee object factory function
// Depending on the chosen role, we manipulate the questions array
// Create the employee object and push it to the employee list
// Then prompt for adding more employees
const newEmployee = role => {
    if (role === "Manager") {
        const questions = employeeBasics.concat(managerInfo);
        inquirer
            .prompt(questions)
            .then(response => {

                // set this tracker variable once the team has a manager
                teamManaged = true;
                const squadLeader = new Manager(response.name, response.id, response.email, response.officeNumber);
                employeeList.push(squadLeader);
                init();
            });
    } else if (role === "Engineer") {
        const questions = employeeBasics.concat(engineerInfo);
        inquirer
            .prompt(questions)
            .then(response => {
                const squadEngineer = new Engineer(response.name, response.id, response.email, response.github);
                employeeList.push(squadEngineer);
                init();
            });
    } else if (role === "Intern") {
        const questions = employeeBasics.concat(internInfo);
        inquirer
            .prompt(questions)
            .then(response => {
                const squadIntern = new Intern(response.name, response.id, response.email, response.school);
                employeeList.push(squadIntern);
                init();
            });
    }
}

// This is the heavy lifting function of our application
// It prompts the user to add members to the team until
// There is at least a manager
function init() {
    inquirer

        // Prompt the user to choose a team member role or end team building
        .prompt(roleChoice)
        .then(response => {
            switch (response.role) {

                // If user chooses to end team building, verify the team has a manager
                case 'Finished Building Team':

                    // Alert user if there is no manager and prompt for more team members
                    if (teamManaged === false) {
                        console.log("\n This team has no manager yet");
                        init();
                    
                    // If there is a manager, render all the employee info to html and create the team.html file
                    } else {
                        fs.writeFile(outputPath, render(employeeList), (err) => 
                            err ? console.error(err) : console.log('team page created!'));
                    }
                    break;

                // If user chooses an employee role
                default:

                    // Make sure there is only 1 manager
                    if (response.role === "Manager" && teamManaged === true) {
                        console.log("\n This team already has a manager");
                        init();

                    // Generate a new employee object based on chosen role
                    } else {newEmployee(response.role)}
            }
        });
}

init();