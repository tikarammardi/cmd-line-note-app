const chalk = require('chalk');
const yargs = require('yargs');
const command = process.argv[2];

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
    }
  },
  handler: function(argv) {
    console.log(`Title: ${argv.title}`);
  }
});

//create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note.....');
  }
});

yargs.command({
  command: 'list',
  describe: 'list of  note',
  handler: function() {
    console.log('Listing all a  note............');
  }
});

//create remove command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading the note.....');
  }
});

yargs.parse();
//console.log(yargs.argv);
