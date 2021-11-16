// Write your tests here!
const expect = require("chai").expect;
const substitutionModule = require("../src/substitution.js");

describe("Substitution: Wrong alphabet", () => {
    it("should return false if the user's alphabet is not 26 characters long", () => {
        let result = substitutionModule.substitution("thinkful", "qwertyuiop", true);
        expect(result).to.be.false;
    });
});

describe("Substitution: Correct translation", () => {
    it("should correctly translate the message with given alphabet", () => {
        let result = substitutionModule.substitution("message", "plmoknijbuhvygctfxrdzeswaq", true);
        expect(result).to.eql("ykrrpik");
    });
});

describe("Substitution: Duplicate Characters", () => {
    it("should return false if there are duplicate characters in given alphabet", () => {
        let result = substitutionModule.substitution("message", "plmoknijbuhvygcffxrdzeswaq", true);
        expect(result).to.be.false;
    });
});

describe("Substitution: Maintains Spaces", () => {
    it("should maintain spaces in the message before and after the translation for encoding", () => {
        let result = substitutionModule.substitution("message  message  message", "plmoknijbuhvygctfxrdzeswaq", true);
        expect(result).to.eql("ykrrpik  ykrrpik  ykrrpik");
    });
    it("should maintain spaces in the message before and after the translation for decoding", () => {
        let result = substitutionModule.substitution("ykrrpik  ykrrpik  ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(result).to.eql("message  message  message");
    });
});