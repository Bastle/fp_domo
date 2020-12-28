let add = function(x) {
  return function(y) {
    return x + y;
  };
};

let add = x => y => x + y

let increment = add(1);
let addTen = add(10);


increment(2);
addTen(2);