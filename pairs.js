/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  let i = 0;
  let x;
  let y = [];
  if (names === undefined || names == null) return [];
  else if (names.length === 0) return [];
  else if (names.length % 2 === 0) {
    i = 0;
    while (i < names.length / 2 + 2) {
      x = [names.getRandom(), names.getRandom()];
      y[i] = x;

      i++;
    }
  } else {
    i = 0;

    while (i < names.length / 2 + 4) {
      if (i == 3) {
        x = [names.getRandom()];
      } else x = [names.getRandom(), names.getRandom()];
      y[i] = x;

      i++;
    }
    return y;
  }
}

module.exports = pairs;

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "yousef"])
);
