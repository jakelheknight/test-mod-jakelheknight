var testJK = require('../index');
var expect = require('chai').expect;

describe("Just testing to get the feel for testing a package. ", function() {
    it("Should print 'hello jake'", function() {
        expect(testJK('jake')).to.equal("Hello jake.");
    });
});