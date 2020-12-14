const fs = require("fs");
const inquirer = require("inquirer");
const generateIndex = require("./src/index-template")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: `What is the team manager's name?`,
        pvalidate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: `Enter the manager's employee id.`,
        pvalidate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an id');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the manager's email.`,
        pvalidate: emailInput => {
          if (emailInput.includes('@')) {
            return true;
          } else {
            console.log('Please enter an email');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'phone',
        message: `Enter the manager's phone number.`,
        pvalidate: phoneInput => {
          if (phoneInput) {
            return true;
          } else {
            console.log('Please enter a phone number');
            return false;
          }
        }
    },
];

const promptManager = () => {
    console.log(`
  ==================
   Employee Stalker
  ==================
  `);
    return inquirer.prompt(managerQuestions)
        .then(managerData => {
            console.log(managerData)
            teamMembers.push(new Manager(managerData.name, managerData.id, managerData.email, managerData.phone));
        });
};
const promptAddMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Add a member to the team.',
            choices: ['Engineer', 'Intern', 'Finish building team']
        }
    ])
    .then(choice => {
        if (choice.add === 'Engineer') {
            return addMember(choice.add)
            .then(employeeData => {
                teamMembers.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github))
                return promptAddMember();
            })
        } else if (choice.add === 'Intern') {
            return addMember(choice.add)
            .then(employeeData => {
                teamMembers.push(new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.github))
                return promptAddMember();
            })
        } else {
            return;
        }
    })
}; 
const addMember = prompt => {
    const employeeQuestions = [
        {
            type: 'input',
            name: 'name',
            message: `What is the ${prompt}'s name?`,
            avalidate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter a name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter the ${prompt}'s id.`,
            avalidate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter an id');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter the ${prompt}'s email.`,
            avalidate: emailInput => {
              if (emailInput.includes('@')) {
                return true;
              } else {
                console.log('Please enter an email');
                return false;
              }
            }
        },
        
    ];
    if (prompt === 'Engineer') {
        employeeQuestions.push(
            {
                type: 'input',
                name: 'github',
                message: `What is the Engineer's github?`,
                avalidate: githubInput => {
                  if (githubInput) {
                    return true;
                  } else {
                    console.log('Please enter a github username!');
                    return false;
                  }
                }
            }
        )
    } else {
        employeeQuestions.push(
            {
                type: 'input',
                name: 'school',
                message: `What is the Intern's school?`,
                avalidate: schoolInput => {
                  if (schoolInput) {
                    return true;
                  } else {
                    console.log(`Please enter the intern's school!`);
                    return false;
                  }
                }
            }
        )
    };
    return inquirer.prompt(employeeQuestions)
}

promptManager()
    .then(promptAddMember)
    .then( () => {
        console.log('finnished!!!');
        console.log(teamMembers)
    })