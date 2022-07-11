// Title: Sort the odd

function sortArray(array) {
    // psuedo code
    // 1. get array from user
    // 2. create copy of array
    // 3. replace each odd number in the copy array with string "odd"
    // 4. sort original array in ascending order
    // 5. create sorted odd numbers array from orginal array
    // 6. replace each "odd" in the copy array with the respective sorted odd number
  
    let sortTheOddsInArray = array;
  
    if (array.length == 0) {
      sortTheOddsInArray = [];
    } 
    else {
      sortTheOddsInArray = array.map((a) => Math.abs(a) % 2 > 0 ? "odd": a);
      console.log(sortTheOddsInArray);
    
      let sortedFilteredOdds = array.sort((a, b) => a - b).filter((a) => Math.abs(a) % 2 > 0);
      console.log(sortedFilteredOdds);
    
      for (i = 0; i < sortedFilteredOdds.length; i++) {
        for (j = 0; j < sortTheOddsInArray.length; j++){
          if (sortTheOddsInArray[j] === "odd") {
            sortTheOddsInArray[j] = sortedFilteredOdds[i];
            break;
          }
        }
      }
    }
   
    return sortTheOddsInArray;
  }