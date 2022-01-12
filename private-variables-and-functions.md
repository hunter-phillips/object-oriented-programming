# Private Variables and Functions
```
function Player(name, level) {
  let health = level * 2;

  const getLevel = function() { level };
  const getName  = function() { name };
  const die = function() { // uh oh };

  const damage = function(x) { 
    health -= x;

    if (health <= 0) {
      die();
    }
  };

  const attack = function(enemy) {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };

  // return only what needs to be public 
  return {attack, damage, getLevel, getName}
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
```