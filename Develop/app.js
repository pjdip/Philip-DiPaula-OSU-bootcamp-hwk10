const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeList = [];
const roles = ["Manager", "Engineer", "Intern", "Finished Building Team"];

const employeeBasics = [
    {
        type: 'input',
        message: "What is team member's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team member's ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team member's email? ",
        name: 'email',
    },
];

const managerInfo = [
    {
        type: 'input',
        message: "What is the manager's office number? ",
        name: 'officeNumber',
    }
];

const engineerInfo = [
    {
        type: 'input',
        message: "What is the engineer's github username? ",
        name: 'github',
    }
];

const internInfo = [
    {
        type: 'input',
        message: "What is the intern's school's name? ",
        name: 'school',
    }
];

const roleChoice = [
    {
        type: 'list',
        message: 'Please choose a new member role to add to your team:',
        choices: roles,
        name: 'role',
    }
];

const newEmployee = role => {
    if (role === "Manager") {
        const questions = employeeBasics.concat(managerInfo);
        inquirer
            .prompt(questions)
            .then(response => {
                teamManaged = true;
                const squadLeader = new Manager(response.name, response.id, respone.email, response.officeNumber);
                employeeList.push(squadLeader);
            });
    } else if (role === "Engineer") {
        const questions = employeeBasics.concat(engineerInfo);
        inquirer
            .prompt(questions)
            .then(response => {
                const squadEngineer = new Engineer(response.name, response.id, response.email, response.github);
                employeeList.push(squadEngineer);
            });
    } else if (role === "Intern") {
        const questions = employeeBasics.concat(internInfo);
        inquirer
            .prompt(questions)
            .then(response => {
                const squadIntern = new Intern(response.name, response.id, response.email, response.school);
                employeeList.push(squadIntern);
            });
    }
}

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
    let buildingTeam = true;
    let teamManaged = false;
    while (buildingTeam === true) {
        inquirer
            .prompt(roleChoice)
            .then(response => {
                if (response.role === "Finished Building Team") {
                    buildingTeam = false;
                } else if (teamManaged === true) {
                    console.log("This team already has a manager");
                } else {newEmployee(response.role)}
            });
    }
    fs.writeFile('./output/team.html', render(employeeList), (err) => 
        err ? console.error(err) : console.log('team page created!'));
}

init();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

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
