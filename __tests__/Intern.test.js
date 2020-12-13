const Intern = require('../lib/Intern.js');

test('creates an Intern', () => {
    const intern = new Intern('Dave', 19, 'dave@fakemail.com', 'MTSU');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(19);
    expect(intern.email).toBe('dave@fakemail.com');
    expect(intern.school).toBe('MTSU');
    expect(intern.role).toBe('intern')
});

test('gets interns school', () => {
    const intern = new Intern('Dave', 19, 'dave@fakemail.com', 'MTSU');

    expect(intern.getSchool()).toBe('MTSU')
});