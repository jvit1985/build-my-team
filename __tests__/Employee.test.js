const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Justin');

    expect(employee.name).toBe('Justin');
    expect(employee.id).toEqual('2');
    expect(employee.email).toEqual('jvit85@gmail.com');

    expect(employee.getName()).toEqual('Justin');
    expect(employee.getId()).toEqual('2');
    expect(employee.getEmail()).toEqual('jvit85@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});