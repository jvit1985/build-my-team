const inquirer = require('inquirer');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const fs = require('fs');

const generatePageTemplate = require('./src/page-template');

const employees = [];

const managerQuestions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter the manager's ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log("Please enter manager's office number!");
                return false;
            }
        }
    },
]).then(({ name, id, email, officeNumber }) => {
    const newManager = new Manager (name, id, email, officeNumber)
    employees.push(newManager);
    makeTeam();
});
};

const makeTeam = () => {
    inquirer.prompt([
        {
            type:'list',
            name: 'role',
            message:'Select a team member',
            choices: ['Engineer', 'Intern', 'Done adding team members']
        },
    ]).then((answers) => {
        switch(answers.role) {
            case 'Engineer':
                engineerQuestion()
                break;
            case 'Intern':
                internQuestion()
                break;
            case 'Done adding team members':
                fs.writeFileSync('dist/index.html', generatePageTemplate(employees));
        }
    });
};

const engineerQuestion = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's Github Username?",
            validate: githubUserName => {
                if (githubUserName) {
                    return true;
                } else {
                    console.log('Please enter the Github Username!');
                    return false;
                }
            }
        }
    ]).then(({name, id, email, github}) => {
        const newEngineer = new Engineer (name, id, email, github);

        employees.push(newEngineer);

        makeTeam();
    });
};

const internQuestion = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this intern attend?",
            validate: schoolName => {
                if (schoolName) {
                    return true;
                } else {
                    console.log('Please enter the school name!');
                    return false;
                }
            }
        }
    ]).then(({ name, id, email, school }) => {
        const newIntern = new Intern (name, id, email, school);

        employees.push(newIntern);

        makeTeam();
    });   
};

managerQuestions();