// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let squareKey = {'a': 11, 'b': 21, 'c': 31, 'd': 41, 'e': 51, 'f': 12, 'g': 22, 'h': 32, 'i/j': 42, 'k': 52, 'l': 13, 'm': 23, 'n': 33, 'o': 43, 'p': 53, 'q': 14, 'r': 24, 's': 34, 't': 44, 'u': 54, 'v': 15, 'w': 25, 'x': 35, 'y': 45, 'z': 55};
    let result = [];


    if (encode){ // this is for encoding
      let inputToLower = input.toLowerCase();
      for (let i = 0; i < inputToLower.length; i++){
        if (inputToLower[i] != ' '){
          if (inputToLower[i] == 'i' || inputToLower[i] == 'j'){
            result.push(42);
          }
          else {
            for (let letter in squareKey){
              if (inputToLower[i] == letter){
                result.push(squareKey[letter]);
              }
            }

          }

        }
        else {
          result.push(' ');
        }

      }

    }
    else {     // this is for decoding
      let counter = 0;
      for (let i = 0; i < input.length; i++){
        if (input[i] == ' '){
          counter--;
        }
        counter++;
      }
      if ((counter % 2) != 0){
        return false;
      }
      // code above here checks if input is odd taking away spaces
      // below here is the actual decoding code
      for (let k = 0; k < input.length; k += 2){
        if (input[k] == ' '){ // this code runs if current character is a space
          result.push(' ')
          k--;
        }

        else { // this code runs if current character is not a space
          let currentNum = 0;
          currentNum = (input[k] * 10) - ((input[(k + 1)]) * -1);
          if (currentNum == 42){
            result.push('(i/j)');
          }
          else{
            for (let letter in squareKey){
              if (currentNum == squareKey[letter]){
                result.push(letter);
              }
            }
          }
        }

      }



    }
    let final = result.join('');
    return final;
  }

  
  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
