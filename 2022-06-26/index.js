// Title: Is this a triangle?
function isTriangle(a,b,c)
{
    // psuedo code
    // 1. find the length of the 2 shortest sides
    // 2. check if the sum of the length of the 2 shortest sides is greater than the length of the longest side
    // 3. if this is true then it is a triangle, return true
    // 4. if not true then it is not a traingle, return false

    // create an array of the sides lengths
    let sidesArray = [a, b, c];

    // find the longest side
    let longestSide = sidesArray.sort((a, b) => a - b).pop();
  
    // check if the sum of the length sortest sides is greater than the length of the longest side
    let shortestSidesArray = sidesArray.sort((a, b) => a - b).slice(0, 2);

    let sum = 0;

    for (let i = 0; i < shortestSidesArray.length; i++) {
      sum += shortestSidesArray[i];
    }

    if (sum > longestSide) {
        return true;
    }
    else {
        return false;
    }
}