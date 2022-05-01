const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '', officeNumber = '123') {
        super(name);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };

    getRole(role) {
        if (role = 'Manager') {
        return 'Manager';
        }
    };
};

module.exports = Manager;
