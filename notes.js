const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(note => {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New Notes added'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

const removeNote = title => {
  const notes = loadNotes();

  const notesToKeep = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse('Note is Removed'));
  } else {
    console.log(chalk.red.inverse('Nothing to Remove'));
  }
};

//list notes
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your Notes!'));
  notes.forEach(note => {
    console.log(chalk.blue(note.title));
  });
};

//read notes

const readNote = title => {
  const notes = loadNotes();

  const noteData = notes.find(note => {
    return note.title === title;
  });

  if (noteData) {
    console.log(chalk.yellow.inverse(noteData.title));
    console.log(noteData.body);
  } else {
    console.log(chalk.red('Nothing to read'));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};
