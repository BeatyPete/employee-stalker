const Engineer = require('../lib/Engineer.js');

test('creates an Engineer', () => {
    const engineer = new Engineer('Dave', 19, 'dave@fakemail.com', 'beatypete');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(19);
    expect(engineer.email).toBe('dave@fakemail.com');
    expect(engineer.github).toBe('beatypete')
    expect(engineer.role).toBe('engineer')
});

test('gets engineers github', () => {
    const engineer = new Engineer('Dave', 19, 'dave@fakemail.com', 'beatypete');

    expect(engineer.getGithub()).toBe('beatypete')
});