// Title: Square Every Digit
function squareDigits(num){
    // psuedo code
    // 1. get number from user
    // 2. convert to string
    // 3. create a squared string
    // 4. for each number in the number string add the square digit to the squared string
    // 5. convert squared string to a number
    // 6. print the squared number
    
    let numString = num.toString();
    let squaredString = "";
    let square = 0;
  
    for (i = 0; i < numString.length; i++) {
      
      square = Number(numString[i]) ** 2;
      squaredString += square.toString();
    }
  
    return Number(squaredString);
  }