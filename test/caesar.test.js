// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("Caesar: Incorrect Shift Value", () => {
    it("should return false if shift value is 0, less than -25, more than 25, or not present", () => {
        let resultZero = caesarModule.caesar("Zebra Magazine", 0, true);
        let resultLess = caesarModule.caesar("Zebra Magazine", -28, true);
        let resultMore = caesarModule.caesar("Zebra Magazine", 35, true);
        expect(resultZero).to.be.false;
        expect(resultLess).to.be.false;
        expect(resultMore).to.be.false;
    });
});

describe("Caesar: Ignores Capital Letters", () => {
    it("should ignore capital letters in the message if present", () => {
        let resultCap = caesarModule.caesar("Zebra Magazine", 3, true);
        let resultLow = caesarModule.caesar("zebra magazine", 3, true);
        expect(resultCap).to.eql("cheud pdjdclqh");
        expect(resultLow).to.eql("cheud pdjdclqh");
    });
});

describe("Caesar: Can Shift Past Z", () => {
    it("should be able to shift past the end of the alphabet correctly", () => {
        let result = caesarModule.caesar("zyxzyx zyxzyx", 3, true);
        expect(result).to.eql("cbacba cbacba");
    });
});

describe("Caesar: Maintains Spaces and Non-alpha", () => {
    it("should maintain spaces and other nonalphabetical symbols when encoding", () => {
        let result = caesarModule.caesar("zebra!!  **magazine))  ", 3, true);
        expect(result).to.eql("cheud!!  **pdjdclqh))  ");
    });
    it("should maintain spaces and other nonalphabetical symbols when decoding", () => {
        let result = caesarModule.caesar("cheud!!  **pdjdclqh))  ", 3, false);
        expect(result).to.eql("zebra!!  **magazine))  ");
    });
});

