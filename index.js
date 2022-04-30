const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
]).then(({ name, id, email }) => {
    this.employee = new Employee(name, id, email);

    managerQuestion();

});
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
const addEmployeeQuestion = () => {
    return inquirer.prompt ([
    {
        type: 'confirm',
        name: 'addEmployee',
        message: "Would you like to add an employee?",
        default: false
    },
])
    .then(confirmAddEmployee => {
        employeeData.employee.push(confirmAddEmployee);
        if (confirmAddEmployee.addEmployee) {
            return roleQuestions(employeeData);
        } else {
            return employeeData;
        }
    });
};

const roleQuestions = addEmployee => {
    if (!addEmployee) {
        addEmployee = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's job title?",
            choices: ['Engineer', 'Intern'],
        }
    ]) .then(({ role }) => {
        this.role = new Employee (role);

        checkRoleQuestion(role);
    })
};

const checkRoleQuestion = () => {
if (role = 'Engineer') {
    engineerQuestion ();
} else if (role = 'Intern') {
    internQuestion ();
}
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
        },
    ]);
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
        },
    ]);   
};

empQuestions();