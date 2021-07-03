const Intern = require("../lib/Intern");

test("creates an intern object", () => {
    const intern = new Intern("jesse", 3369, "example@yahoo.com", "intern", "UF");
    expect(intern.name).toBe('jesse');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch("@")
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

})