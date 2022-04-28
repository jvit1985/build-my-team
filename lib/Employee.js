class Employee {
    constructor(name = 'Justin', id = '25', email = 'jvit85@gmail.com') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return `${this.email}`;
    };

    getRole() {
        return `Employee`;  
    };
}

module.exports = Employee;