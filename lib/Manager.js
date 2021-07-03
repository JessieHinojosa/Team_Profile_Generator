const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {

    }
    getRole() {
        return this.role = "Manager"
    }

}

module.exports = Manager;