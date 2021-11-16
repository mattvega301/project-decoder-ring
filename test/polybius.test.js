// Write your tests here!
const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("Polybius: Translate i/j to 42", () => {
    it("should translate i and j to 42 when encoding", () => {
        let result = polybiusModule.polybius("ijiji", true);
        expect(result).to.eql("4242424242");
    });
});

describe("Polybius: Translate 42 to i/j", () => {
    it("should translate 42 to i/j when decoding", () => {
        let result = polybiusModule.polybius("4242424242", false);
        expect(result).to.eql("(i/j)(i/j)(i/j)(i/j)(i/j)");
    });
});

describe("Polybius: Ignores capital letters", () => {
    it("should ignore captial letters when translating", () => {
        let resultCap = polybiusModule.polybius("IJijI", true);
        let result = polybiusModule.polybius("ijiji", true);
        expect(resultCap).to.eql("4242424242");
        expect(result).to.eql("4242424242");
    });
});

describe("Polybius: Maintaining Spaces", () => {
    it("should maintain spaces before and after when encoding", () => {
        let result = polybiusModule.polybius("ijij ijij ijij", true);
        expect(result).to.eql("42424242 42424242 42424242");
    });
    it("should maintain spaces before and after when decoding", () => {
        let result = polybiusModule.polybius("42424242 42424242 42424242", false);
        expect(result).to.eql("(i/j)(i/j)(i/j)(i/j) (i/j)(i/j)(i/j)(i/j) (i/j)(i/j)(i/j)(i/j)");
    });
});