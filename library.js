var library = function() {
  const white = '#ffffff';
  const options = {
    nodes: {
      borderWidth: 2,
      borderWidthSelected: 10,
      shape: 'box',
      widthConstraint: 40,
      heightConstraint: 25,
      color: {
        border: white,
        background: white,
        highlight: {
          border: white,
          background: white,
        },
        hover: {
          border: white,
          background: white,
        },
      },
    },
    edges: {
      width: 2,
      selectionWidth: 4,
      color: {
        color: white,
        highlight: white,
        hover: white,
      },
    },
    layout: {
      hierarchical: {
        enabled: true,
        nodeSpacing: 10,
      },
    },
    interaction: {
      hover: true,
      dragNodes: false,
      keyboard: true,
    },
    physics: {
      hierarchicalRepulsion: {
        nodeDistance: 50,
        avoidOverlap: 1,
      },
    },
    manipulation: {
      enabled: false,
      initiallyActive: false,
      addNode: false,
      addEdge: addEdgeCallback,
      editEdge: false,
      controlNodeStyle: {
        borderWidth: 2,
        borderWidthSelected: 2,
        widthConstraint: 4,
        heightConstraint: 2,
        color: {
          border: white,
          background: white,
          highlight: {
            border: white,
            background: white,
          },
          hover: {
            border: white,
            background: white,
          },
        },
      },
    },
    locales: {
      en: {
        edit: 'Edit',
        del: 'Delete selection',
        back: 'Back',
        addEdge: 'Add Connection',
        edgeDescription: 'Click and drag between rooms to connect them.',
      },
    },
  };
  var onSelectRoomCallback;
  var onAddConnectionCallback;
  var rooms;
  var edges;
  var next_id;

  var container;
  var data;
  var network;

  function nextId() {
    next_id += 1;
    return next_id - 1;
  }

  function addRoom(room_id, depth, prev_room_id) {
    rooms.add({
      id: room_id,
      level: depth,
    });
    if (prev_room_id) {
      addEdge(prev_room_id, room_id);
    }
    return room_id;
  }

  function addFirstRoom() {
    var root_id = addRoom(nextId(), 0, null);
    selectRoom(root_id);
    return root_id;
  }

  function createEdge(from, to, manual) {
    if (from === to || network.getConnectedNodes(from).includes(to)) {
      return null;
    }
    var edge = {
      id: nextId(),
      from: from,
      to: to,
    };
    if (manual) {
      edge.dashes = true;
      edge.smooth = {
        enabled: true,
        type: 'curvedCW',
      };
    }
    if (onAddConnectionCallback) {
      onAddConnectionCallback(from, to, manual);
    }
    return edge;
  }

  function addEdge(from, to) {
    var edge = createEdge(from, to, false);
    if (!edge) {
      return;
    }
    edges.add(edge);
  }

  function addEdgeCallback(edge_data, callback) {
    var edge = createEdge(edge_data.from, edge_data.to, true);
    if (!edge) {
      return;
    }
    callback(edge);
  }

  function goDeeper() {
    var selected_rooms = network.getSelectedNodes();
    if (selected_rooms.length !== 1) {
      notify('Select a room');
      return null;
    }
    var prev_room = selected_rooms[0];
    var new_level = rooms.get(prev_room).level + 1;
    var room_id = nextId();
    var new_room = addRoom(room_id, new_level, prev_room);
    addEdge(prev_room, new_room);
    selectRoom(new_room);

    return {
      id: new_room,
      depth: new_level,
    };
  }

  function addConnection() {
    network.addEdgeMode();
  }

  function deleteSelection() {
    var selection = network.getSelection();
    if (selection.nodes.length === 0 && selection.edges.length === 0) {
      notify('Select a room');
      return;
    }
    if (rooms.length === 1) {
      notify('Can\'t delete only room');
      return;
    }
    var node = selection.nodes.length > 0 ? selection.nodes[0] : null;
    var edges = [];
    if (selection.edges.length > 0) {
      for (var edge of selection.edges) {
        var conns = network.getConnectedNodes(edge);
        edges.push({
          from: conns[0],
          to: conns[1],
        });
      }
    }
    network.deleteSelected();
    return {
      node: node,
      edges: edges,
    };
  }

  function stabilize() {
    network.stabilize();
    network.redraw();
  }

  function selectRoom(room_id) {
    network.setSelection({nodes: [room_id]});
    network.redraw();
  }

  function load(rooms) {
    const tmpOnAddConnCb = onAddConnectionCallback;
    onAddConnectionCallback = null;
    initialize();
    network.on('selectNode', onSelectRoomCallback);
    var root_id = Number.MAX_SAFE_INTEGER;
    var max_id = 1;
    for (const room of rooms) {
      addRoom(room.id, room.depth, room.connections[0]);
      root_id = Math.min(root_id, room.id);
      max_id = Math.max(max_id, room.id);
    }
    for (const room of rooms) {
      for (const conn of room.connections) {
        edges.add(createEdge(room.id, conn.to, conn.manual));
        max_id += 1;
      }
    }
    next_id = max_id + 1;
    selectRoom(rooms[0].id);
    onAddConnectionCallback = tmpOnAddConnCb;
    return root_id;
  }

  function setOnSelectRoomCallback(callback) {
    onSelectRoomCallback = callback;
    network.on('selectNode', callback);
  }

  function setOnAddConnectionCallback(callback) {
    onAddConnectionCallback = callback;
  }

  function notify(text) {
    var notification = document.createElement('div');
    notification.id = 'notification';
    notification.appendChild(document.createTextNode(text));
    container = document.getElementById('library');
    container.appendChild(notification);
    setTimeout(() => {
      const elem = document.getElementById('notification');
      elem.parentNode.removeChild(elem);
    }, 5000);
  }

  function initialize() {
    rooms = new vis.DataSet([]);
    edges = new vis.DataSet([]);
    next_id = 1;

    container = document.getElementById('library');
    data = {
      nodes: rooms,
      edges: edges,
    };
    network = new vis.Network(container, data, options);
  }

  initialize();

  return {
    addRoom: addRoom,
    addFirstRoom: addFirstRoom,
    addConnection: addConnection,
    deleteSelection: deleteSelection,
    goDeeper: goDeeper,
    selectRoom: selectRoom,
    setOnSelectRoomCallback: setOnSelectRoomCallback,
    setOnAddConnectionCallback: setOnAddConnectionCallback,
    stabilize: stabilize,
    load: load,
  };
}();

