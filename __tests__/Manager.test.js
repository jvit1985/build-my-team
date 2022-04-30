const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Justin');

    expect(manager.name).toBe('Justin');
    expect(manager.id).toEqual('2');
    expect(manager.email).toEqual('jvit85@gmail.com');
    expect(manager.officeNumber).toEqual('123')

    expect(manager.getOfficeNumber()).toEqual('123');
    expect(manager.getRole()).toEqual('Manager');
});