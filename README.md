# Philip-DiPaula-OSU-bootcamp-hwk10

## These are the files for the homework assignment associated with section 10 of the OSU Web Development Bootcamp

Here is a link to the [github](https://github.com/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)

The goal of this assignment was to create a command-line interface (CLI) application that dynamically generates an html file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Specifically, the user will be prompted to enter information about members of a software engineering team, and a summary of each member is displayed on the generated webpage.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Badges](#badges)
* [License](#license)

## Installation

Installation requirements include node.js and inquirer.js
You will find package dependency .json files in github repo that should allow inquirer to work without any further effort on your end. You will need to install node on your own. Installation options for node can be found [here](https://nodejs.org/en/download/)

## Usage 

In order to use this application, first clone the repo to your local machine. Then use the command line to navigate to the Develop folder containing app.js. If you have node installed, you should be able to run the application using the command 'node app.js'. If you have any troubles running the application, try doing 'npm install' from the Develop folder and then try again.

Once the application is initiated, you will be prompted to begin adding members to the team. Begin by choosing the role of the member you are adding. When you are done adding members, choose the option "Finished Building Team." It is important to note that your team must have a manager (you can only add 1 manager) before the application will generate the html. Once you have added a manager, any number of interns and engineers, and chosen the "Finished Building Team" option, the application will output a file called 'team.html' to the output folder (found in the same folder as app.js). When opened in the browser the information for each team member will be displayed, including links to github pages and emails. If you choose to run the application again, any file entitled 'team.html' in that same output folder will be overridden, so be sure to rename/relocate any team.html you would like to save for later before using the application again.

Here are some screenshots:
License List: ![licenseList](./assets/images/licenseList.png)
Editor launch prompt: ![editorPrompt](./assets/images/launchEditor.png)
Vim: ![vim](./assets/images/vimEditor.png)
Sample: ![sample](./assets/images/sample.png)

Here is a link to a video [walkthrough](https://drive.google.com/file/d/1HXtIRh221Ix1JQ-mRPvJ3OlGtJ_MhcSF/view?usp=sharing) which can also be found in the repo on github in the assets folder

## Credits

Special Thanks to Inquirer.js documentation:
* [docs](https://www.npmjs.com/package/inquirer)
* [examples](https://github.com/SBoudrias/Inquirer.js)

Thanks to [jest documentation](https://jestjs.io/docs/en/getting-started)

Thanks to MDN for [switch documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

Special Thanks to [ChilledCow](https://www.youtube.com/channel/UCSJ4gkVC6NrvII8umztf0Ow) for providing chill lofi beats to code to

## Badges

![languages](https://img.shields.io/github/languages/count/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)
![top-language](https://img.shields.io/github/languages/top/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)
![repo-size](https://img.shields.io/github/repo-size/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)
![open-issues](https://img.shields.io/github/issues-raw/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)
![last-commit](https://img.shields.io/github/last-commit/pjdip/Philip-DiPaula-OSU-bootcamp-hwk10)

## License

Licensed under the [GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)

---