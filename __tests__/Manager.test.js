const Manager = require('../lib/Manager.js');

test('creates an Manager', () => {
    const manager = new Manager('Dave', 19, 'dave@fakemail.com', '666-666-6666');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(19);
    expect(manager.email).toBe('dave@fakemail.com');
    expect(manager.other).toBe('666-666-6666');
    expect(manager.role).toBe('Manager')
});