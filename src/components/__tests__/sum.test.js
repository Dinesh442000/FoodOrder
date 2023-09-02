const { sum } = require("../sum");

test("Check the Sum function", () => {
  const result = sum(3, 4);
  expect(result).toBe(0);
});
