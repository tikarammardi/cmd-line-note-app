const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

//create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      discribe: 'Enter your Note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: 'list',
  describe: 'list of  note',
  handler: function() {
    notes.listNotes();
  }
});

//create remove command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Enter Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();
//console.log(yargs.argv);
