function titleCase(title, minorWords) {
  // psuedo code
  // 1. get title string and minorWords string from user
  // 2. convert the title string and minorWords string to lowercase 
  // 3. identify the first letter of each word
  // 4. change the first letter of each word to uppercase
  // 5. if minorWords are given check if any minorWords are in the title string
  // 6. after the first word change any minorWords in the title string to lowercase
  // 7. display titleCase string


  let titleCaseString = "";

  if (title.length > 0)
  {
    // extract words from string and convert to lower case
    const titleWords = title.toLowerCase().split(' ');

    // capitalize the first letter of each word
    let titleCaseWords = titleWords.map((word) => word.replace(word[0], word[0].toUpperCase()));

    if (minorWords === undefined)
    {
      for (i = 0; i < titleCaseWords.length; i++)
      { 
        if (i == titleCaseWords.length - 1)
        {
          titleCaseString += titleCaseWords[i];
        }
        else
        {
          titleCaseString += titleCaseWords[i] + " ";
        }
      }   
    }
    else 
    {
      // extract words from minor words string and convert to lower case
      const minorWordsArray = minorWords.toLowerCase().split(' ');

      // create converted title case string
      for (j = 0; j < titleCaseWords.length; j++)
      {
        // check if there are any minor words after the first word in the title string and replace title case with the minor word 
        for (k = 0; k < minorWordsArray.length; k++)
        {
          if (j > 0 & titleWords[j] === minorWordsArray[k])
          {
            titleCaseWords[j] = minorWordsArray[k];
          }
        }
        if (j == titleCaseWords.length - 1)
        {
          titleCaseString += titleCaseWords[j];
        }
        else
        {
          titleCaseString += titleCaseWords[j] + " ";
        }
      }   
    }

    return titleCaseString;
  }
  else 
  {
    return "";
  }
}