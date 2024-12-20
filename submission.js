const findSum = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const findFrequency = function (array) {
  let counts = new Map();
  for (const str of array) {
    counts.set(str, (counts.get(str) || 0) + 1);
  }

  let mostCommon = null;
  let maxCount = -Infinity;
  let leastCommon = null;
  let minCount = Infinity;

  for (const [key, value] of counts) {
    if (value > maxCount) {
      maxCount = value;
      mostCommon = key;
    }
    if (value < minCount) {
      minCount = value;
      leastCommon = key;
    }
  }

  return { most: mostCommon, least: leastCommon };
};

const isPalindrome = function (str) {
  let reversed = str.split("").reverse().join("");
  return str == reversed;
};

const largestPair = function (array) {
  let largestProduct = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > largestProduct) {
      largestProduct = product;
    }
  }
  return largestProduct;
};

const removeParenth = function (str) {
  return str.replace(/\([^)]*\)/, "");
};

const scoreScrabble = function (str) {
  const letterPoints = new Map([
    ["a", 1],
    ["b", 3],
    ["c", 3],
    ["d", 2],
    ["e", 1],
    ["f", 4],
    ["g", 2],
    ["h", 4],
    ["i", 1],
    ["j", 8],
    ["k", 5],
    ["l", 1],
    ["m", 3],
    ["n", 1],
    ["o", 1],
    ["p", 3],
    ["q", 10],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 4],
    ["w", 4],
    ["x", 8],
    ["y", 4],
    ["z", 10],
  ]);
  return str.split("").reduce((pointTotal, currentLetter) => {
    return pointTotal + letterPoints.get(currentLetter);
  }, 0);
};
