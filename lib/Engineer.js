const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', github = 'jvit1985') {
        super(name);

        this.github = github;
    }

    getGithub() {
        return `${this.github}`;
    };

    getRole() {
        return 'Engineer';
    };
}

module.exports = Engineer;