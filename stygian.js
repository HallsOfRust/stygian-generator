var selected_room_id;
var selected_room_depth;
var visitors = false;
var active = false;

function goDeeperClick() {
  var metadata = library.goDeeper();
  if (!metadata) {
    return;
  }
  setRoom(contentgen.createRoom(metadata));
  setEvent(contentgen.getNextEvent(selected_room_id));
}

function addConnectionClick() {
  library.addConnection();
}

function deleteClick() {
  contentgen.remove(library.deleteSelection());
}

function eventClick() {
  setEvent(contentgen.getNextEvent(selected_room_id));
}

function revisitClick() {
  setRoom(contentgen.revisit(selected_room_id));
}

function toggleVisitorsClick() {
  toggleVisitors();
}

function toggleActiveClick() {
  toggleActive();
}

function saveClick() {
  save();
}

function loadClick() {
  load();
}

function addProgressClick(inc) {
  contentgen.addProgress(inc);
  setProgress();
}

function regenerateRoomClick() {
  setRoom(contentgen.createRoom({
    id: selected_room_id,
    depth: selected_room_depth,
  }));
  setEvent(contentgen.getNextEvent(selected_room_id));
}

function toggleActive() {
  active = !active;
  contentgen.setActive(active);
  var active_btn = document.getElementById('toggle-active');
  if (active) {
    active_btn.innerHTML = 'PCS ARE EXPLORING';
  } else {
    active_btn.innerHTML = 'PCS ARE RESTING';
  }
}

function toggleVisitors() {
  visitors = !visitors;
  contentgen.setVisitors(visitors);
  setVisitors();
}

function setVisitors() {
  var visitors_btn = document.getElementById('toggle-visitors');
  if (contentgen.getVisitors()) {
    visitors_btn.innerHTML = 'PCS ARE VISITORS';
  } else {
    visitors_btn.innerHTML = 'PCS ARE INTRUDERS';
  }
}

function save() {
  var data = contentgen.getAllData();
  var a = document.createElement('a');
  var file = new Blob([JSON.stringify(data, null, 2)], {type: 'text/plain'});
  a.href = URL.createObjectURL(file);
  a.download = 'stygian_library.json';
  a.click();
}

function load() {
  const file = document.getElementById('load-file').files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = function(evt) {
    var data = JSON.parse(evt.target.result);
    contentgen.loadData(data);
    var root_id = library.load(Object.values(data.rooms));
    setRoom(contentgen.getRoom(root_id));
    setProgress();
    setVisitors();
  }
}

function setProgress() {
  document.getElementById('progress').innerHTML =
      'Progress ' + contentgen.getProgress();
}

function setRoom(room) {
  console.log('Room: ', room);
  selected_room_id = room.id;
  selected_room_depth = room.depth;
  document.getElementById('depth').innerHTML = 'Depth ' + room.depth;
  document.getElementById('location-title').innerHTML =
      room.location.title.toUpperCase();
  var loc_desc = document.getElementById('location-description');
  loc_desc.innerHTML = '';
  loc_desc.appendChild(room.location.description);
  document.getElementById('details-title').innerHTML =
      room.details.title.toUpperCase();
  var det_desc = document.getElementById('details-description');
  det_desc.innerHTML = '';
  det_desc.appendChild(room.details.description);
  var event_div = document.getElementById('event-content');
  event_div.innerHTML = '';
  event_div.style.display = 'none';

  var revisit_btn = document.getElementById('revisit-btn');
  if (room.location.revisitable) {
    revisit_btn.style.display = 'block';
  } else {
    revisit_btn.style.display = 'none';
  }
}

function setEvent(event_content) {
  console.log('Event: ', event_content);
  var event_div = document.getElementById('event-content');
  event_div.innerHTML = '';
  event_div.style.display = 'block';
  if (event_content.length) {
    for (const single_event of event_content) {
      setSingleEvent(single_event);
    }
  } else {
    setSingleEvent(event_content);
  }
}

function setSingleEvent(single_event) {
  var event_div = document.createElement('div');
  var type_div = document.createElement('div');
  var type_title = document.createElement('h1');
  var type_subtitle = document.createElement('h2');

  document.getElementById('event-content').appendChild(event_div);
  event_div.appendChild(type_div);
  type_div.appendChild(type_title);
  type_div.appendChild(type_subtitle);

  type_title.innerHTML = single_event.type.title.toUpperCase();
  if (single_event.type.subtitle) {
    type_subtitle.innerHTML = single_event.type.subtitle;
  }
  if (single_event.encounter) {
    var encounters_div = document.createElement('div');
    event_div.appendChild(encounters_div);
    var encounter = single_event.encounter;
    if (encounter.length) {
      for (const single_encounter of encounter) {
        var single_encounter_div = document.createElement('div');
        encounters_div.appendChild(single_encounter_div);
        single_encounter_div.innerHTML =
            'Encounter: ' + single_encounter.content(single_encounter.count);
      }
      for (const single_encounter of encounter) {
        var monster_div = document.createElement('div');
        encounters_div.appendChild(monster_div);
        monster_div.innerHTML = getEncounterMonsters(single_encounter);
      }
    } else {
      encounters_div.innerHTML =
          'Encounter: ' + encounter.content(encounter.count);
      encounters_div.innerHTML += getEncounterMonsters(encounter);
    }
  }
  if (single_event.treasure) {
    var treasure_div = document.createElement('div');
    event_div.appendChild(treasure_div);

    var treasure_title = document.createElement('h3');
    treasure_div.appendChild(treasure_title);
    treasure_title.innerHTML = 'TREASURE';

    var treasure_content_div = document.createElement('div');
    treasure_div.appendChild(treasure_content_div);
    treasure_content_div.innerHTML = single_event.treasure;
  }
  if (single_event.books) {
    var book_div = document.createElement('div');
    event_div.appendChild(book_div);

    var book_title = document.createElement('h3');
    book_div.appendChild(book_title);
    book_title.innerHTML = 'EXTRAORDINARY BOOKS';

    var book_content_div = document.createElement('div');
    book_div.appendChild(book_content_div);
    book_content_div.innerHTML = single_event.books;
  }
}

function getEncounterMonsters(encounter) {
  var content = '';
  if (encounter.monsters) {
    if (encounter.monsters.length) {
      for (const monster of encounter.monsters) {
        content += monster;
      }
    } else {
      content += encounter.monsters;
    }
  }
  return content;
}

function onSelectRoom(selection_data) {
  setRoom(contentgen.getRoom(selection_data.nodes[0]));
  setEvent(contentgen.getCurrentEvent(selected_room_id));
}

function onAddConnection(from, to, manual) {
  contentgen.addConnection(from, to, manual);
}

toggleVisitors();
toggleActive();
document.getElementById('toggle-visitors').style.width =
    ('PCS ARE INTRUDERS'.length * 16) + 'px';
const load_file = document.getElementById('load-file');
load_file.addEventListener('change', (event) => {
  load();
});
library.setOnSelectRoomCallback(onSelectRoom);
library.setOnAddConnectionCallback(onAddConnection);
const root_id = library.addFirstRoom();
setRoom(contentgen.createRoom({id: root_id, depth: 0}));
setProgress();
library.stabilize();

