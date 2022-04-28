const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Justin');

    expect(employee.name).toBe('Justin');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('jvit85@gmail.com');
});