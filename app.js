const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('Note created...');
      notes.logNote(note);
    } else {
      console.log('The note: ' + argv.title + ' already exists.');
    };
} else if (command === 'list') {
  let allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
  var note = notes.getNote(argv.title, argv.body);
    if (note) {
      console.log('Note read');
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note removed` : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
