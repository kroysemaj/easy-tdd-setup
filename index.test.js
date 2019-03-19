const compliment = require("./index.js");

describe("Your first test suite", () => {
  it("should be true", function() {
    expect(true).toBe(true);
  });

  it("should see the source file", () => {
    expect(compliment()).toBe("You look nice today.");
  });
});
