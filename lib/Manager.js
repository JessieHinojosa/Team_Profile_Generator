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
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerOffice',
                message: 'What is the team managers office number?'
            }
        ]).then(([managerOffice]) => {
            this.office = managerOffice;
        })

    }
    getRole() {
        return this.role = "Manager"
    }

}

module.exports = Manager;