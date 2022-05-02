const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('Can set name via constructor arguments', () => {
    const name = 'Justin';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
    
test('Can set id via constructor argument', () => {
    const id = 1;
    const employee = new Employee("Justin", id);
    expect(employee.id).toBe(id);
});

test('Can set email via constructor argument', () => {
    const email = 'jvit85@gmail.com';
    const employee = new Employee("Justin", 1, email);
    expect(employee.email).toBe(email);
});

test('Can get name via getName()', () => {
    const testy = "Justin";
    const employee = new Employee(testy);
    expect(employee.getName()).toBe(testy);
});

test('Can get id via getId()', () => {
    const testy = 1;
    const employee = new Employee("Justin", testy);
    expect(employee.getId()).toBe(testy);
});

test('Can get email via getEmail()', () => {
    const testy = "jvit85@gmail.com";
    const employee = new Employee('Justin', 1, testy);
    expect(employee.getEmail()).toBe(testy);
});

test('getRole() returns "Employee"', () => {
    const testy = "Employee";
    const employee = new Employee("Justin", 1, "jvit85@gmail.com");
    expect(employee.getRole()).toBe(testy);
});