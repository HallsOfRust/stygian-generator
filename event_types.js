var stygian_event_types = function() {
  var types = [
    {
      createEvent: createSingleEncounterEvent(
          {title: 'Something turns up; it\'s unfriendly'}),
    },
    {
      createEvent: createSingleEncounterEvent(
          {title: 'Something turns up; it\'s merely curious'}),
    },
    {
      createEvent: createSingleEncounterEvent(
          {title: 'Something is disturbed while eating or reading.'}),
    },
    {
      createEvent: function(params) {
        const type = {
          title: 'A fight or argument spills into the Location.',
          subtitle:
              'They\'re already fighting each other before the players get involved!'
        };
        var encounter1 = createSingleEncounterEvent(type)(params);
        var encounter2 = createSingleEncounterEvent(type)(params);
        return {
          type: type,
          encounter: [encounter1.encounter, encounter2.encounter],
        };
      },
    },
    {
      createEvent: function(params) {
        const type = {
          title:
              'Something\'s territory is disturbed and it defends its lair, office, etc.'
        };
        var single_event = createSingleEncounterEvent(type)(params);
        if (single_event.encounter && single_event.encounter.count.length) {
          for (let i = 0; i < single_event.encounter.count.length; ++i) {
            single_event.encounter.count[i] *= 2;
          }
        } else if (single_event.encounter.count > 1) {
          single_event.encounter.count *= 2;
        }
        return single_event;
      },
    },
    {
      createEvent: createSingleEncounterEvent({
        title:
            'Something turns up, badly injured, totally lost or otherwise at a disadvantage.'
      }),
    },
    {
      createEvent: createSingleEncounterEvent({
        title:
            'Something is returning to its home, office, etc., and is surprised to find the PCs here.'
      }),
    },
    {
      createEvent: createEmptyEvent({
        title:
            'An unexpected gust of wind extinguishes any exposed flames such as candles, torches etc.'
      }),
    },
    {
      createEvent: createEmptyEvent({
        title: 'The PCs become disoriented and lose track of their position.',
        subtitle: 'Reduce their progress by 1.'
      }),
    },
    {
      createEvent: function(params) {
        const current_type = {
          title:
              'An ominous ticking can be heard from beneath the floorboards. ',
          subtitle:
              'Nothing happens yet. The next time, two Events will occur at once.'
        };
        var current_event = createEmptyEvent(current_type)(params);
        var create_other_event = function() {
          var next_event = createEvent(params);
          // Make sure we don't roll this event type again.
          while (next_event.type === current_type) {
            next_event = createEvent(params);
          }
          return next_event;
        };
        var add_events = function(events, next_event) {
          if (!next_event.length) {
            events[1].push(next_event);
            return;
          }
          for (let i = 0; i < next_event.length; ++i) {
            if (events.length <= i + 1) {
              events.push([]);
            }
            if (next_event[i].length) {
              events[i + 1].push(...(next_event[i]));
            } else {
              events[i + 1].push(next_event[i]);
            }
          }
        };
        var events = [current_event, []];
        add_events(events, create_other_event());
        add_events(events, create_other_event());
        return events;
      },
    },
    {
      createEvent: function(params) {
        const current_type = {
          title:
              'Footprints, litter, research notes or other signs of passage are found. ',
          subtitle: 'The next encounter will be with:'
        };
        const next_type = {
          title: 'The creature that left signs of passage has returned.'
        };
        var current_event = createSingleEncounterEvent(current_type)(params);
        var next_event = {
          type: next_type,
          encounter: current_event.encounter,
        };
        return [current_event, next_event];
      },
    },
    {
      createEvent: function(params) {
        const current_type = {
          title: 'Something\'s empty home or office is found.',
          subtitle:
              'The creature listed below lives here, but it\'s not home currently.'
        };
        const next_type = {title: 'The creature that lives here comes back.'};
        var current_event = createSingleEncounterEvent(current_type)(params);
        var original_content = current_event.encounter.content;
        current_event.encounter.content = function(count) {
          return 'The next encounter in this location will be with: ' +
              original_content(count);
        };
        current_event.treasure =
            params.treasure.createTreasure(params.room.depth, params.rng);
        current_event.books =
            params.books.getNextBook(params.room.depth, params.rng);
        var next_event = {
          type: next_type,
          encounter: {
            count: current_event.encounter.count,
            content: original_content,
          },
        };
        return [current_event, next_event];
      },
    },
    {
      createEvent: createSingleTreasureEvent({
        title: 'A cache of hidden treasure is found under the floorboards!'
      }),
    },
    {
      createEvent: createSingleTreasureEvent({
        title: 'A cache of hidden treasure is found in a chest of drawers!'
      }),
    },
    {
      createEvent: function(params) {
        return {
          type: {
            title: 'An Extraordinary Book is found on one of the shelves!',
          },
          books: params.books.getNextBook(params.room.depth, params.rng),
        };
      },
    },
    {
      createEvent: function(params) {
        var progress = params.rng.rollDie(4);
        return {
          type: {
            title:
                'A set of detailed notes on the Library\' s layout, left by previous researchers!',
            subtitle: `Add ${progress} to the party's Progress.`
          }
        };
      },
    },
    {
      createEvent: createEmptyEvent({
        title:
            'A bookshelf swings out from the wall to reveal a secret passage!',
        subtitle:
            ' It leads somewhere else on the map-draw a line leading to a previously explored location, ideally one less deep than the current location.',
      }),
    },
    {
      createEvent: function(params) {
        var depth = params.rng.rollDie(6) + 1;
        return {
          type: {
            title: 'An ominous locked door!',
            subtitle:
                `If it can be opened (with lockpicking, force, etc.) it leads to a location ${
                    depth} layers deeper.`,
          }
        };
      },
    },
    {
      createEvent: createEmptyEvent({
        title: 'A spiral staircase behind one of the shelves!',
        subtitle: 'It leads back to where the PCs first entered the Library.'
      }),
    },
    {
      createEvent: createEmptyEvent({
        title:
            'Behind the party, the bookshelves rearrange themselves, blocking their route back!',
        subtitle: 'Erase one of the exits at this Location.'
      }),
    }
  ];

  function createSingleEncounterEvent(type) {
    return function(params) {
      return {
        type: type,
        encounter: params.encounters.createEncounter(params),
      };
    };
  }

  function createEmptyEvent(type) {
    return function(params) {
      return {type: type};
    };
  }

  function createSingleTreasureEvent(type) {
    return function(params) {
      return {
        type: type,
        treasure: params.treasure.createTreasure(params.room.depth, params.rng),
      };
    };
  }

  // params: {room, rng, encounters, treasure, books, active}
  // returns: (array of (array of)?)? {type, (array of)? encounter?, treasure?,
  // books?}
  function createEvent(params) {
    var die_size = params.active ? 20 : 12;
    var roll = params.rng.rollDie(die_size);
    var type = types[roll - 1];
    var event = type.createEvent(params);
    if (params.room.location.event_override) {
      params.event = event;
      event = params.room.location.event_override(params);
    }
    return event;
  }

  return {
    createEvent: createEvent,
  };
}();
