// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should return value nonprofit", () => {
  expect(launchcode.organization).toBe("nonprofit");
  });
  
  test("should return value Jeff", function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  })''
});