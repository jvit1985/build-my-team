const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];

const empQuestions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the employee name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter employee ID',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the employee ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter employee email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the employee email!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's job title?",
        choices: ['Engineer', 'Intern', 'Manager'],
    },
]).then(({ name, id, email, role }) => {
    this.employee = new Employee(name, id, email, role);

    checkRole(role);

});
};

const checkRole = role => {if (role === 'Manager') {
    managerQuestion();
} else if (role === 'Engineer') {
    engineerQuestion();
} else if (role === 'Intern') {
    internQuestion();
} 
};

const managerQuestion = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    },
]).then(({ officeNumber }) => {
    this.officeNumber = new Manager(officeNumber);

    addEmployeeQuestion();
});
};

const engineerQuestion = () => {
    return inquirer.prompt ([
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
    ]).then(({github}) => {
        this.github = new Engineer (github);

        addEmployeeQuestion();
    });
};

const internQuestion = () => {
    return inquirer.prompt ([
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
    ]).then(({ school }) => {
        this.school = new Intern (school);

        addEmployeeQuestion();
    });   
};

const addEmployeeQuestion = () => {
    return inquirer.prompt ([
    {
        type: 'confirm',
        name: 'addEmployee',
        message: "Would you like to add another employee?",
        default: false
    },
]).then(answers => {
    if(answers.addEmployee === true) {
        empQuestions();
    } else {
        //build web page function
    }
});
};

empQuestions();