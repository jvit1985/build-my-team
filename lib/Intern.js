const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = school;
    }

    getSchool() {
        return `${this.school}`;
    };

    getRole() {
        return `Intern`;
    };
}

module.exports = Intern;
