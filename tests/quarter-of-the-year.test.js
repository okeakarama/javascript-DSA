const chai = require("chai");
const assert = chai.assert;
const quarterOf = require('../algorithms/quarter-of-the-year.js');
chai.config.truncateThreshold=0;

describe("Quarterof", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});