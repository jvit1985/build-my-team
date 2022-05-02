const Manager = require('../lib/Manager');

test("Can set office number via constructor argument", () => {
    const number = 100;
    const employee = new Manager("Justin", 1, "jvit85@gmail.com", number);
    expect(employee.officeNumber).toBe(number);
  });

  test("Can get office number via getOffice()", () => {
    const number = 100;
    const employee = new Manager("Justin", 1, "jvit85@gmail.com", number);
    expect(employee.getOfficeNumber()).toBe(number);
  });
  
  test('getRole() should return "Manager"', () => {
    const testy = "Manager";
    const employee = new Manager("Justin", 1, "jvit85@gmail.com", 100);
    expect(employee.getRole()).toBe(testy);
  });
  