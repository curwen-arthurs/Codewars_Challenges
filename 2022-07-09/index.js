// Title: Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    // psuedo code
    // 1. get number range from user
    // 2. create an array of numbers based on the sequence a to b inclusive
    // 3. check if each number in the array has the Eureka property (i.e. (1st digit)^1 + (2nd digit)^2 ... = number)
    // 4. create an output array
    // 5. if the number has the Eureka property add the number to the output array
    // 6. display output array
  
    let numArray = [];
    let numString = "";
    let digitPowSum = 0;
    let outputArray = [];
  
    // create sequence of numbers from a to b
    for (i = a; i <= b; i++) {
      numArray.push(i);
    }
  
    // check each number for the Eureka property
    for (j = 0; j < numArray.length; j++) {
      numString = numArray[j].toString();
  
      for (k = 0; k < numString.length; k++) {
        digitPowSum += Number(numString[k])**(k+1);
      }
  
      if (digitPowSum == numArray[j]){
        outputArray.push(numArray[j]);
      }
      digitPowSum = 0;
    }
    return outputArray;
  }