// Title: Duplicate Encoder

function duplicateEncode(word){
    // psuedo code
    // 1. get word from user
    // 2. convert word to lower case
    // 3. count the number of times each character appears
    // 4. create a new string empty string
    // 5. if a character's count is 1 add "(" to the string
    // 6. if a character's count is more than 1 add ")" to the string
    // 7. display newString
  
  
    let wordLowerCase = word.toLowerCase();
    let newString = "";
    let count = 0;
  
    // outer loop gets each character in the word string and inner loop checks how many times that character appears in the word string
    for (i = 0; i < wordLowerCase.length; i++) {
      for (j = 0; j < wordLowerCase.length; j++){
        if (wordLowerCase[i] == wordLowerCase[j]){
          count += 1;
        }      
      }
      if (count > 1) {
        newString += ")";
      }
      else {
        newString += "("
      }
      count = 0; // resets the count for each new character in the word string
    }
  
    return newString;
  }