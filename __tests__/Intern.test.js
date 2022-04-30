const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Justin');

    expect(intern.name).toBe('Justin');
    expect(intern.id).toEqual('2');
    expect(intern.email).toEqual('jvit85@gmail.com');
    expect(intern.school).toEqual('MTSU')

    expect(intern.getSchool()).toEqual('MTSU');
    expect(intern.getRole()).toEqual('Intern');
});