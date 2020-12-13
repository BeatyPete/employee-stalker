const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
        this.role = 'manager';
    }
}

module.exports = Manager;