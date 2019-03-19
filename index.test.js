const firstTest = require("./index.js");

describe("first test suite", () => {
  it("should return a string", () => {
    expect(firstTest()).toBe("You look nice today.");
  });
});
