const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Justin');

    expect(engineer.name).toBe('Justin');
    expect(engineer.id).toEqual('2');
    expect(engineer.email).toEqual('jvit85@gmail.com');
    expect(engineer.github).toEqual('jvit1985')

    expect(engineer.getGithub()).toEqual('jvit1985');
    expect(engineer.getRole()).toEqual('Engineer');
});