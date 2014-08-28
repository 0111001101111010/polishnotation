var assert = require('chai').assert;
var p = require('../lib/lib');

describe('Test Expressions', function() {
var expression = ['3','4','-','5','+']; //4
var expression2 = ['3','4','5','+','-']; // -6
var expression3 = ['3','4','*','2',"/"]; // 6

  it("The answer to ['3','4','-','5','+'] should be 4", function() {
    assert.equal(p.postFix(expression),4,"it should be 4");
  });

  it("The answer to ['3','4','5','+','-'] should be -6", function() {
    assert.equal(p.postFix(expression2), -6, "it should be -6");
  });

  it("The answer to ['3','4','*','2','/'] should be 6", function() {
    assert.equal(p.postFix(expression3), 6, "it should be 6");
  });
});
