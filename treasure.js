var stygian_treasure = function() {
  var weapon_types = [
    'dagger',
    'rapier',
    'longsword',
    'scimitar',
    'battle-axe',
    'spear',
    'mace',
    'flail',
    'whip',
    'throwing knife',
    'bow or pistol',
    'crossbow or musket',
  ];
  var weapon_abilities = [
    'completely indestructible',
    'can cut through anything',
    'on fire. +d6 fire damage',
    'electrified. +d6 electric damage',
    'made of ice. +d6 cold damage',
    'hits surprised foes automatically',
    'rusts through any metal items it touches',
    'dispels all spells on anything it hits',
    'double damage against undead',
    'double damage against constructs',
    'poisonous. Save vs poison or 2d8 damage',
    'double damage against wild animals',
    'wielder can cast light, 5/day',
    'wielder can cast invisibility, 2/day',
    'turns victim to wax: save vs paralysis to resist',
    'wielder can see invisible things',
    'affects gaseous and immaterial things as if they were physical',
    'parrying. +2 ac',
    'wielder can see in the dark',
    'vorpal. Attack roll of 20 does double maximum damage',
  ];

  var treasure = [
    {
      createTreasure: function(depth, rng) {
        var candles = rng.rollDice(2, 20);
        return `${candles} candles. Each burns for a turn.`;
      },
    },
    {
      createTreasure: function(depth, rng) {
        var oil = rng.rollDice(3, 6);
        return `Lantern and ${oil} worth of oil.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Set of scrimshawed human teeth, knucklebones to be used like dice, an ink-stand made of silver, a snuff-box made from dragonbone, a collection of signatures from various prominent figures, or the finger of a minor saint preserved in amber. Worth 100 silver.'),
    },
    {
      createTreasure: simpleTreasure(
          'healing potion in a black glass bottle. heals d8 hp.'),
    },
    {
      createTreasure: function(depth, rng) {
        var worth = depth * rng.rollDie(10) * 10;
        return `Box of coins worth ${worth} silver.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Glass jar of poison. Save vs poison or suffer 2D8 damage. D6+2 doses.'),
    },
    {
      createTreasure: simpleTreasure('Stash of ammunition. 20 shots.'),
    },
    {
      createTreasure: simpleTreasure('Random spell scroll.'),
    },
    {
      createTreasure: simpleTreasure(
          'Calligraphy by a famous artist, a lapis-lazuli lantern with a candle in it, a set of golden cutlery, or a strange mutant baby pickled in a jar. Worth 200 silver.'),
    },
    {
      createTreasure: function(depth, rng) {
        var weapons = rng.rollDice(3, 4);
        return `An armoury. ${
            weapons} weapons, and a suit of leather, chain, or plate armour with each.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Magical glass eye. The wearer can see magic, see in the dark, see invisible things, read any written language, or see through walls.'),
    },
    {
      createTreasure: simpleTreasure(
          'Potion of intangibility, invisibility, spider climbing, or levitating. Lasts 1 turn.'),
    },
    {
      createTreasure: function(depth, rng) {
        var type = createWeaponType(rng);
        var ability = createWeaponAbility(rng);
        return `Magical ${type}, ${
            ability}. Duelling weapon, +2 to hit and +2 damage in single combat.`;
      },
    },
    {
      createTreasure: function(depth, rng) {
        var worth = rng.rollDie(10) * depth * 100;
        return `Small pouch of gemstones worth ${worth} silver.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Pen made from delicate gold filigree, a porcelain mask resembling a human skull, or a violin made out of glass. Worth 500 silver.'),
    },
    {
      createTreasure: simpleTreasure(
          'Enchanted hooded robe. Lets the wearer teleport from bookshelf to bookshelf like the Librarians do, see in the dark, become invisible to the rightful owner of any stolen goods they carry, or befriend any undead being they encounter by offering a handshake.'),
    },
    {
      createTreasure: function(depth, rng) {
        var scrolls = rng.rollDice(2, 4);
        return `${scrolls} random spell scrolls.`;
      },
    },
    {
      createTreasure: function(depth, rng) {
        var candles = rng.rollDie(6);
        return `Set of ${
            candles} magical candles. Each burns for 1 turn. In the area they illuminate, illusions, invisibility,
etc. are automatically dispelled.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Bottle of enchanted ink. Invisible to nobles, police, soldiers, and anybody in a position of legal authority.'),
    },
    {
      createTreasure: function(depth, rng) {
        var worth = rng.rollDie(20) * depth * 100;
        return `Metal-bound chest of coins. Worth ${worth} silver.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Coat. Makes its wearer immune to cold, immune to fire, immune to electricity, able to blend into indoor environments with a 4-in-6 chance to escape notice, or able to pass through bookshelves as if they were intangible.'),
    },
    {
      createTreasure: function(depth, rng) {
        var type = createWeaponType(rng);
        var ability = createWeaponAbility(rng);
        return `Magical ${type}, ${
            ability}. Intended for warfare, +3 to hit and +3 damage against enemies that use weapons.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Burial shroud. Makes the wearer’s soul (living or dead) untouchable to magic and spiritual entities.'),
    },
    {
      createTreasure: function(depth, rng) {
        var charges = rng.rollDice(2, 6) + 2;
        return `Wand.  Lets you cast dispel magic, hold person, wall of ice, shape stone, animate dead, break curse, or cure disease. ${
            charges} charges remain.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Suit of magical plate mail. Protects (half damage) against weapons, natural attacks, fire, electricity, corrosion, poison, or spells.'),
    },
    {
      createTreasure: simpleTreasure(
          'Monocle with a lens of a single cut diamond disk, or a crown made of silver and set with the teeth of vanquished kings. Worth 1000 silver.'),
    },
    {
      createTreasure: function(depth, rng) {
        var rings = rng.rollDie(10);
        return `Collection of ${rings} jewelled rings, each worth
200 silver.`;
      },
    },
    {
      createTreasure: function(depth, rng) {
        var type = createWeaponType(rng);
        var ability = createWeaponAbility(rng);
        return `Magical ${type}, ${
            ability}. Absolute masterpiece of a magical ${
            type}, +2 to hit and +2 damage.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Magical ring that renders the wearer invisible, able to walk on walls, immune to mind-altering magic, non-existent to the undead, or immune to sneak attacks.'),
    },
    {
      createTreasure: simpleTreasure(
          'Gloves that allow the wearer to affect gaseous or immaterial beings as if they were physical.'),
    },
    {
      createTreasure: function(depth, rng) {
        var worth = rng.rollDie(10) * depth * 500;
        return `Box of unearthly glowing gemstones, worth ${worth} silver.`;
      },
    },
    {
      createTreasure: function(depth, rng) {
        var coins = rng.rollDie(4);
        var worth = depth * 1000;
        return `Collection of occultum coins. Occultum is a smoky, glassy metallic substance, magically potent and wildly valuable. you can bribe Gods and purchase kingdoms with it. ${
            coins} coins, each worth ${worth} silver.`;
      },
    },
    {
      createTreasure: simpleTreasure(
          'Undiscovered masterpiece by a legendary artist, legal documents ennobling the holder and granting them a small tract of land, the teeth of a dead saint. Worth 2,500 silver.'),
    },
    {
      createTreasure: function(depth, rng) {
        var type = createWeaponType(rng);
        var ability = createWeaponAbility(rng);
        return `Magical ${type}, ${
            ability}. Legendary monster-slaying weapon, +3 to hit and +3 damage against non-mundane enemies.`;
      },
    },
  ];

  function simpleTreasure(treasure) {
    return function(depth, rng) {
      return treasure;
    };
  }

  function createWeaponType(rng) {
    return rng.rollOnTable(weapon_types);
  }

  function createWeaponAbility(rng) {
    var ability = rng.rollOnTable(weapon_abilities);
    var fighters = '';
    if (rng.flipCoin()) {
      fighters = ' (usable only by fighters)';
    }
    return `${ability}${fighters}`;
  }

  function createTreasure(depth, rng) {
    var roll = rng.rollDie(20) + depth;
    while (roll >= 35) {
      roll = rng.rollDie(20) + rng.rollDie(10) + rng.rollDie(6) - 2;
    }
    return treasure[roll - 1].createTreasure(depth, rng);
  }

  return {
    createTreasure: createTreasure,
  };
}();
