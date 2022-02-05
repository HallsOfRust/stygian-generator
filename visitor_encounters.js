var stygian_visitor_encounters = function() {
  var encounters = [
    {
      content: function(count) {
        return `1 Black Order Librarian`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `${count} Visitors`;
      },
      count: function(rng) {
        return rng.rollDie(6);
      },
      monsters: function(params) {
        return params.monsters.visitors;
      },
    },
    {
      content: function(count) {
        return `1 Giant Bookworm`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.giantBookworms;
      },
    },
    {
      content: function(count) {
        return `${count} Red Order Librarians`;
      },
      count: function(rng) {
        return rng.rollDie(4);
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `1 Rust Moth`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.rustMoths;
      },
    },
    {
      content: function(count) {
        return `1 Dust Elemental`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.dustElementals;
      },
    },
    {
      content: function(count) {
        return `1 Lantern-Bearer`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.lanternBearers;
      },
    },
    {
      content: function(count) {
        return `${count} Skeleton Crew`;
      },
      count: function(rng) {
        return rng.rollDie(6);
      },
      monsters: function(params) {
        return params.monsters.skeletonCrew;
      },
    },
    {
      content: function(count) {
        return `${count} Paper Bees`;
      },
      count: function(rng) {
        return rng.rollDice(2, 6);
      },
      monsters: function(params) {
        return params.monsters.paperBees;
      },
    },
    {
      content: function(count) {
        return `1 Origami Golem`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.origamiGolems;
      },
    },
    {
      content: function(count) {
        return `${count} Yellow Librarians`;
      },
      count: function(rng) {
        return rng.rollDie(6);
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `${count} Ogre Spiders`;
      },
      count: function(rng) {
        return rng.rollDie(4);
      },
      monsters: function(params) {
        return params.monsters.ogreSpiders;
      },
    },
    {
      content: function(count) {
        return `${count} Researchers`;
      },
      count: function(rng) {
        return rng.rollDie(4);
      },
      monsters: function(params) {
        return params.monsters.researchers;
      },
    },
    {
      content: function(count) {
        return `${count} Obsidian Marmosets`;
      },
      count: function(rng) {
        return rng.rollDie(6);
      },
      monsters: function(params) {
        return params.monsters.obsidianMarmosets;
      },
    },
    {
      content: function(count) {
        return `A Bandersnatch`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.bandersnatches;
      },
    },
    {
      content: function(count) {
        return `A Flock of ${count} Animate Books`;
      },
      count: function(rng) {
        return rng.rollDie(6) + 1;
      },
      monsters: function(params) {
        return params.monsters.animateBooks;
      },
    },
    {
      content: function(count) {
        return `1 Lost Soul`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.lostSouls;
      },
    },
    {
      content: function(count) {
        return `${count} Black Order Librarians`;
      },
      count: function(rng) {
        return rng.rollDie(6);
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `${count[0]} Ink Elemental and ${count[1]} Inkblots`;
      },
      count: function(rng) {
        return [1, rng.rollDie(4)];
      },
      monsters: function(params) {
        return [params.monsters.inkElementals, params.monsters.inkblots];
      },
    },
    {
      content: function(count) {
        return `1 Animate Spell`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.animateSpells;
      },
    },
    {
      content: function(count) {
        return `${count[0]} Red Order and ${count[1]} Yellow Order Librarians`;
      },
      count: function(rng) {
        return [rng.rollDie(6), rng.rollDie(6)];
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `1 Neurovore`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.neurovores;
      },
    },
    {
      content: function(count) {
        return `1 Hungry Book`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.hungryBooks;
      },
    },
    {
      content: function(count) {
        return `${count} Lantern-Bearers`;
      },
      count: function(rng) {
        return [rng.rollDice(2, 6)];
      },
      monsters: function(params) {
        return params.monsters.lanterBearers;
      },
    },
    {
      content: function(count) {
        return `1 Archivist-Lich`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.archivistLiches;
      },
    },
    {
      content: function(count) {
        return `1 Escaped Fiction`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.escapedFictions;
      },
    },
    {
      content: function(count) {
        return `A Throng of ${count} Phantoms`;
      },
      count: function(rng) {
        return [rng.rollDie(6)];
      },
      monsters: function(params) {
        return params.monsters.phantoms;
      },
    },
    {
      content: function(count) {
        return `${count} White Order Librarians`;
      },
      count: function(rng) {
        return [rng.rollDie(6)];
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `${count} Crawling Things`;
      },
      count: function(rng) {
        return [rng.rollDice(2, 6)];
      },
      monsters: function(params) {
        return params.monsters.crawlingThings;
      },
    },
    {
      content: function(count) {
        return `${count} Educated Rodents`;
      },
      count: function(rng) {
        return [rng.rollDice(2, 6)];
      },
      monsters: function(params) {
        return params.monsters.educatedRodents;
      },
    },
    {
      content: function(count) {
        return `1 Eye Sentinel`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.eyeSentinel;
      },
    },
    {
      content: function(count) {
        return `${count} Grey Order Librarians`;
      },
      count: function(rng) {
        return [rng.rollDie(6)];
      },
      monsters: function(params) {
        return params.monsters.librarians;
      },
    },
    {
      content: function(count) {
        return `1 Black Ooze`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.blackOoze;
      },
    },
    {
      content: function(count) {
        return `1 Conceptual Well`;
      },
      count: singleCount(),
      monsters: function(params) {
        return params.monsters.conceptualWell;
      },
    },
  ];

  function singleCount() {
    return function(rng) {
      return 1;
    };
  }

  function createEncounter(params) {
    var roll = params.rng.rollDie(20) + params.room.depth;
    if (roll >= 35) {
      roll = params.rng.rollDie(20) + params.rng.rollDie(10) +
          params.rng.rollDie(6) - 2;
    }
    var encounter = encounters[roll - 1];
    var monsters = encounter.monsters ? encounter.monsters(params) : '';
    return {
      content: encounter.content,
      count: encounter.count(params.rng),
      monsters: monsters,
    };
  }

  return {createEncounter: createEncounter};
}();
