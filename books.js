var stygian_books = function() {
  var
      books =
          [
            'A spellbook with one random magic-user spell',
            'A bestiary of strange heraldic monsters. The reader has a 1-in-6 chance to recognise any monster encountered that resembles two or more mundane creatures combined (such as centaurs or owlbears), and have a good idea of its capabilities',
            'An apocryphal scripture. A Cleric reading it can learn a random new spell from the Magic-User list',
            'A book listing the true names of demons, angels and other spiritual beings. whenever the reader encounters such a being, they have a 1-in-20 chance to recognise it, knowing its true name and some hints as to its capabilities',
            'A genealogy listing the true heir to every nation’s throne. When the reader encounters or learns of a monarch, they have a 2-in-6 chance to know that monarch is not the true ruler according to the laws of succession, and a further 1-in-6 chance to know the monarch is hiding their status as a usurper',
            'A spellbook with two random magic-user spells',
            'An alchemical guide. The reader can brew a specific poison, drug, or potion with a day’s work in a proper laboratory. the materials to brew an alchemical concoction cost 25 silver',
            'A hyper-dense dictionary. The reader can learn a single language to nearly native fluency',
            'An esoteric treatise. A Magic-User reading it can learn a random spell from the Cleric spell- list',
            'A book of prophecies. To represent the vague insights gleaned, each reader picks a type of die and rolls it, recording the result. once only, they may substitute the result of a roll of that type of die with the result recorded',
            'A spellbook with three random magic-user spells',
            'A manual detailing secret mental techniques to unlock the hidden potential of the mind. The reader improves one of their mental attributes (Intelligence, Wisdom or Charisma) enough to increase its modifier by 1, or by 1 if it was already 18 or higher',
            'A heretical scripture. A cleric reading it can learn two new random spells from the Magic- User spell list',
            'An atlas of extradimensional spaces and other worlds. The book describes a way of getting to Ynn, Carcosa, Leng, Hell, or the Dream World. The method will be one that is useful to the reader once they leave the library',
            'A book detailing strange funerary rites. The reader can spend a day preparing the body of a dead PC for burial: if they do, that PC’s replacement comes in at the same level as the reader',
            'A collection of cosmic secrets. the reader gains enough experience to gain a level immediately',
            'A spellbook with four random magic-user spells',
            'A text detailing the techniques of a lost martial art. A fighter or similar character (including paladins, barbarians, dwarves, etc.) who reads the book now deals 1d8 damage with their bare hands, and when unarmed and dressed in a simple monk’s robe or gi has ac as chain',
            'A manual of secret exercises and training regimes that can tap into the body’s reserves of power. The reader improves one of their physical attributes (Strength, Dexterity or Constitution) enough to increase its modifier by 1, or by 1 if it was already 18 or higher',
            'An occult manual. a magic-user reading it can learn two new random spells from the cleric list',
            'An initiatory text. The reader can swap their class to cleric at any point once they’ve read it. Their attributes and any permanent features like injuries, mutations and so on remain unaltered. Heir experience total determines what level cleric they are, and their new saves, hp, etc. Once the character has become a cleric, they cannot go back to their previous class',
            'A spellbook with five random magic-user spells',
            'A book detailing the hidden techniques of an order of oriental assassins. a thief or similar character (a thief, assassin, halfling, etc.) who reads the book can move in perfect silence—automatically passing noise- based stealth rolls—and never leaves footprints or other traces of their passing',
            'A revelatory scripture. a cleric reading can learn three new spells from the magic-user list',
            'An evangelical screed. a ccleric who reads it canto switch their patron deity to a new one and alter the list of spells they know appropriately',
            'A book of mind-rending revelations. The reader can swap their class to magic-user at any point once they’ve read it. Their attributes and any permanent features like injuries, mutations, etc. Remain unaltered. Their experience total determines what level magic-user they are, and their new saves, hp, etc. Once the character has become a magic-user, they cannot go back',
            'A spellbook with six random magic-user spells',
            'A book detailing the secrets of eternal youth. Unlocking these secrets will require work in a laboratory for a full month, and rare materials from across the world worth several thousand silver. Once achieved, the reader ceases aging and is forever protected from any degenerative diseases or conditions',
            'An arcane grimoire. a magic-user reading it can learn three random spells from the cleric list',
            'A cursed nihilistic manifesto. -1 HP, permanently',
          ];

  var previous_books = [];
  var next_books = [];
  var single_book = null;

  function createBook(depth, rng) {
    var roll = rng.rollDie(20) + depth;
    if (roll >= 31) {
      var book1 = rng.rollOnTable(books);
      var book2 = rng.rollOnTable(books);
      return `
<p>An omnibus of:</p>
<ul>
  <li>${book1}</li>
  <li>${book2}</li>
</ul>
`;
    }
    return books[roll - 1];
  }

  // Implements 'Catalogue of Contents' functionality.
  function createNextBook(depth, rng) {
    if (single_book) {
      return single_book;
    }
    var next_book = createBook(depth, rng);
    if (previous_books.includes(next_book) || next_books.includes(next_book)) {
      single_book = next_book;
    } else {
      next_books.push(next_book);
    }
    return next_book;
  }

  function getNextBook(depth, rng) {
    if (next_books.length > 0) {
      var book = next_books.shift();
      previous_books.push(book);
      return book;
    }
    if (single_book) {
      return single_book;
    }
    var book = createBook(depth, rng);
    if (previous_books.includes(book)) {
      return previous_books[previous_books.length - 1];
    } else {
      previous_books.push(book);
    }
    return book;
  }

  return {
    getNextBook: getNextBook,
    createNextBook: createNextBook,
  };
}();
