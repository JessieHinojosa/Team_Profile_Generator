const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee("jesse", 3369, "example@yahoo.com", "employee");
    expect(employee.name).toBe('jesse');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch("@")
    expect(employee.email).toEqual(expect.any(String));
})