const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role)
        this.github = github;
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
    getGithub() {  

    }
}

module.exports = Engineer;