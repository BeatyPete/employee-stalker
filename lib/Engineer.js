const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.other = github;
        this.role = 'Engineer';
    }
    getGithub() {
        return this.other;
    };
}

module.exports = Engineer;