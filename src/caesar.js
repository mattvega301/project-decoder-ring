// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // a is index 0 and z is index 25
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift > 25 || shift < -25){
      return false;
    }
    let result = [];
    let inputToLower = input.toLowerCase();
    if (encode === true){
      for (let i = 0; i < inputToLower.length; ++i){
        if (alphabet.includes(inputToLower[i])){
          let currentIndex = alphabet.indexOf(inputToLower[i]);
          currentIndex += shift;
          currentIndex > 25 ? currentIndex -= 26 : currentIndex = currentIndex;
          currentIndex < 0 ? currentIndex += 26 : currentIndex = currentIndex;
          result.push(alphabet[currentIndex]);
        }
        else {
          result.push(inputToLower[i]);
        }
      }
    }
    else {
      for (let i = 0; i < inputToLower.length; ++i){
        if (alphabet.includes(inputToLower[i])){
          let currentIndex = alphabet.indexOf(inputToLower[i]);
          currentIndex -= shift;
          currentIndex > 25 ? currentIndex -= 26 : currentIndex = currentIndex;
          currentIndex < 0 ? currentIndex += 26 : currentIndex = currentIndex;
          result.push(alphabet[currentIndex]);
        }
        else {
          result.push(inputToLower[i]);
        }
      }
    }
    let final = result.join('');
    return final;
  }

  caesar("zebra magazine", 3, true);
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
