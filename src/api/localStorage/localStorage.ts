import { Note } from "../../models/note";
import { v4 as uuidv4 } from "uuid";

const app_prefix = "KEEP-CLONE__NOTE";

export const saveNote = (note: Note): Promise<Note> => {
  //create an ID for the note
  const id: string = uuidv4();

  //create a key -> KEEP-CLONE__NOTE + note.id
  const key = app_prefix + ": " + id;

  //Give the note the ID
  note.id = id;

  //save it in the local storage
  localStorage.setItem(key, JSON.stringify(note));

  return new Promise((resolve) => {
    resolve(note);
  });
};
