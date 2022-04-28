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
        name: 'number',
        message: "What is the manager's office number?"
    },
]).then(({ number }) => {
    this.number = new Manager(number);

    
});
};
const addEmployeeQuestion = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        name: 'addEmployee',
        message: "Would you like to add an employee?",
        choices: ['Engineer', 'Intern', 'Manager', 'Finished adding employees']
    },
])
};

empQuestions();
// if (addEmployee == 'Engineer') {
//     const  engineerQuestion = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'github',
//             message: "What is this engineer's Github Username?",
//             validate: githubUserName => {
//                 if (githubUserName) {
//                     return true;
//                 } else {
//                     console.log('Please enter the Github Username!');
//                     return false;
//                 }
//             }
//         },   
//     ])
// };
// } else if (addEmployee == 'Intern') {
//     const internQuestion = () => {
//     return inquirer.prompt ([
//         {
//             type: 'input',
//             name: 'school',
//             message: "What school does this intern attend?"
//         }  
//     ])
// };
// } else if (addEmployee == 'Finished adding employees') {
    
// };

