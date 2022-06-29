// Title: Sum of odd numbers
function rowSumOddNumbers(n) {
	// psuedo code
  // 1. get number of rows from user = n
  // 2. for each row identify the odd numbers
  // 3. take the sum of the odd numbers for the last row
  // 4. print the sum of odd numbers in the last row 

  
  let oddNumbersArray = [];
  let rowArray = [];
  let oddNumber = 1;
  let sumOfLastRow = 0;

  // 
  for (i = 0; i < n; i++) {

    // if the first row set the odd number to 1 and the sum = 1
    if (i == 0) {
      rowArray.push(1);
      oddNumbersArray.push(rowArray);
    }
    
    // from the second row onward add the next odd numbers based on the row number and previous odd number (i.e. row 1 = 1; row 2 = 3,5; row 3 = 7,9,11 etc...) 
    else {

      // reset the array for each row
      rowArray = [];

      for (j = 0; j <= i; j++) {
        
        oddNumber += 2;
        rowArray.push(oddNumber);
      }

      oddNumbersArray.push(rowArray);      
    }
  }
  
  lastRow = oddNumbersArray.pop();

  // sum the odd numbers in the last row
  for (k = 0; k < lastRow.length; k++) {
    sumOfLastRow += lastRow[k];
  }

  return sumOfLastRow;
}