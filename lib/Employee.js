class Employee {
    constructor(name = 'Justin', id = '2', email = 'jvit85@gmail.com', role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
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

    getRole(role) {
        if (role == 'Employee') {
        return 'Employee';  
        }; 
    };
};

module.exports = Employee;