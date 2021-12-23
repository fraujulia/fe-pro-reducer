function capitalize(string) {
  str = string.split(" ");
  newStr = str.map((item) => {
    let firstSym = item[0].toUpperCase();
    return firstSym + item.slice(1);
  });
  return newStr.join(" ");
}

function reducer(input, action) {
  switch (action) {
    case "upperCase":
      return input.toUpperCase();
      break;
    case "lowerCase":
     return input.toLowerCase();
     break;
    case "capitalize":
      return capitalize(string);
      break;
  }
}

module.exports = reducer;
