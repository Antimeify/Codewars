function toCamelCase(str) {
    const wordsArray = str.split(/[-_]+/);
    var returnString = wordsArray.shift();
    wordsArray.forEach(element => {
      var capLetter = element.charAt(0).toUpperCase();
      var capWord = capLetter + element.slice(1);
      returnString += capWord;
    });
    return returnString;
  }  