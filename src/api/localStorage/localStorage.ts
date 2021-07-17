import { Note } from "../../models/note";
import { v4 as uuidv4 } from "uuid";

const notes_key = "KEEP-CLONE__NOTE";

export const saveNote = async (note: Note): Promise<Note> => {
  //create an ID for the note
  const id: string = uuidv4();

  //Give the note the ID
  note.id = id;

  //Get all the current notes
  const oldNotes: Note[] = await getNotes();

  //update the notes
  const newNotes = [note, ...oldNotes];

  //save it in the local storage
  localStorage.setItem(notes_key, JSON.stringify(newNotes));

  return new Promise((resolve) => {
    resolve(note);
  });
};

export const getNotes = (): Promise<Note[]> => {
  const result = localStorage.getItem(notes_key);
  let output: Note[];

  if (result) {
    const notes = JSON.parse(result);
    output = notes;
  } else output = [];

  return new Promise((resolve) => {
    resolve(output);
  });
};

// export const updateNote = (note: Note) => {};
