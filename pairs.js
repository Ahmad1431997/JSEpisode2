Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  let i = 0;
  let x, l;
  let y = [];
  if (names === undefined || names == null || names.length === 0) return [];
  else if (names.length % 2 === 0) {
    i = 0;
    l = names.length;
    while (i < l / 2) {
      x = [names.getRandom(), names.getRandom()];
      y[i] = x;

      i++;
    }
    return y;
  } else {
    i = 0;
    l = names.length - 1;

    while (i < l / 2) {
      x = [names.getRandom(), names.getRandom()];
      y[i] = x;

      i++;
    }
    if (i === l / 2) {
      x = [names.getRandom()];
      y[i] = x;
    }
    return y;

  }};
  
module.exports = pairs;
 
console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "yousef"])
);
//done