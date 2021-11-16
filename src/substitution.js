// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) {
      return false;
    }
    if(!(alphabet.length === 26)){
      return false;
    }

    let oldAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newAlphabet = alphabet.split('');
    let dummyAlphabet = [];
    let resultArray = [];
    let final = "";
    
    for(let i = 0; i < newAlphabet.length; i++){
      if (dummyAlphabet.includes(newAlphabet[i])){
        return false;
      }
      else {
        dummyAlphabet.push(newAlphabet[i]);
      }
      
    }

    if (encode){ // encoding code
      for (let i = 0; i < input.length; i++){
        if (input[i] == ' '){
          resultArray.push(' ');
        }
        else{
          resultArray.push(newAlphabet[oldAlphabet.indexOf(input[i])]);
        }
      }

    }
    else{ // decoding code
      for (let i = 0; i < input.length; i++){
        if (input[i] == ' '){
          resultArray.push(' ');
        }
        else {
          resultArray.push(oldAlphabet[newAlphabet.indexOf(input[i])]);
        }
      }

    }

    final = resultArray.join('');
    return final;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
