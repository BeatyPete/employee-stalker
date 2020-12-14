const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.other = phone;
        this.role = 'Manager';
    }
}

module.exports = Manager;