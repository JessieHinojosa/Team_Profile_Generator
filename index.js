const fs = require('fs');
const inquirer = require('inquirer');
// const Question = require("./lib/Questions");
const Employee = require("./lib/Employee");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHtml = require('./utils/generateHtml')

let team = [];

 const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the engineer\'s id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s Github username?'
        }
    ]).then(({name, id, email, github}) => {
        team.push(new Engineer(name, id, email, 'Engineer', github));
        actionMenu();
    }); 
    
}

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the team managers Name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is the team managers id number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email?'
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is the team managers office number?'
        }
    ]).then(({managerName, managerId, managerEmail, managerOffice}) => {
       team.push(new Manager(managerName, managerId, managerEmail, 'Manager', managerOffice));
       actionMenu();
    })
    
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the intern\'s id number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Which school did the intern attend?'
        }
    ]).then(({name, id, email, school}) => {
       team.push(new Intern(name, id, email, 'Intern', school))
       console.log(team)
       actionMenu();  
    }); 
}

const actionMenu = () =>  {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'action',
            message: 'Which action do you want to perform',
            choices: ['Add an Engineer', 'Add an intern', 'Finish Team']
        }
    ]).then(({action}) => {
        let convertString = action.toString();
        switch(convertString) {
            case 'Add an Engineer':
                createEngineer();
                break;
            
            case 'Add an intern':
                createIntern();
                break;
                
            case 'Finish Team':
                generateHtml(team);
                break;

            default:
                actionMenu();
                            
                        }
    })
}    

createManager();










// const employeeData = () => {
    //      return new Promise((resolve, reject) => {
        //         new Question().employeeInfo()
        //          if (true) {
            //              resolve();
            
//          }
//          reject("rejected");

//     })
// }
// const github = () => {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve(new Question().githubInput())
//         }
//         reject("rejected");
//     })
// }
// const school = () => {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve(new Question().schoolInput())
//         }
//         reject("rejected");
//     })
// }
// const createManager = () => {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             resolve(new Question().managerInfo())
//         }
//         reject("rejected");
//     })
 
// }

// const createEmployee = async () => {
//     // let managerBasicInfo = await createManager();
//     let employeeBasicInfo = await employeeData();
//     // let engineerExtraInfo = await github();
//     // let internExtraInfo = await school();
//     // return basicInfo;
// }
// console.log(createEmployee());