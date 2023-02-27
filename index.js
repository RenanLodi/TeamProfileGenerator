const inquirer = require("inquirer");
const fs = require ("fs");
const path = require('path');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');

const generateTeam = require("./src/template");

const teamArray = [];

const addManager = () => {
    inquirer.prompt([
      {
          type: 'Input',
          name: 'ManagerName',
          message: 'Enter your Manager name',
          validate: value => {
              if (value) {
                  return true;
              } else {
                  console.log('Please enter the name');
                  return false;
              }
          }
      },
      {
          type: 'Number',
          name: 'ManagerID',
          message: 'Enter your Manager ID',
          validate: value => {
              if (isNaN(value)) {
                  console.log('Enter the number above 0')
                  return false
              }
                  return true;
          }
      },
      {
          type: 'Input',
          name: 'ManagerEmail',
          message: 'Enter your Manager email',
          validate: value => {
              if (value) {
                  return true;
              } else {
                  console.log('Please enter the email');
                  return false;
              }
          }
      },
      {
          type: 'Number',
          name: 'ManagerOfficeNumber',
          message: 'Enter your Manager Office Number',
          validate: value => {
              if (isNaN(value)) {
                  console.log('Enter the number above 0')
                  return false
              }
                  return true;
              }
  
      }
    ]).then((answers) => {
      const manager = new Manager(answers.ManagerName, answers.ManagerID, answers.ManagerEmail, answers.ManagerOfficeNumber);
          teamArray.push(manager);
          console.log(manager);
          addTeam();
    });

    const addTeam = () =>{
     return inquirer.prompt([{
       type: 'list',
       name: 'memberRole',
       message: 'Add another member in your Team!',
       choices: ['Engineer', 'Intern', 'No more member'],
     }]).then(function (userInput) {
        switch(userInput.memberRole) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
        default: 
          buildTeam();
        }
    });

    function addEngineer(){
    inquirer.prompt([
        {
    type: 'Input',
    name: 'EngineerName',
    message: 'Enter the Engineer name',
    validate: value => {
        if (value) {
            return true;
        } else {
            console.log('Please enter the name');
            return false;
        }
    }},
    {
        type: 'Number',
        name: 'EngineerID',
        message: 'Enter your Engineer ID',
        validate: value => {
            if (isNaN(value)) {
                console.log('Enter the number above 0')
                return false
                }
                return true;
            }
        },
        {
            type: 'Input',
            name: 'EngineerEmail',
            message: 'Enter your Engineer email',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter the email');
                    return false;
                }
            }
    
    
        },
        {
            type: 'Input',
            name: 'EngineerGithub',
            message: 'Enter your Github Username',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter the username');
                    return false;
                }
            }
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers.EngineerName, answers.EngineerID, answers.EngineerEmail, answers.EngineerGithub);
            teamArray.push(engineer);
            addTeam();
      })
    };

    function addIntern(){
    inquirer.prompt([
        {
    type: 'Input',
    name: 'InternName',
    message: 'Enter the Intern name',
    validate: value => {
        if (value) {
            return true;
        } else {
            console.log('Please enter the name');
            return false;
        }
    }

        },
    {
        type: 'Number',
        name: 'InternID',
        message: 'Enter your Intern ID',
        validate: value => {
            if (isNaN(value)) {
                console.log('Enter the number above 0')
                return false
                }
                return true;
            }
        },
        {
            type: 'Input',
            name: 'InternEmail',
            message: 'Enter your Intern email',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter the email');
                    return false;
                }
            }
    
    
        },
        {
            type: 'Input',
            name: 'InternSchool',
            message: 'Enter your School name',
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter the school');
                    return false;
                }
            }
        },
    ]).then(answers => {
            const intern = new Intern(answers.InternName, answers.InternID, answers.InternEmail, answers.InternSchool);
            teamArray.push(intern);
            addTeam();
      });
    
    }
}
};

function buildTeam () {
    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
    console.log("Team created!")

    
};

addManager()