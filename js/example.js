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


curry(f) = h

f(x, y, z) = h(x)(y)(z)

let compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};


let compose = (f,g) => x => f(g(x))


const toUpperCase = x => x.toUpperCase()
const exclaim = x => x + '!'
const shout = compose(exclaim, toUpperCase);

const shout = x => exclaim(toUpperCase(x))

f(x, y)

h(x)

compose(curry(f)(x), h)

f(x, h(x))