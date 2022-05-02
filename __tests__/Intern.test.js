const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
    const school = "SMU";
    const employee = new Intern("Justin", 1, "jvit85@gmail.com", school);
    expect(employee.school).toBe(school);
  });
  
  test("Can get school via getSchool()", () => {
    const school = "SMU";
    const employee = new Intern("Justin", 1, "jvit85@gmail.com", school);
    expect(employee.getSchool()).toBe(school);
  });

  test("getRole() should return \"Intern\"", () => {
    const testy = "Intern";
    const employee = new Intern("Justin", 1, "jvit85@gmail.com", "SMU");
    expect(employee.getRole()).toBe(testy);
  });
  