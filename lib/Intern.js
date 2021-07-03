const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role)
        this.school = school;
    }
    getName() {
        super.getName();
    }
    getId() {
        super.getId();
    }
    getEmail() {
        super.getEmail();
    }
    getRole() {
        super.getRole();
    }
    getSchool() {
    }
}

module.exports = Intern;