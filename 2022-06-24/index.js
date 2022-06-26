// Title: Binary Addition

function addBinary(a,b) {
  // psuedo code
  // 1. add a and b to get the total value 
  // 2. divide the total by 2 and save the remainder into a string
  // 3. repeat step 2  (division until the number of times divisible by 2 is 0)
  // 4. reverse the string to create a binary string
  // 5. output the binary string

  let sum = a + b;
  let dividend = sum; // number that will be divided
  let quotent = Math.trunc(sum / 2); // the integer part of the result of division
  let resultString = ""; // stores the all remainders in order  
  let binaryString = ""; // reversed order of remainders to get binary format

  // creates the raw order remainders string
  while(quotent > 0){
    quotent = Math.trunc(dividend / 2);

    let remainder = dividend % 2;
    resultString = `${resultString}${remainder}`;
    dividend = quotent;
  }

  // creates the reverse order remainder string 
  for (i = 0; i < resultString.length; i++){
    binaryString  += resultString[resultString.length - (i + 1)];
  }

  return binaryString;
}


