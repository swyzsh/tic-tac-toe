//private variables and functions

function createUser(name) {
  const discordName = `@` + name;

  let reputation = 0;
  const getRep = () => reputation;
  const takeRep = () => reputation--;
  const giveRep = () => reputation++;

  return { name, discordName, getRep, takeRep, giveRep }
}

const swyzsh = createUser("swyzsh");
swyzsh.giveRep();
swyzsh.giveRep();
swyzsh.giveRep();
swyzsh.takeRep();

console.log({
  name: swyzsh.name,
  discordName: swyzsh.discordName,
  reputation: swyzsh.getRep()
});

// Module Patterns - IIFEs

const calculate = (function() {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {add, sub, mul, div}
})();

console.log(calculate.add(6,9));
console.log(calculate.sub(6,9));
console.log(calculate.mul(6,9));
console.log(calculate.div(6,9));