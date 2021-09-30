function telephoneCheck(str) {
  var isValid = false;
  //only allow numbers, dashes, dots parentheses, and spaces
  if (/^[\d-()\s.]+$/ig.test(str)) {
    //replace all non-numbers with an empty string
    var justNumbers = str.replace(/\D/g, '');
    var count = justNumbers.length;
    if(count === 10 || (count === 11 && justNumbers[0] === "1") ){
      isValid = true;
    }
  }
  console.log(isValid, str);
  return isValid;
}
