var contentgen = function() {
  function createLocation(creation_rng, global_rng, depth) {
    return stygian_locations.createLocation({
      depth: depth,
      creation_rng: creation_rng,  // To be used on room creation.
      visit_rng: global_rng,       // To be used on room visit.
      treasure: stygian_treasure,
      books: stygian_books,
    });
  }

  function createDetails(creation_rng, depth) {
    return stygian_details.createDetails({
      depth: depth,
      creation_rng: creation_rng,
    });
  }

  function createRoomWithRng(seed, global_rng, metadata) {
    var creation_rng = dice.savingRng(new Math.seedrandom(seed));
    var location = createLocation(creation_rng, globals.rng, metadata.depth);
    var details = createDetails(creation_rng, metadata.depth);
    var room = {
      id: metadata.id,
      depth: metadata.depth,
      next_events: [],
      connections: [],
      rng: dice.fixedRng(creation_rng.getRolls()),
      seed: seed,
    };
    globals.rooms[metadata.id] = room;
    return getRoom(room.id);
  }

  function createRoom(metadata) {
    return createRoomWithRng(globals.rng.newSeed(), globals.rng, metadata);
  }

  function getRoom(room_id) {
    var room = globals.rooms[room_id];
    var location = createLocation(room.rng, globals.rng, room.depth);
    var details = createDetails(room.rng, room.depth);
    room.rng.reset();
    return {
      id: room.id,
      depth: room.depth,
      location: location,
      details: details,
      next_events: room.next_events,
    };
  }

  function addEvents(room, rng, active) {
    var encounters;
    if (visitors) {
      encounters = stygian_visitor_encounters;
    } else {
      encounters = stygian_intruder_encounters;
    }
    var room_event = stygian_event_types.createEvent({
      room: room,
      active: active,
      rng: rng,
      encounters: encounters,
      treasure: stygian_treasure,
      books: stygian_books,
      monsters: stygian_monsters,
    });
    if (room_event.length) {
      // Multiple events.
      for (const single_event of room_event) {
        room.next_events.push(single_event);
      }
    } else {
      room.next_events.push(room_event);
    }
  }

  function revisit(room_id) {
    var room = globals.rooms[room_id];
    room = createRoomWithRng(
        room.seed, globals.rng, {id: room_id, depth: room.depth});
    return room;
  }

  function setVisitors(visitors) {
    globals.visitors = visitors;
  }

  function getVisitors() {
    return globals.visitors;
  }

  function setActive(active) {
    globals.active = active;
  }

  function addConnection(from, to, manual) {
    globals.rooms[from].connections.push({
      to: to,
      manual: manual,
    });
  }

  function removeEdge(room, edge) {
    room.connections = room.connections.filter(
        conn =>
            !(conn.to == edge.to && room.id == edge.from ||
              conn.to == edge.from && room.id == edge.to));
  }

  function remove(data) {
    for (var edge of data.edges) {
      if (globals.rooms[edge.from]) {
        removeEdge(globals.rooms[edge.from], edge);
      }
      if (globals.rooms[edge.to]) {
        removeEdge(globals.rooms[edge.to], edge);
      }
    }
    if (data.node) {
      delete globals.rooms[data.node];
    }
  }

  function getNextEvent(room_id) {
    var room = getRoom(room_id);
    room.next_events.shift();
    if (room.next_events.length === 0) {
      addEvents(room, globals.rng, globals.active);
    }
    return room.next_events[0];
  }

  function getCurrentEvent(room_id) {
    var room = getRoom(room_id);
    if (room.next_events.length === 0) {
      addEvents(room, globals.rng, globals.active);
    }
    return room.next_events[0];
  }

  function getAllData() {
    // TODO: Support saving of events (or erase them).
    var room_data = [];
    for (var room of Object.values(globals.rooms)) {
      room_data.push({
        id: room.id,
        depth: room.depth,
        connections: room.connections,
        rolls: room.rng.getRolls(),
      });
    }
    return {
      visitors: globals.visitors,
      active: globals.active,
      progress: globals.progress,
      rooms: room_data,
    };
  }

  function loadData(data) {
    globals.rooms = {};
    for (var room of data.rooms) {
      globals.rooms[room.id] = {
        id: room.id,
        depth: room.depth,
        connections: room.connections,
        rng: dice.fixedRng(room.rolls),
        next_events: [],
      };
    }
    globals.visitors = data.visitors;
    globals.active = data.active;
    globals.progress = data.progress;
    console.log('Loaded data: ', data);
  }

  function getProgress() {
    return globals.progress;
  }

  function addProgress(inc) {
    globals.progress += inc;
  }

  var globals = {
    rng: dice.freeRng(new Math.seedrandom()),
    visitors: true,
    active: false,
    progress: 0,
    rooms: {},
  };
  return {
    addConnection: addConnection,
    createRoom: createRoom,
    remove: remove,
    getAllData: getAllData,
    getNextEvent: getNextEvent,
    getCurrentEvent: getCurrentEvent,
    getRoom: getRoom,
    loadData: loadData,
    revisit: revisit,
    setActive: setActive,
    setVisitors: setVisitors,
    getVisitors: getVisitors,
    getProgress: getProgress,
    addProgress: addProgress,
  };
}();
