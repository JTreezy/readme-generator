const fs = require('fs');
const inquirer = require('inquirer');


inquirer
  .prompt([{
    type: "input",
    message: "What is your name of your project?",
    name: "title",
  },{
    type: "input",
    message: "Provide a short description to explain the project's what's, why's, and how's.",
    name: "description",
  },{
    type: "input",
    message: "How do you install your application?",
    name: "installation",
  },{
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },{
    type: "list",
    choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
    message: "What license do you want for this repository?",
    name: "license",
  },{
    type: "input",
    message: "How can people contribute to your project?",
    name: "contributing",
  },{
    type: "input",
    message: "How do people update the tests for your projects?",
    name: "tests",
  },{
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },{
    type: "input",
    message: "What is your email address where users and contributors can send questions?",
    name: "email",
  },
  ])
  .then((answers) => {
    let badge = ""
    switch (answers.license) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            break;
        case "GNU General Public License 2.0":
            badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)" 
            break;
        case "Apache License 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            break;
        case "GNU General Public License 3.0":
            badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
            break;
    }
    const content = `# ${answers.title}
## Description 
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Github](#github)
- [E-Mail](#email)

## Installation <a name="installation"></a>
${answers.installation}
## Usage Information
${answers.usage}
## License
${answers.license}${badge}
## Contributions
${answers.contributing}
## Tests
${answers.tests}
## Questions
${answers.github}
${answers.email}
`
    
      fs.writeFile(`./README.md`, content, err =>{
        if(err){
            console.error(err)
            return
        }
      })
    })