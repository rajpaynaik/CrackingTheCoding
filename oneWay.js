const oneWay = (strin, string2) => {
  let match = [];
  let string1Split = string1.split("");
  let string2Split = string2.split("");

  string1Split.some((el) => {
    if (string2Split.includes(el)) {
      match.push(el);
    }
  });

  console.log(match);

  if (string1Split.length > string2Split.length) {
    if (string1Split.length - match.length <= 1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (string2Split.length - match.length <= 1) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(oneWay("pale", "bake"));
