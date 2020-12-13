const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee', () => {
    const employee = new Employee('Dave', 19, 'dave@fakemail.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(19);
    expect(employee.email).toBe('dave@fakemail.com');
    expect(employee.role).toBe('employee')
});

test('gets employees name', () => {
    const employee = new Employee('Dave', 19, 'dave@fakemail.com');

    expect(employee.getName()).toBe('Dave')
});
test('gets employees id', () => {
    const employee = new Employee('Dave', 19, 'dave@fakemail.com');

    expect(employee.getId()).toEqual(19)
});
test('gets employees email', () => {
    const employee = new Employee('Dave', 19, 'dave@fakemail.com');

    expect(employee.getEmail()).toBe('dave@fakemail.com')
});
test('gets employees role', () => {
    const employee = new Employee('Dave', 19, 'dave@fakemail.com');

    expect(employee.getRole()).toBe('employee')
});