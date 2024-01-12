let animals;

describe('animals array', () => {
  beforeEach(() => {
    animals = ['dog', 'cat', 'bird', 'lion'];
  });

  test('add animal to end of array', () => {
    animals.push('elephant');
    expect(animals[animals.length - 1]).toBe('elephant');
  });

  test('add animal to end of array', () => {
    animals.unshift('monkey');
    expect(animals[0]).toBe('monkey');
  });

  test('animals array has 4 elements', () => {
    expect(animals).toHaveLength(4);
  });
});
