const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);

        this.number = number;
    }

    officeNumber(number) {
        return `${this.number}`;
    };

    getRole() {
        return `Manager`;
    };
}

module.exports = Manager;
