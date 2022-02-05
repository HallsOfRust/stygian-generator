var dice = function() {
  function fixedRng(rolls) {
    var roll_index = 0;

    function rollDie(die_size) {
      roll_index++;
      return rolls[roll_index - 1];
    }

    function rollDice(count, die_size) {
      var result = 0;
      for (let i = 0; i < count; ++i) {
        result += rollDie(die_size);
      }
      return result;
    }

    function flipCoin() {
      roll_index++;
      return rolls[roll_index - 1] == 1;
    }

    function rollOnTable(table) {
      return table[rollDie(table.length) - 1];
    }

    function getRolls() {
      return rolls;
    }

    function reset() {
      roll_index = 0;
    }

    return {
      flipCoin: flipCoin,
      rollDie: rollDie,
      rollDice: rollDice,
      rollOnTable: rollOnTable,
      getRolls: getRolls,
      reset: reset,
    };
  };

  function savingRng(rng) {
    var rolls = [];

    function rollDie(die_size) {
      var roll = Math.floor(rng.quick() * die_size) + 1;
      rolls.push(roll);
      return roll;
    }

    function rollDice(count, die_size) {
      var result = 0;
      for (let i = 0; i < count; ++i) {
        result += rollDie(die_size);
      }
      return result;
    }

    function flipCoin() {
      var flip = rng.quick() < 0.5;
      rolls.push(flip ? 1 : 0);
      return flip;
    }

    function rollOnTable(table) {
      return table[rollDie(table.length) - 1];
    }

    function getRolls() {
      return rolls;
    }

    return {
      flipCoin: flipCoin,
      rollDie: rollDie,
      rollDice: rollDice,
      rollOnTable: rollOnTable,
      getRolls: getRolls,
    };
  };

  function freeRng(rng) {
    function rollDie(die_size) {
      return Math.floor(rng.quick() * die_size) + 1;
    }

    function rollDice(count, die_size) {
      var result = 0;
      for (let i = 0; i < count; ++i) {
        result += rollDie(die_size);
      }
      return result;
    }

    function flipCoin() {
      return rng.quick() < 0.5;
    }

    function rollOnTable(table) {
      return table[rollDie(table.length) - 1];
    }

    function newSeed() {
      return '' + rng.quick();
    }

    return {
      flipCoin: flipCoin,
      rollDie: rollDie,
      rollDice: rollDice,
      rollOnTable: rollOnTable,
      newSeed: newSeed,
    };
  };

  return {
    fixedRng: fixedRng,
    freeRng: freeRng,
    savingRng: savingRng,
  };
}();
