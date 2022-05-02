const Engineer = require('../lib/Engineer');

test('Can set github username via constructor', () => {
    const git = 'jvit1985';
    const employee = new Engineer("Justin", 1, 'jvit85@gmail.com', git);
    expect(employee.github).toBe(git);
});

test('Can get github username via getGitHub()', () => {
    const testy = 'jvit1985';
    const employee = new Engineer('Justin', 1, 'jvit85@gmail.com', testy);
    expect(employee.getGithub()).toBe(testy);
});

test('getRole() should return "Engineer"', () => {
    const testy = "Engineer";
    const employee = new Engineer('Justin', 1, 'jvit85@gmail.com', 'jvit1985');
    expect(employee.getRole()).toBe(testy);
});