function capitalize(string) {
  str = string.split(" ");
  newStr = str.map((item) => {
    let firstSym = item[0].toUpperCase();
    return firstSym + item.slice(1);
  });
}

function reducer(input, action) {
  switch (action) {
    case "upperCase":
      console.log(string.toUpperCase());
      break;
    case "lowerCase":
      console.log(string.toLowerCase());
      break;
    case "capitalize":
      capitalize(string);
      return newStr.join(" ");
  }
}

module.exports = reducer;
