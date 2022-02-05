var stygian_locations = function() {
  var locations = [
    {
      title: 'Entrance Foyer',
      description: function(params) {
        var manned = 'not manned';
        if (params.creation_rng.flipCoin()) {
          manned = 'manned by a Black Order Librarian';
        }
        return div(`
<h2>A small room, lit with candles, furnished with mahogany and brass.</h2>
<p>Seating and a 'Wait Here' sign. A desk facing towards the real world for the Library's staff. The desk is currently ${
            manned}.</p>
<p>On the desk, there's a bell to ring for attention. Roll an Encounter for what turns up every time the players ring it.</p>
      `);
      },
      revisitable: false,
    },
    {
      title: 'Catalogue of Contents',
      description: function(params) {
        var book =
            params.books.createNextBook(params.depth, params.creation_rng);
        return div(`
<h2>Chained onto a lectern, a single huge catalogue with pages the size of a human torso, bound in black leather.</h2>
<p>The catalogue lists what books are stored nearby, and where. The instructions and directions given are confusing to follow; the PCs can get a picture of what's nearby but actually tracking things down will be difficult.</p>
<p>Consulting it for a turn allows one of the following benefits:</p>
<ul>
  <li>Increase the party's Progress Score by 5. This benefit can be gained only once for each piece of information sought.</li>
  <li>
    <p>A random Extraordinary Book is rolled, and will eventually be discovered by the party. The Extraordinary Book listed in the catalogue is:</p>
    <p>${book}</p>
  </li>
</ul>
`);
      },
      revisitable: false,
    },
    {
      title: 'Help Desk',
      description: function(params) {
        var manned = 'not manned.';
        if (params.creation_rng.rollDie(4) < 4) {
          manned =
              'manned by a Yellow Order Librarian. The Librarian is, in fact, genuinely helpful.';
        }
        return div(`
<h2>In an alcove, a small desk laden with papers.</h2>
<p>Shelves behind it stuffed with more paperwork. Lit by an oil lamp. The paperwork is largely useless to the PCs. It details things like supplies in the library, rotas for the librarians, etc.</p>
<p>There's enough useful information here, however, that it can help PCs find specific information. Each turn spent going through the records increases <em>Progress</em> by 1, to a maximum of +3.</p>
<p>The desk is currently ${manned}</p>
`);
      },
      revisitable: false,
    },
    {
      title: 'Reading Lounge',
      description: function(params) {
        return div(`
<h2>A comfortable room, with richly upholstered couches, and elegant coffee tables.</h2>
<p>Cigar smoke and notebooks. 50% chance that any encounter here will be with Visitors, Researchers, Lost Souls or Archivist-Liches.</p>
`);
      },
      event_override: function(params) {
        if (params.rng.rollDie(2) === 2) {
          return params.event;
        }
        const creature_table = [
          {
            name: 'Visitor',
            monsters: params.monsters.visitors,
          },
          {
            name: 'Researcher',
            monsters: params.monsters.researchers,
          },
          {
            name: 'Lost Soul',
            monsters: params.monsters.lostSouls,
          },
          {
            name: 'Archivist-Lich',
            monsters: params.monsters.archivistLiches,
          },
        ];
        var creature = params.rng.rollOnTable(creature_table);
        return {
          type: {
            title: `A ${
                creature.name} sits on one of the couches, lost in thought.`,
          },
          encounter: {
            content: function(count) {
              return `1 ${creature.name}`;
            },
            monsters: creature.monsters,
            count: 1,
          },
        };
      },
      revisitable: false,
    },
    {
      title: 'Chained Lectern',
      description: function(params) {
        var book = params.books.getNextBook(params.depth, params.creation_rng);
        return div(`
<h2>An ornate lectern, raised on a slight platform.</h2>
<p>On it, open, is a large book. Each corner of the book's cover is fastened to the lectern, and the lectern is bolted to the floor. When nobody is observing it, it gives a soft creak or gentle rattle, as if straining against restraints.</p>
<p>The book on the lectern is ${book}.</p>
<p>This version, however, is dangerous. Reading it results in paper-cuts as the pages twist awkwardly beneath your fingers, dealing 1 damage for each turn spent reading.</p>
<p>If two corners of the book are unfastened (perhaps in order to remove it), the book animates and rips itself free of its bindings.</p>
<h3>Furious Book</h3>
<p><strong>HD 3, HP 12, Armour as <em>Leather</em></strong></p>
<p>Slam (+0, d6 and Intelligence Drain)</p>
<p>Save as Fighter 3</p>
<ul>
  <liCan levitate.</li>
  <li>Immune to Poison, Cold, Backstabs and other effects that only affect living things.</li>
  <li>Double damage from Fire.</li>
</ul>
<p><strong>Intelligence Drain</strong></p>
<p>Each successful hit by the book permanently reduces the victim's Intelligence by 1; each time this happens, the book gains another chapter and a half-inch of thickness.</p>
                `);
      },
      revisitable: false,
    },
    {
      title: 'Display Case',
      description: function(params) {
        const contents_table = [
          'butterflies pinned to cards.',
          'snake skins.',
          'various bits of a dead saint-teeth, fingerbones, bits of hair. Enough to reconstruct the entire saint if assembled.',
          'exotic hats.',
          'dried, pressed flowers.',
          'deep-sea fish, squid, jellyfish and worms, all in jars of slightly yellow-tinted preservative.',
          'spiders pinned to cards, their webs encased in blocks of glass.',
          'interesting shoes.',
          'surgical tools through the ages.',
          'ancient pottery and glassware.',
          'glass eyes.',
          'candlesticks and lamps.',
          'ancient coins.',
          'signet rings of various noble houses, from exotic lands or the distant past.',
          'fabulous masks.',
          'paraphernalia for consuming narcotics.',
          'prosthetic limbs.',
          'vials of blood from various animals.',
          'samples of strange rocks and minerals.',
          'exotic herbs and spices.',
        ];
        var contents = params.creation_rng.rollOnTable(contents_table);
        var worth = 100 * params.depth;
        return div(`
<p>A glass-fronted case displaying valuable or interesting exhibits. Currently holds <strong>${
            contents}</strong>
<p>Anything on display is either very old, very rare, or from very far away; possibly even all three. As a result, if taken and sold to a collector in the real world, the items on display are worth at least ${
            worth} silver.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Ink Vats',
      description: function(params) {
        return div(`
<p>Large brass vats of ink, the tops open to the air, stirred slowly by a clockwork whisk that hangs from the ceiling. Five vats total, containing black, red, green, blue and infernal ink. On the sides of each vat is a tap, labelled, that allows you to refill an inkwell or bottle from the vat.</p>
<ul>
  <li>The black ink is mundane.</li>
  <li>The red ink stings when touched: anything written with it on flesh appears as if it were a birthmark or scar.</li>
  <li>The green ink permanently stains anything it touches, and can never be washed off.</li>
  <li>The blue ink is invisible during the daytime.</li>
  <li>The infernal ink can be used to write infernal contracts. Any contract written in this ink is magically binding. Every signatory on the contract instinctively knows if anybody else has broken the contract as soon as it happens.</li>
</ul>
<p>1-in-6 chance that any encounter here will be with an Ink Elemental oozing out of the vats.</p>
            `);
      },
      event_override: function(params) {
        if (params.rng.rollDie(6) === 6) {
          return {
            type: {
              title: 'An Ink Elemental oozes out of the vats',
            },
            encounter: {
              content: function(count) {
                return '1 Ink Elemental';
              },
              count: 1,
            },
          };
        }
        return params.event;
      },
      revisitable: false,
    },
    {
      title: 'Map Gallery',
      description: function(params) {
        var exotic_map = '';
        if (params.creation_rng.rollDie(6) == 6) {
          exotic_map =
              ' There\'s a map of an exotic country that the PCs might wish to explore in the future or have visited in the past.';
        }
        return div(`
<p>A number of maps on the walls, in picture frames. Some depict familiar lands. Others, more exotic places such as Carcosa, Leng, Ynn or Laputa.${
            exotic_map}</p>
<p>If the PCs are looking for information about an exotic location, observing the Map Gallery for a turn will give them clues: they add 2 to their Progress Score.</p>
          `);
      },
      revisitable: false,
    },
    {
      title: 'Boiler Room',
      description: function(params) {
        return div(`
<p>A room devoid of bookshelves. Against one wall, a huge black-iron furnace, over which a tank of water boils. Large pipes channel the steam elsewhere in the Library. If the boiler itself is broken (which will take some skilled sabotage, or 20 damage in one go), it ruptures and bursts, dealing 4d6 damage to all in the room.</p>
<p>Steam vents on the front of the boiler or the pipes that snake away from it can be damaged or released: the blast of steam that issues deals d6 damage. Damage to the steam pipes has a similar result. Save vs Dragon Breath for half damage.</p>
                `);
      },
      revisitable: false,
    },
    {
      title: 'Auditorium',
      description: function(params) {
        return div(`
<p>A large room empty of bookshelves, semi-circular in shape. In the middle of the flat side, there is a small stage with a desk and behind it a large blackboard. Around this in half-circles are rings of benches, each row a few feet higher than the one in front.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Skeleton Collection',
      description: function(params) {
        const skeletons_table = [
          'baby',
          'child',
          'human adult',
          'human mutant',
          'bird',
          'snake',
          'long-extinct monster',
          'fish',
          'giants\'',
          'ape',
        ];
        var skeletons = params.creation_rng.rollOnTable(skeletons_table);
        return div(`
<p>Around a dozen ${
            skeletons} skeletons in glass cases. Wired into position. Labelled neatly.
            `);
      },
      revisitable: false,
    },
    {
      title: 'Chapel',
      description: function(params) {
        var book = params.books.getNextBook(params.depth, params.creation_rng);
        var trinkets =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        return div(`
<p>A long room supposedly dedicated to religious devotion. A high arched ceiling, supported by pillars. Rows of pews, and at the front a pulpit before the altar. The pulpit has a small lectern built in with an Extraordinary Book resting on it: ${
            book}.</p>
<p>The altar is a simple affair, with the suitable trappings of a common faith-maybe a crucifix and candles, perhaps a bowl and sacrificial knife, depending on the religion. Under the altar, there are a few stored trinkets, among them: ${
            trinkets}.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Tea-Room',
      description: function(params) {
        const food_table = [
          'scones, jam and cream',
          'cake',
          'sandwiches',
          'port and sherry',
          'cheese and biscuits',
          'tea',
          'cocktails',
          'coffee',
          'fried breakfasts',
          'pastries, croissants, etc.',
        ];
        var food1 = params.visit_rng.rollOnTable(food_table);
        var food2 = params.visit_rng.rollOnTable(food_table);
        var food3 = params.visit_rng.rollOnTable(food_table);
        return div(`
<p>A small, well furnished room. Comfortable chairs, low tables. Cozy. To one side, there's tables against the wall with food and drink, and the chinaware and cutlery required. Currently present: ${
            food1}, ${food2}, ${food3}.</p>
<p>Every time the party visits the room, re-roll what food is present; Red Librarians restock the room periodically.</p>
              `);
      },
      revisitable: true,
    },
    {
      title: 'Statuary',
      description: function(params) {
        var worth = 300 * params.depth;
        var person_here = '';
        if (params.creation_rng.flipCoin()) {
          person_here =
              `If the party is looking for a specific person, there's a statue of them here.`;
        }
        var figure_here = '';
        if (params.creation_rng.flipCoin()) {
          figure_here =
              ` If looking for information about a historical figure, there's a statue of them here; increase the Progress Score by 1.`;
        }
        return div(`
<p>A long gallery, filled with several dozen statues on pedestals. Each life-size. Most reclining, seated or otherwise relaxed. Each worth ${
            worth} silver; being a life-sized statue, getting one out will be tricky.</p>
<p>${person_here}Any corpse brought here slowly turns to stone over the course of a turn. Anybody sleeping or unconscious here likewise turns to stone after a night-cycle\'s worth of sleep.</p>
<p>The statues all have a neat brass plate on their pedestal, detailing the subject.${
            figure_here}</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Stuffed Animals',
      description: function(params) {
        var animal_here = '';
        if (params.creation_rng.flipCoin()) {
          animal_here =
              `<p>If looking for information about a particular type of animal or legendary beast, there's a taxidermied example here. Increase the Progress Score by 1.</p>`;
        }
        return div(`
<p>A gallery full of taxidermied animals, displayed alongside detailed information. The animals are all interesting in some way: rare, foreign, extinct, mythical.</p>${
            animal_here}
            `);
      },
      revisitable: false,
    },
    {
      title: 'Mausoleum',
      description: function(params) {
        var treasure1 =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        var treasure2 =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        return div(`
<p>Among the bookshelves, a large stone sarcophagus. A rectangular block of stone, carved into rococo flutes and scrolls. The top has an inscription, and can be lifted up. Within, there is a skeletal corpse. Interred with them is the following:</p>
<ul>
  <li>${treasure1}</li>
  <li>${treasure2}</li>
</ul>
              `);
      },
      revisitable: false,
    },
    {
      title: 'Storage Vault',
      description: function(params) {
        var worth = 100 * params.depth;
        var treasure1 =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        var treasure2 =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        const mundane_materials_table = [
          'sheaves of blank paper',
          'janitorial equipment',
          'sealing wax',
          'unused furniture',
          'woodworking tools',
          'empty glass globes and bottles',
          'candles',
          'sawdust',
          'ladders',
          'paint and brushes',
          'the hooded monastic robes of the Librarians',
          'barrels full of human teeth',
          'dyed leather',
          'salt',
          'glass tubes',
          'pens and stationery',
          'metalworking tools',
          'books that need repairing',
          'books that need replacing',
          'vats of ice',
        ];
        var material1 =
            params.creation_rng.rollOnTable(mundane_materials_table);
        var material2 =
            params.creation_rng.rollOnTable(mundane_materials_table);
        var material3 =
            params.creation_rng.rollOnTable(mundane_materials_table);
        return div(`
<p>Behind a closed, locked door, the material treasures of the Library are stored. The door's lock will need to be picked, or the door broken down, to get in. Within, there's a wealth of materials in marked cases.</p>
<p>Items of particular interest are:</p>
<ul>
  <li>${treasure1}</li>
  <li>${treasure2}</li>
</ul>
<p>In addition, there are rare materials-pigments, silk, semiprecious stones, etc-worth ${
            worth} silver.</p>
<p>Lastly, the following mundane materials are stored here: ${material1}, ${
            material2}, ${material3}.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Planetarium',
      description: function(params) {
        return div(`
<p>A high, domed ceiling, onto which lanterns project dots of light that resemble alien constellations. In the centre of the room, a large clockwork orrery modelling the solar system. A lamp burning in the centre, and long arms that hold model planets, moons and comets in place. The whole thing clicks and grinds as it slowly turns.</p>
<p>The planetarium moves to accurately represent the position of the celestial bodies outside in the real world. It can, however, be manually reset to a past or future position of the celestial bodies.</p>
<p>Bookshelves at ground level contain information on astronomy and astrology. Anybody who uses the planetarium to cast an astrological horoscope for the subject of information they are seeking adds d6 to their Progress Score. Furthermore, if they roll a d20 under their Intelligence, they may ask a single yes-or-no question about the subject of the horoscope and get an accurate answer.</p>
<p>Lastly, resetting the position of the orrery has a distorting effect on the time-stream. Those present find their state reset to the time shown on the orrery. If they set it to a point in the past, then the consequences of events after that point are negated for those present-injuries disappear, curses were never bestowed, healing never happened, etc. Likewise, if set forwards, then any healing, ageing, disease, etc. that might happen in the time set forward occurs immediately. The time-stream for the rest of the world remains unaffected; only the PCs party skips back or forward in time.</p>
<p>The orrery can go forward or backwards in increments of one round, turn, hour, day, week, month, year or century.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Calculation Engine',
      description: function(params) {
        var librarians = params.visit_rng.rollDie(4);
        return div(`
<p>The shelves give way to a huge machine made of clockwork and steam pumps. Incredibly complex, the machine hisses, creaks, clicks, and turns. There is a terminal in the front-centre of the Calculation Engine. Tiles that can be pushed, marked with letters A-Z, numbers 0-9, and punctuation. Above the tiles, there is a slot from which emerges a long ribbon of paper that winds down into a pile on the floor, like ticker-tape. A mechanical pen writes onto the paper ribbon as it\'s extruded.</p>
<p>It is, effectively, a mechanical computer, using gears and valves rather than electrical components. It is only one part of a much greater whole that lies in a huge network spread throughout the library.</p>
<p>Pushing a tile results in a series of clicks, and new wheels within the machine starting to turn. You can type things into the engine using these tiles. Anything the players type in is put into the Calculation Engine. The output will be written on the paper ribbon, extruded out into the pile. The players can read the response, which will vary depending on what input they used. Go down the list in the next column, starting at the top, and use the first response that applies to their input.</p>
<p>If the players input a fact that is known to be true (which is to say, correctly recorded as factual in any book anywhere in the world), the response is: </p>
<p class="mono">Data Confirmed<p>
<p>If the players input a fact that is known to be false (which is to say, correctly refuted in any book anywhere in the world), the response is:</p>
<p class="mono">Data Contradictory<p>
<p>If the players input a question that has an answer in any book anywhere in the world, the machine responds by naming the closest book which contains an answer. They get +1 Progress if the question asked is related to the information they are looking for. This +1 Progress applies for each related question they ask, each getting the response of a new book, until they have a list of 6 books (a total of +6 Progress). After this, the Calculation Engine begins to repeat the same books.</p>
<p>If the players input a question to which no answer is recorded in any book anywhere in the world, the response is:</p>
<p class="mono">Data Not Found<p>
<p>If the players input anything which is neither a stated fact nor a question, the response is:</p>
<p class="mono">Unknown Input</p>
<p class="mono"><strong>RECALIBRATING</strong></p>
<p>The Calculation Engine is attended to by d4 Grey Librarians at all times (currently ${
            librarians}). If they are slain or removed, more will arrive within a turn.</p>
                `);
      },
      revisitable: true,
    },
    {
      title: 'Phantom Databanks',
      description: function(params) {
        return div(`
<p>The room contains a set of shelves against one wall. Each shelf holds a row of glass jars. Each jar has a set of wires emerging from it, linking it to a small machine at the end of each shelf that displays the pressure, temperature, emotional state and acidity of each jar's contents on a set of dials. There are 30 jars in total. 24 contain a phantom, the rest are currently empty. Each phantom appears as a condensed mist, thrashing wildly, flickering with colours and patterns, glowing slightly.</p>
<p>Opening a jar releases the contained phantom. It doesn't really want things or have a sense of self, but it is compressed unnaturally in the jar, and will expand to its full size (about that of a human) when released. A newly released phantom is agitated and energetic. Whilst it does not have enough awareness of its surroundings to attack, it will almost certainly cause problems.</p>
<p>Alternatively, a phantom in a jar can be used as a dim source of light, illuminating out to a five-foot radius.</p>
            `);
      },
      revisitable: false,
    },
    {
      title: 'Spider Trapdoor',
      description: function(params) {
        var treasure =
            params.treasure.createTreasure(params.depth, params.creation_rng);
        return div(`
<p>Under the floor of this location, there lurks a huge spider, an ambush-predator adapted to the Library\'s environment. It can lift up a section of floor, and emerge to grab prey, dragging it down to feed. It\'s burrow is just big enough to fit itself, and a few prey (either bundled up ready to eat, or still being subdued).</p>
<p>When the players first enter this location, describe the floorboards as being a little uneven, and that there are strands of cobweb over the floor. This is the only clue they get. If they test the floor, tell them there is a hollow space beneath. If they don\'t think to check, it\'s their own fault when they get ambushed.</p>
<p>The spider can sense the footsteps of those walking above it as vibrations and sound. It knows how many are present, if any are injured, and how heavy they all are. From this, it can make a good guess as to who makes the best victim. Typically, this will be whoever is bringing up the rear. Sometimes, it waits for a group of victims to disperse to explore the room, and grabs somebody who stands over its pit undefended.</p>
<p>When the spider makes its move, a section of floorboards lift up, and its front half (face and front legs) emerges from beneath. It grabs its victim and tries to drag them into its pit, closing the lid behind it.</p>
<p>It makes a single surprise attack. If the attack hits, the victim is pulled into the spider\'s pit and takes damage. Furthermore, there is a 3-in-6 chance that the spider does this quietly enough that (unless the victim states that they cry out) nobody notices it has happened unless they\'re looking at the victim.</p>
<p>Inside the spider\'s pit, there are various valuables taken from its previous victims, including:</p>
<ul>
  <li>${treasure}</li>
</ul>
<p><strong>Trapdoor Spider</strong>: <em>HD 4, 16 HP, Armour as chain, Bite (+4, d10 damage and Save vs Poison), Save as Fighter 4.</em></p>
<p>3-in-6 chance to make no noise at all when it does something. If a victim fails their Save vs the spider\'s venom, they are paralysed for a turn.</p>
              `);
      },
      revisitable: false,
    },
    {
      title: 'Printing Machine',
      description: function(params) {
        return div(`
<p>A large, steam-powered printing press, its operation automated. It is plumbed into the larger structure of the Library, powered by high-pressure steam piped in from the boilers. It produces replacement pages, important paperwork, etc., which slide from the printing press and into collection baskets. It creaks, clatters and grinds as it works. It\'s in constant motion, and the piles of paper it produces build up over time.</p>
                `);
      },
      revisitable: false,
    },
    {
      title: 'Ossuary',
      description: function(params) {
        var bones = '';
        for (i = 0; i < 6; ++i) {
          if (i > 0) {
            bones += ', ';
          }
          if (i === 5) {
            bones += 'and ';
          }
          bones += params.creation_rng.rollDie(4);
        }
        var worth = 10 * params.depth;
        return div(`
<p>A collection of bones packed Tetris-style into six glass-fronted display cases. Each neatly labelled with who it was taken from, when it was taken, the circumstances of their death, and what killed them. </p>
<p>Of the bones present, only a handful are from somebody interesting enough to be of value. There are respectively ${
            bones} interesting bones in each case, each bone worth ${
            worth} silver.</p>
<p>Trying to remove the bones requires smashing open or unlocking the display cases. This releases the Bone Beast within: an animated swarm of bones of indistinct formation that behaves like a cross between a swarm of hornets and a small landslide. Just hundreds of bones all battering whoever tried to steal from them. Once the Bone Beast is defeated, the party can take the valuable bones from that cabinet.</p>
<p><strong>Bone Beast</strong>: <em>HD 6, HP 12, Armour as leather, Batter every nearby victim (hits automatically, d4 damage), Save as Fighter 6.</em></p>
<p>Swarm form reduces most physical damage to 1, but area attacks do double damage. Undead, with all the vulnerabilities and immunities that implies. Cannot be backstabbed (due to lack of vulnerable anatomy).</p>
              `);
      },
      revisitable: false,
    },
    {
      title: 'Syphon of Phantoms',
      description: function(params) {
        return div(`
<p>In the centre of this room is a hollow metal cone, narrow at its base and broad at the top, riddled with holes the size of a finger. The whole thing is like a huge sea-sponge or coral made of etched metal.</p>
<p>The hollow space within the conical Syphon is filled with glass vials. Some are empty, some contain condensed phantoms like a wriggling turquoise mist. Thin glass tubes and wires link the vials to one another and to the exposed plumbing of the Library, like some huge alchemist\'s distillery.</p>
<p>Whenever somebody dies in the Library, their soul is inexorably drawn towards the Syphon. While they may only drift a few feet closer each day, the Syphon acts like the nearly inescapable gravity well of a black hole in the spiritual plane. A few souls, not yet converted to phantoms, can be seen hanging in the air as dim shimmers, oozing closer to the Syphon, inch-by-inch.</p>
<p>A soul sucked into the syphon is drawn through its various channels and tubes, compressed and distorted and rendered down by the process until only a phantom remains. Once this process is complete (which takes a few minutes) the machine gives a cheerful "DING!" and another glass vial is filled with the new phantom.</p>
<p>The room\'s thanatropic machinery constantly tugs at your soul. Death comes easily here. Whenever damage is taken in this room, the Syphon deals 1 additional damage the next round as it attempts to pull vulnerable souls free of their fleshy homes.</p>
                `);
      },
      revisitable: false,
    },
    {
      title: 'Steam Vents',
      description: function(params) {
        return div(`
<p>Here, the steam pipes that thread through the Library are exposed. A large valve is set into the wall that can be opened or closed by turning a huge wheel. If the valve is opened, the steam from the pipes vents into the room, dealing d6 damage to everybody present as it scalds them and filling the room with blinding fog.</p>
<p>Even if the vents aren\'t fully opened, smaller pressure valves constantly release little bursts of steam into the room. The air is humid, hot, and thick with mist, allowing those present to re-roll failed rolls to hide in the mist.</p>
<p>Because of the damp air, the books here are all protected by a thin layer of wax, or else etched into paper-thin sheets of metal. Bringing in normal paper books ruins them rapidly.</p>
        `);
      },
      revisitable: false,
    },
    {
      title: 'Paper Beehive',
      description: function(params) {
        var bees_present = params.visit_rng.rollDice(2, 6);
        return div(`
<p>The room here is infested with vermin: bees the size of a human hand. They built a hive against one wall out of papier-mâché, layers of pages built up into a blister-like nest twelve feet across that stretches from floor to ceiling.</p>
<p>Although the entrances the bees use are only a few inches across, you can get into the beehive pretty easily, simply by cutting through its paper walls. Within, chambers the size of a human head contain eggs, larvae, dormant bees, and the Black Honey that the bees make. If the entire hive is ransacked, there are 6 pints of Black Honey inside.</p>
<p>Black Honey is made without flowers. Instead, the bees harvest ink from open books and blood from corpses. Over time, the bees condense and refine the Honey, producing a substance dense with magical potential.</p>
<p><em>Roll for anybody who consumes a mouthful.</em></p>
<h3>D8 WHAT CHANGES IT WORKS UPON THEM</h3>
<ol>
  <li>The consumer can speak to and understand any insects, mundane or otherwise.</li>
  <li>The consumer can see into the ultraviolet spectrum, allowing them to see through most camouflage and to perceive electrical charges by the ultraviolet glow they produce.</li>
  <li>The consumer\'s skeleton becomes brittle. -2 maximum HP permanently, to a minimum of 1.</li>
  <li>Subtle yellow-and-black bands appear on the consumer\'s skin.</li>
  <li>The consumer sprouts a stinger over the course of the next few days. It can be used once as a weapon, doing 2d12 damage to both the victim and the consumer (as the sting is wrenched free, bringing their viscera with it).</li>
  <li>The consumer\'s body becomes light and filled with hollow spaces. Halve all falling damage.</li>
  <li>The consumer sprouts two pairs of transparent wings from their shoulder blades, allowing them to hover a few feet above the floor.</li>
  <li>The consumer\'s skin hardens into a brittle exoskeleton. +1 AC.</li>
</ol>
<p>There are 20 mouthfuls of honey in the hive.</p>
<p>There are ${
            bees_present} bees on guard in the room. So long as the PCs don\'t harm the guard bees or their hive, the bees will ignore them. If a fight starts, d8 bees emerge from the hive each round. The first time an 8 is rolled, then 8 bees emerge and their Queen comes with them. There are 120 bees and their Queen in total.</p>
<p><strong>Bee</strong>: <em>HD 1, HP 3, Armour as leather, Sting (+1, d8 damage to the bee and its victim), Save as Fighter 1.</em></p>
<p><strong>Queen Bee</strong>: <em>HD 4, HP 12, Armour as leather, Sting (+4, d8 damage to the bee and its victim), Save as Fighter 4.</em></p>
                  `);
      },
      revisitable: true,
    },
    {
      title: 'Furnace',
      description: function(params) {
        return div(`
<p>A metal chamber filled with coal burns fiercely, its heat used elsewhere to power steam engines or warm the Library. Opening the shutters to the furnace produces a blast of hot air that deals d6 damage to those directly in front of it. Actually going inside the furnace does 4d6 damage a round.</p>
        `);
      },
      revisitable: false,
    },
    {
      title: 'Holding Pen',
      description: function(params) {
        var phantoms = params.creation_rng.rollDie(10);
        var person_here = '';
        if (params.creation_rng.rollDie(10) === 10) {
          person_here =
              ' If the PCs seek the soul of a specific person, one of the phantoms encountered here is that soul.';
        }
        return div(`
<p>Within this room is a huge glass vat, like a fish tank. Copper tubes connect it to the rest of the Library\'s plumbing. A single brass hatch is set in one side; it can be opened from the outside but not from within. The hatch is locked.</p>
<p>Within, there are ${phantoms} phantoms hanging like oily smears in the air.${
            person_here}</p>
<p>Each turn either d4 more phantoms arrive in the pen, deposited by the tubes, or d4 are sucked out into the library\'s plumbing.</p>
<p>There’s a 50% chance that the first encounter here will be with D6 White Order Librarians.</p>
`);
      },
      event_override: function(params) {
        if (params.room.encounter_count > 1 || params.rng.flipCoin()) {
          return params.event;
        }
        return {
          type: {
            title: 'White Order Librarians enter',
          },
          encounter: {
            content: function(count) {
              return `${count} White Order Librarians`;
            },
            count: params.rng.rollDie(6),
          },
        };
      },
      revisitable: false,
    },
    {
      title: 'Phantom Pumps',
      description: function(params) {
        return div(`
<p>A huge steam-powered machine is built into the wall of this room, made of black iron, all tubes and pistons and valves. It serves to pump phantoms around the Library to where they\'re needed. The whole contraption clanks and groans constantly as it moves.</p>
<p>There\'s a control panel nearby, with various dials, switches and levers to control what phantoms the pumps send where. A single White Librarian is here, manning the controls.</p>
        `);
      },
      revisitable: false,
    },
    {
      title: 'Infernal Gateway',
      description: function(params) {
        return div(`
<p>This room contains a single huge horrible doorway in addition to the normal exits. Made of gnarled dark wood set into a stone frame, with black iron hinges and a sturdy lock. The whole thing-door, frame and lock-is engraved with the sort of horrible sigils that hurt to look at for too long.</p>
<p>The doorway leads to Hell.</p>
<p>Each turn, there is a chance that a minor Devil will come through the doorway. This chance depends on how depraved the PCs are (sin attracts the Devils): check the list of sins below for the chance.</p>
<ul>
  <li>Trespassing into another\'s home, petty theft and other minor crimes: 1-in-6 chance.</li>
  <li>Serious theft, such as armed robbery, grave-robbing, extortion, etc: 2-in-6 chance.</li>
  <li>Unnecessary violence or mayhem such as arson, pointlessly attacking people, or acts designed to outrage the public: 3-in-6 chance.</li>
  <li>Murder: 4-in-6 chance.</li>
  <li>Wilful sadism and cruelty, such as torture, murder out of spite, etc.:5-in-6 chance.</li>
</ul>
<p>If a Devil shows up, it has the following basic statistics:<em>HD 2d4, HP 2 per HD, Armour as chain, Whip/claws/pitchfork/flensing knife (bonus to-hit same as HD, d8 damage), Save as Fighter of equal HD.</em></p>
<p><em>Halve damage not from holy, magical, or silver weapons. Double damage from holy sources. Immune to mind-control that doesn\'t specifically target infernal beings.</em></p>
<p>The Devil wants you to damn yourself. It will seem helpful until you anger it. Everything it offers has an unforeseen price.</p>
<button onclick="onDevilClick()">CREATE DEVIL</button>
<div id="devil"></div>
        `);
      },
      revisitable: false,
    },
    {
      title: 'Jarred Brains',
      description: function(params) {
        return div(`
<p>The shelves here are lined with glass jars, each filled with a clear fluid. An intact human brain floats in the fluid, with wires linking where the spinal column would be to a small mechanism set in the jar\'s base. Each jar is labelled to say whose brain it contains, and when they were interred.</p>
<p>Each jar\'s fluid is a nutrient solution designed to keep the brain within alive. Occasionally, a bubble rises to the surface as the jar\'s mechanisms keep the fluid oxygenated. The mechanism links to a small metal grille in the front of the jar; this is how the brain within communicates in a tinny, staticky voice. The brains are torpid and dormant as the PCs enter, but can be roused by shaking their jars or speaking directly into the grille at the front of their jar, for example.</p>
<p>Of the brains present, at least one will be an intellectual figure (recent or historical) known to the PCs. There\'s a 1-in-4 chance that it\'s somebody directly connected to the subject of the PCs\' research. Conversing with this figure might answer all sorts of questions, and adds 4 to the party\'s Progress Score if their area of knowledge is relevant. Being stuck in a jar has almost certainly given the brain a long time to spend in self-reflection with little external stimulus. It has no doubt become deeply strange in its outlook and priorities.</p>
<p>The remaining brains are split roughly evenly between those incapable of intelligible communication due to language barriers, those incapable of intelligible communication due to total jar-induced madness, those unable to be roused from their torpor, and those with little worth saying.</p>
<p>A Jarred Brain exists in a weird state halfway between life and death. It is affected just as easily by magic that affects the living, the dead and the undead. 1-in-4 encounters here will always be with Floating Brains.</p>
        `);
      },
      event_override: function(params) {
        if (params.rng.rollDie(4) < 4) {
          return event;
        }
        return {
          type: {
            title: 'Floating Brains enter the room',
          },
          encounter: {
            content: function(count) {
              return `${count} Floating Brains`;
            },
            count: params.rng.rollDice(2, 6),
          },
        };
      },
      revisitable: false,
    },
    {
      title: 'Dissection Theatre',
      description: function(params) {
        var creatures_present_table = [
          'nobody is present',
          'a pair of black librarians is preparing for or cleaning up after a dissection',
          function() {
            var visitors = params.creation_rng.rollDice(2, 4);
            return `a Neurovore is performing a dissection, watched by ${
                visitors} Visitors and a Grey Librarian`
          }(),
          'an Archivist-Lich is performing a dissection, observed only by a Grey Librarian',
        ];
        var creatures_present =
            params.creation_rng.rollOnTable(creatures_present_table);
        const dissection_table = [
          'A human baby',
          'A monkey',
          'A large spider',
          'A pregnant ape',
          'An injured human youth',
          'An elderly human',
          'A goat',
          'A large shark',
          'The egg of a huge serpent',
          'A vampire, staked to keep it dormant',
          'A lobotomized elf',
          'An octopus',
        ];
        var dissection = params.creation_rng.rollOnTable(dissection_table);
        var alive = '';
        if (params.creation_rng.rollDie(4) === 4) {
          alive = ' The subject is still alive.';
        }
        return div(`
<p>A surgical table sits in the centre of this room, illuminated by bright lights and surrounded by seating for spectators. This is a space where researchers can take apart bodies (alive or dead) to see what\'s inside them. Sometimes there\'s an audience when this happens, but there\'s always a Grey Librarian taking notes.</p>
<p>When the PCs arrive, ${creatures_present}.</p>
<p>${dissection} lies on the dissection table.${alive}</p>
              `);
      },
      revisitable: false,
    },
    {
      title: 'Mummy Vault',
      description: function(params) {
        return div(`
<p>This is where dead Librarians go. Each is dried out, treated with the same chemicals used to preserve the books, and wrapped in a tight shroud. The shelves are packed with little corpses swaddled up in off-white grave cloths. It smells of natron and vinegar. The dead Librarians won\'t rise, ever.</p>
        `);
      },
      revisitable: false,
    },
    {
      title: 'Sheol Computer',
      description: function(params) {
        var librarians = params.visit_rng.rollDie(8);
        return div(`
<p>The Sheol Computer is the heart of the Library, the vast machine whose calculation drives everything else that happens here. The computer fills the entire room. It\'s mostly a tangle of thin glass tubes and valves through which phantoms flow like electricity through a computer\'s circuit-boards. Other more odd components are present, though.</p>
<p>There are a few each of:</p>
<ul>
  <li>Clockwork engines that tick up the count of souls in the machine.</li>
  <li>Human brains wired into the computer.</li>
  <li>Collections of dials and displays, allowing the White Librarians to monitor the computer\'s workings.</li>
</ul>
<p>There\'s also one each of the following components:</p>
<ul>
  <li>A huge canvas screen with text projected onto it that reflects what the computer is currently working on. The text flickers and scrolls past almost too fast to make out.</li>
  <li>A keyboard, with the letters A-Z, numbers 0-9, and punctuation, which can be used to input text into the computer. If text is input with the keyboard, it appears on the screen, followed by the computer\'s response.</li>
</ul>
<p>The possible inputs and responses are all of those for a Calculation Engine.</p>
<p>Also:</p>
<ul>
  <li>If the players include a dead person\'s name in their input, the computer will state their date and cause of death.</li>
  <li>If the players include a living person\'s name in their input, the computer will state their most likely cause of death and then:</li>
</ul>
<p class="mono">DATE UNKNOWN</p>
<ul>
  <li>For PCs, pick a cause of death that is most likely for that PC. The character takes maximum damage from that danger, always fails all Saves against it, is always the first affected by it, etc.</li>
  <li>If the players include the name of a deity, demon, angel, fairy or other immortal being in their input, the computer will list the date of their death as the accurate date of the end of the world, and the cause as</li>
</ul>
<p class="mono">ARMAGEDDON</p>
<ul>
  <li>If the players ask about the purpose of the Library or the Sheol Computer, it simply answers:</li>
</ul>
<p class="mono">ENTROPIC TRANSCENDENCE</p>
<p>D8 White Librarians attend to the Sheol Computer at all times, there are currently ${
            librarians} here. Damaging the Computer earns the enmity of all Librarians, forever.</p>
            `);
      },
      revisitable: true,
    },
  ];

  function onDevilClick() {
    var rng = dice.freeRng(new Math.seedrandom());
    const appearance_table = [
      'has an angelic appearance',
      'has a goat-human hybrid appearance',
      'has a bat-human hybrid appearance',
      'has a serpentine appearance',
      'has a corpselike appearance',
      'is perfectly human-looking, other than tiny horns',
    ];
    var appearance = rng.rollOnTable(appearance_table);
    const role_table = [
      'thrall',
      'lawyer',
      'librarian',
      'jailer',
      'torturer',
      'tempter of mortals',
      'financier',
      'diplomat to other realms',
    ];
    var role = rng.rollOnTable(role_table);
    const special_ability_table = [
      ' can turn any inanimate object to solid gold by touching it',
      ' can grant a wish for a mortal\'s soul upon death',
      ' can transform into a cloud of flies',
      ' can transform into a harmless-looking animal',
      ' can mimic the appearance of the viewer\'s loved ones',
      '\'s touch drains memory (D12 damage to Intelligence)',
      ' can telport short distances in a puff of smoke',
      ' can locate the soul of a specified individual unerringly',
      ' is immune to fire',
      ' casts charm person when it shakes your hand',
    ];
    var special_ability = rng.rollOnTable(special_ability_table);
    document.getElementById('devil').innerHTML = `
<p>This devil ${appearance}. Its role in the infernal hierarchy is that of a ${
        role}. It${special_ability}.</p>
    `;
  }

  function div(content) {
    var div = document.createElement('div');
    div.innerHTML = content;
    return div;
  }

  function createLocation(params) {
    var roll = params.creation_rng.rollDie(20) + params.depth;
    while (roll >= 35) {
      roll =
          params.creation_rng.rollDie(20) + params.creation_rng.rollDie(12) + 2;
    }
    var loc = locations[roll - 1];
    return {
      title: loc.title,
      description: loc.description(params),
      event_override: loc.event_override,
      revisitable: loc.revisitable,
      location_fn: loc,
    };
  }

  return {
    createLocation: createLocation,
    onDevilClick: onDevilClick,
  };
}();

function onDevilClick() {
  stygian_locations.onDevilClick();
}
