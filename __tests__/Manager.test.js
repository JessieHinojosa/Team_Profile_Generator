const Manager = require("../lib/Manager");

test("creates an manager object", () => {
    const manager = new Manager("jesse", 3369, "example@yahoo.com", "manager", 3695);
    expect(manager.name).toBe('jesse');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch("@")
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number))
})