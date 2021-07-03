const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
    const engineer = new Engineer("jesse", 3369, "example@yahoo.com", "engineer", "jaymaverick");
    expect(engineer.name).toBe('jesse');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch("@")
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

})