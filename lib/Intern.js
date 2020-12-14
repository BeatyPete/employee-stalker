const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.other = school;
        this.role = 'Intern';
    }
    getSchool() {
        return this.other;
    };
}

module.exports = Intern;