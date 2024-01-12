const fetchData = require('./async');

test('should return correct todos', async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});
