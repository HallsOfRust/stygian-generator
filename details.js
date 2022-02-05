var stygian_details = function() {
  var details = [
    {
      title: 'Empty',
      description: function(params) {
        return div(`
<p>The shelves are bare, and there is no furniture or fittings. The place is totally empty.</p>
`);
      }
    },
    {
      title: 'Treasure-pile',
      description: function(params) {
        var coins = 10 * params.creation_rng.rollDice(3, 6);
        return div(`
<p>On one shelf, a little stack of treasure. ${
            coins} gold coins in various denominations, and roll twice on the Treasure Table.</p>
`);
      }
    },
    {
      title: 'Notes',
      description: function(params) {
        const graffiti_table = [
          '<em>The Librarians come in five types: avoid the Grey ones, bold visitor</em> (True, and good advice)',
          '<em>They tried to steal our souls!</em>',
          '<em>We came in near here, look for the doorway out.</em>',
          '<em>[Robilar/Angry Fran/Baz &amp; Dave/Ser Jaime/Black Elsie] Was Here.</em>',
          '<em>The bodiless ghosts are mostly harmless if you leave them alone.</em>',
          '<em>Spiders lurk beneath the floor!</em>',
          '<em>The astrolabe lets you control Time Itself!</em> (Basically true)',
          '<em>I have forgotten something. I don\'t know what. If I try to remember, I convulse and black out. If you start forgetting, flee or it will happen to you too.</em>',
          '<em>I put it back! Don\'t hurt me! Don\'t turn me into one of THEM!</em>',
          '<em>I Hate Ghosts.</em>',
          '<em>I left the index here.</em> (It\'s long gone)',
          '<em>This should be obvious, but don\'t trust the Devils, they screwed me and they\'ll screw you too.</em>',
          '<em>The Brains and the Brain-Eaters are both at war with the Librarians. And each other.</em>',
          '<em>Deeper in, there are more doors leading to other places!</em>',
          '<em>You can get to Hell from here. Can you come here from Hell? Could this place let you escape Death Itself?</em>',
          '<em>For crying out loud, don\'t set anything on fire.</em>',
          '<em>Beware the Bandersnatch, my friend! Just give it what it wants, or kill it like any other fairy.</em>',
          '<em>The ink is alive! It\'s everywhere, watching and waiting! Is civilization doomed?</em> (Civilization will be fine)',
          '<em>I met Lady Macbeth. Like in the play. It was very weird, but if you play by her rules you\'re safe.</em>',
          '<em>This place is evil. It should be burned and destroyed.</em> (An understandable sentiment.)',
        ];
        var graffiti1 = params.creation_rng.rollOnTable(graffiti_table);
        var graffiti2 = params.creation_rng.rollOnTable(graffiti_table);
        var graffiti3 = params.creation_rng.rollOnTable(graffiti_table);
        return div(`
<p>A previous visitor has written something. Perhaps it\'s a note pinned to the shelves or a little chapbook to collect their observations.</p>
<p>If there\'s some threat present, the graffiti warns about it. If there\'s something valuable that could be salvaged, the graffiti points it out.</p>
<p>There are three pieces of graffiti that state the following:</p>
<ul>
  <li>${graffiti1}</li>
  <li>${graffiti2}</li>
  <li>${graffiti3}</li>
</ul>
`);
      }
    },
    {
      title: 'Oriental Rug',
      description: function(params) {
        var worth = 50 * params.depth;
        return div(`
<p>A huge Persian rug lies across the floor, ornate in its pattern and probably over a century old. Worth ${
            worth} silver.</p>
`);
      }
    },
    {
      title: 'Candles',
      description: function(params) {
        return div(`
<p>Candles stuck onto the tops of the bookshelves, and on every table. Old, fat, dribbly. Once-molten wax pools and cracks on the floor and forms glossy white speleothems on the walls. Needless to say, the room is well-lit.</p>
`);
      }
    },
    {
      title: 'Webs',
      description: function(params) {
        return div(`
<p>The place is thick with cobwebs, stretching across the corridors and over the books themselves. Getting through, or getting to the books, is perfectly easy, since the webs break as soon as you push through them, but it\'s a little unpleasant nonetheless. The first encounter here is always with several mundane, harmless spiders.</p>
`);
      }
    },
    {
      title: 'Fireplace',
      description: function(params) {
        // TODO: Chimney functionality.
        return div(`
<p>The location is lit by a roaring fire in a grate, with a bucket of coal nearby, and tongs, pokers, etc. Where the chimney opens out, it&#39;s impossible to say; you\'d get stuck or die from smoke inhalation long before you escaped. </p>
<p>However, if more than one location has been generated with a fireplace, you can use the chimneys to travel between them. Climb into the chimney of one, and you can climb out of the chimney of the other. If the PCs try this before a second such location is generated, instead it links to a new location with a fireplace; roll a d12 for Depth and then roll the location randomly.</p>
`);
      }
    },
    {
      title: 'Lamp-post',
      description: function(params) {
        return div(`
<p>An iron lamp-post bolted to the floorboards, with a lamp at the top that illuminates the shelves nearby.</p>
`);
      }
    },
    {
      title: 'Gas Lamps',
      description: function(params) {
        return div(`
<p>The location is lit by a number of gas lamps fixed to the walls, fed gas by delicate copper pipes that run along the skirting-boards. If the gas is let out into the room, it will explode if lit, dealing 3d6 damage to everybody present (Save vs Breath for half damage).</p>
`);
      }
    },
    {
      title: 'Glass Tubes',
      description: function(params) {
        const tube_table = [
          'ink',
          'steam',
          'molten wax',
          'gas, for lamps, etc',
          'hot water',
          'petrol',
          'brandy',
          'pressurized air',
        ];
        var tube_contents1 = params.creation_rng.rollOnTable(tube_table);
        var tube_contents2 = params.creation_rng.rollOnTable(tube_table);
        return div(`
<p>The room is criss-crossed with glass tubes fastened to the ceiling and walls, and that snake over the tops of the shelves. The tubes carry ${
            tube_contents1} and ${tube_contents2}.</p>
`);
      }
    },
    {
      title: 'Staircase',
      description: function(params) {
        return div(`
<p>The location is built not on a flat floor but on the sides of a long spiral staircase that goes down several hundred feet. The PCs always enter at the top. Anybody falling down the stairs takes d6 damage for every 20 feet fallen. Roll to hit to push somebody down the stairs; they Save vs Paralysis to avoid falling.</p>
`);
      }
    },
    {
      title: 'Candle-sticks',
      description: function(params) {
        return div(`
<p>The location is lit by candles in big three-pronged candlesticks that can be picked up and carried about.</p>
`);
      }
    },
    {
      title: 'Portcullis',
      description: function(params) {
        return div(`
<p>The location lies behind a huge portcullis that must be broken down or have the lock picked. Cunning or strange solutions could be found-if the party can\'t get through, they must go back to the previous location.</p>
<p>By way of temptation, roll on the Treasure Table for what can be glimpsed on the other side of the portcullis.</p>
`);
      }
    },
    {
      title: 'Scrolls',
      description: function(params) {
        return div(`
<p>Rather than books, the shelves here hold scrolls rolled neatly and fit into tubular cases.</p>
`);
      }
    },
    {
      title: 'Funeral Urns',
      description: function(params) {
        var person_here = '';
        if (params.creation_rng.rollDie(10) === 10) {
          person_here =
              ' If the PCs are looking for a specific person, one of the urns contains their remains (or at least claims to).';
        }
        return div(`
<p>Each shelf ends with a china urn containing the ashes of a former visitor to the Library, labelled with their name and the date of their death.${
            person_here}</p>
`);
      }
    },
    {
      title: 'Turning Gears',
      description: function(params) {
        return div(`
<p>An array of clockwork gears affixed to one wall-some delicate and as small as a thumbtack,some as big as a cartwheel, and all manner somewhere in between-which interlink and turn slowly with an irregular ticking sound. The gears link into a greater mechanism below the floor or above the ceiling. Getting pushed into the gears, or sticking part of yourself in, deals 2d6 damage.</p>
`);
      }
    },
    {
      title: 'Vault',
      description: function(params) {
        return div(`
<p>The location is within a locked vault, behind a strong iron door. A neat sign above the door summarizes the contents of the vault. To get in, you\'ll need to open the door by picking the lock or by some other cunning method; brute force might work, but the chances of success are halved. Once PCs gain access to the vault, they can go deeper by leaving it again and continuing down the corridor.</p>
`);
      }
    },
    {
      title: 'Chained Books',
      description: function(params) {
        return div(`
<p>The books here are all chained to the shelves-perhaps to prevent theft, or perhaps to prevent them escaping, depending on the nature of the books.</p>
`);
      }
    },
    {
      title: 'Too Small',
      description: function(params) {
        return div(`
<p>The room is sized for people one-third the size of humans. The ceiling is only four feet high and the books, furniture and similar things are likewise smaller. To explore, the PCs (other than children, halflings, etc.) must crawl between the cramped shelves.</p>
<p>Things encountered within are sized appropriately, but keep the same stats: the exception is any visitors from outside the Library, who are too big for the location.</p>
`);
      }
    },
    {
      title: 'Phosphorescent Lamps',
      description: function(params) {
        return div(`
<p>The room is lit by a number of glass orbs suspended from the ceiling, each of which gives off a soft, blue-green glow. The atmosphere is relaxed and cool.</p>
`);
      }
    },
    {
      title: 'Stacked Papers',
      description: function(params) {
        return div(`
<p>Rather than books, the shelves hold stacks of loose papers-mostly forms and documents, formed into piles and tied into blocks with string.</p>
`);
      }
    },
    {
      title: 'Negligible Gravity',
      description: function(params) {
        return div(`
<p>Gravity\'s effect is drastically reduced here, much like on the moon. Things drift downwards rather than falling. Nobody ever suffers damage from falling or having things fall on them. Creatures can jump to great heights and long distances; five times further than normal. Shooting has a -3 penalty to hit (except at point-blank range or with firearms).</p>
`);
      }
    },
    {
      title: 'Silent',
      description: function(params) {
        return div(`
<p>It\'s stereotypical for a library, but an air of total silence hangs over the room. Speech is inaudible, and even the loudest noises are barely more than a whisper. Needless to say, this has a number of benefits for entities wishing to be stealthy, but means that the incantations to cast spells are impossible.</p>
<p>A spellcaster who tries casting by shouting at the top of their lungs might succeed if they pass a Strength roll (their shouted spell is as loud as a handkerchief hitting the ground). If they fail the roll, they only succeed in damaging their vocal chords-if they have more than 1 HP left, they take 1 damage.</p>
`);
      }
    },
    {
      title: 'Letters',
      description: function(params) {
        var letter_here = '';
        if (params.creation_rng.rollDie(4) === 4) {
          letter_here =
              ' If the PCs are looking for information about a famous person known for their correspondence, there\'s a letter addressed to them or written by them present.';
          var chance = 6;
          while (params.creation_rng.rollDie(chance) === chance) {
            chance += 2;
          }
          var replies = (chance - 6) / 2;
          if (replies === 1) {
            letter_here += 'The reply to that letter is also present.';
          } else if (replies > 1) {
            letter_here += `A total of ${
                replies} back-and-forth replies are also present.`;
          }
          letter_here += ` +${replies + 1} Progress.`;
        }
        return div(`
<p>Rather than books, the location\'s shelves hold stacks of letters, most still in their envelopes.${
            letter_here}</p>
`);
      }
    },
    {
      title: 'Spirit Illumination',
      description: function(params) {
        return div(`
<p>The room is lit by an ingenious, if subtly disturbing, method. Around the room are glass orbs, each containing a phantom. Each orb is held in a clockwork device which, every few minutes, shakes the orb gently, agitating the phantom within and causing it to produce pulses of light to express its irritation. The room is, therefore, lit by a constantly shifting and flickering glow of different colours that rises and falls as the different phantoms are given a good shake periodically.</p>
`);
      }
    },
    {
      title: 'Too Large',
      description: function(params) {
        return div(`
<p>The room is sized for beings twice the size of humans. The ceiling is 30 feet high, and all the books, furniture, etc., are sized for 12-foot-tall people. Any creatures encountered in here (except for those who are also visitors) are likewise double-sized, but keep the same stats.</p>
`);
      }
    },
    {
      title: 'Haunted',
      description: function(params) {
        const signs_table = [
          'Shadows move even when the light source doesn\'t',
          'Whispers can be heard on the edge of your hearing',
          'The room smells of decay',
          'Inky footprints and handprints appear on unattended objects and places',
          'The room is unnaturally cold',
          'There\'s a sense of being watched',
        ];
        var signs = params.creation_rng.rollOnTable(signs_table);
        const who_table = [
          'a mortal librarian',
          'a lost child',
          'a nun',
          'a mad noblewoman',
          'a master burglar',
          'a pair of star-crossed lovers',
          'a plague-stricken doctor',
          'an emotionally tormented artist',
        ];
        var who = params.creation_rng.rollOnTable(who_table);
        const wants_table = [
          'spiteful revenge on the living',
          'for the Location to be left alone',
          'to have the tale of their death returned to the mortal world',
          'revenge on those they think were responsible for their death',
          'to harm the Library',
          'to protect a book (roll on the Extraordinary Book Table for which) from being removed',
          'to be forgotten by mortals',
          'to break free of the forces binding them into the Library',
          'to learn some arcane secret',
          'a proper grave',
        ];
        var wants = params.creation_rng.rollOnTable(wants_table);
        const abilities_table = [
          'move objects about like a poltergeist. +3 to hit for d6 damage if it throws things at people',
          'create illusions out of mist',
          'cause wet, inky writing to appear on things',
          'alter the memories of those present in minor ways. Save vs Magic to resist; a success also alerts the victim',
          'cause something to catch fire for a few moments-Save vs Breath to avoid fire, or else it does d6 damage',
          'cause ice to appear on things, potentially freezing them in place',
          'extinguish lights and erase text',
          'lock doors securely',
          'speak in a loud voice',
          'make vermin appear: masses of flies, cockroaches, or woodlice that attack for d6 damage',
          'create gusts of wind',
          'make objects collapse or fall apart. +3 to hit for d6 damage if used to attack',
        ];
        var abilities = params.creation_rng.rollOnTable(abilities_table);
        return div(`
<p>The room contains the echoes of a long dead individual that has oozed into its structure and now controls the place.</p>
<p>${signs}, which gives away the fact that something is wrong. The dead person was ${
            who}, and wants ${wants}. If roused, the haunting can ${
            abilities} and talk in whispers to those present.</p>
`);
      }
    },
    {
      title: 'Smoking',
      description: function(params) {
        return div(`
<p>The room is uncomfortably warm. Smoke seeps into the air from cracks in the floorboards, from behind furniture, and from any other crevice or gap. It\'s hard to breathe. Each turn a PC spends breathing the hot, smoky air, they take 1 damage.</p>
`);
      }
    },
    {
      title: 'Spirit Tubes',
      description: function(params) {
        var phantoms_out = params.creation_rng.rollDie(6);
        return div(`
<p>The room\'s ceiling has a number of glass tubes bolted to it, running the length of the room. Each tube is six inches across and contains a glowing pink mist that surges down the tube like milkshake through a drinking straw.</p>
<p>The tubes allow phantoms to be pumped from one part of the library to another. Breaking a tube lets out ${
            phantoms_out} phantoms immediately. Each turn thereafter, another d6 phantoms will seep out of the tube in fits and spurts until the tube is mended or blocked up.</p>
`);
      }
    },
    {
      title: 'Watchful',
      description: function(params) {
        return div(`
<p>The room is under constant observation. Those present feel like they are constantly being scrutinized, assessed and judged. Set into the corners where wall meets ceiling, there are four dark glass orbs, each one containing a dull purple mist that swirls idly. The mist is a phantom that has been set to watch what happens in the room and remember it, so the Librarians can learn its observations.</p>
<p>Halve the chance of any roll to successfully hide or avoid notice in this location: it has been set up to minimize hiding spots.</p>
`);
      }
    },
    {
      title: 'Morbid',
      description: function(params) {
        return div(`
<p>Everything here is made of human (or human-ish) remains: shelves built from slats of human bone held together through ingenious joinery, upholstery of human leather. Even the door handles are preserved human hands.</p>
<p>Death is a constant presence here. Small animals tend to lie down and die peacefully, and people feel an urge to drift off into dreamless sleep. Increase any damage taken here by 1. Sleeping here heals all lost HP.</p>
`);
      }
    },
    {
      title: 'Time-locked',
      description: function(params) {
        return div(`
<p>The room is paused in time. Unless living beings make a conscious effort to move and change things, everything is in stasis.</p>
<p>While in the room, time does not progress: diseases and bleeding come to a halt, spells last indefinitely, sleep does not return lost HP, and so forth. Furthermore, any changes made to the room\'s layout or contents reset after a turn.</p>
`);
      }
    },
    {
      title: 'Semi-corporeal',
      description: function(params) {
        return div(`
<p>The location\'s contents flicker in and out of reality, existing partially in a misty ethereal state and partly in normal physicality.</p>
<p>Each round, there is a 50% chance that a particular object in the room is suddenly immaterial. A shelf can be stepped through, a book falls through the holder\'s hands, and so forth. Objects in the room remain solid to each other (immaterial books do not fall through immaterial shelves) and the floor, walls and ceiling remain solid at all times.</p>
<p>Similarly, any monsters in the room have a 50% chance each round to be immaterial-the room\'s contents are also immaterial when this is the case.</p>
`);
      }
    },
    {
      title: 'Doorway Out',
      description: function(params) {
        var librarians = '';
        if (params.creation_rng.flipCoin()) {
          var count = params.creation_rng.rollDie(4);
          librarians = ` The location is manned by ${count} Black Librarians.`;
        }
        const library_type_table = [
          'a noble\'s private collection of cultural works',
          'a university\'s central library',
          'a government archive',
          'the collected works of a local artistic movement',
          'a monastery\'s library',
          'a wizard\'s arcane library',
          'a scientist\'s collected references',
          'an archive connected to a public museum',
          'a collection of suppressed texts guarded by the church',
          'a cult\'s hidden collection of forbidden tomes',
          'administrative records',
          'ancient tomes taken from an archaeological site by historians',
        ];
        var library_type = params.creation_rng.rollOnTable(library_type_table);
        const distance_table = [
          'in the same building',
          'in the same town',
          'in the same county',
          'in the same nation',
          'in a neighbouring nation',
          'on the same continent',
          'further than a continent afield',
          'on another plane of existence',
        ];
        var distance = params.creation_rng.rollOnTable(distance_table);
        return div(`
<p>The room contains a doorway leading out to the real world. It is set neatly into the wall, largely incongruous but bearing a smart brass plate that states where in the real world it leads to.${
            librarians}</p>
<p>The doorway leads to ${library_type}, which is ${distance}.</p>
`);
      }
    },
    {
      title: 'Tangled Passages',
      description: function(params) {
        return div(`
<p>This deep, all that can be found is a maze-like network of largely abandoned passageways. Dust lays over everything, and the books are so ancient as to be almost unreadable. The Librarians rarely come here.</p><p>Successfully going deeper requires navigating the abandoned labyrinth of shelves. Roll a d100 under the party\'s Progress to do this. If they fail, then this is a dead end-they can only Go Back.</p>
`);
      }
    },
  ];

  function div(content) {
    var div = document.createElement('div');
    div.innerHTML = content;
    return div;
  }

  function createDetails(params) {
    var roll = Math.min(params.creation_rng.rollDie(20) + params.depth, 35);
    var det = details[roll - 1];
    return {
      title: det.title,
      description: det.description(params),
      details_fn: det,
    };
  }

  return {
    createDetails: createDetails,
  };
}();
