function reducer(input, action) {
  switch (action) {
    case "upperCase":
      string.toUpperCase();
      break;
    case "lowerCase":
      string.toLowerCase();
      break;
    case "capitalize":
      str = string.split(" ");
      newStr = str.map((item) => {
        let firstSym = item[0].toUpperCase();
        return firstSym + item.slice(1);
      });
      return newStr.join(" ");
      break;
  }
}

module.exports = reducer;
