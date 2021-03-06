import { Note } from "../../models/note";
import { v4 as uuidv4 } from "uuid";
import { Tag } from "../../models/tag";

const notes_key = "KEEP-CLONE__NOTES";
const tags_key = "KEEP-CLONE__TAGS";

//*NOTES
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

export const updateNote = async (note: Note): Promise<Note> => {
  //Get all the current notes
  const serverNotes: Note[] = await getNotes();

  //the notes without the updated one
  const leftOverNotes: Note[] = serverNotes.filter((n) => n.id !== note.id);

  //update the array
  const newNotes: Note[] = [...leftOverNotes, note];

  //save it in the local storage
  localStorage.setItem(notes_key, JSON.stringify(newNotes));

  return new Promise((resolve) => {
    resolve(note);
  });
};

export const deleteNote = async (note: Note): Promise<Note> => {
  //Get all the current notes
  const oldNotes: Note[] = await getNotes();

  //update the notes
  const newNotes = oldNotes.filter((n) => n.id !== note.id);

  //save it in the local storage
  localStorage.setItem(notes_key, JSON.stringify(newNotes));

  return new Promise((resolve) => {
    resolve(note);
  });
};

//*TAGS
export const getTags = (): Promise<Tag[]> => {
  const result = localStorage.getItem(tags_key);
  let output: Tag[];

  if (result) {
    const tags = JSON.parse(result);
    output = tags;
  } else output = [];

  return new Promise((resolve) => {
    resolve(output);
  });
};

export const saveTags = async (tags: Tag[]): Promise<Tag[]> => {
  const addOnTags: Tag[] = tags.map((tag) => {
    //create an ID for the note
    const id: string = uuidv4();

    //Give the tag the ID
    tag.id = id;

    return tag;
  });

  //Get all the current notes
  const oldTags: Tag[] = await getTags();

  //update the notes
  const newTags = [...addOnTags, ...oldTags];

  //save it in the local storage
  localStorage.setItem(tags_key, JSON.stringify(newTags));

  return new Promise((resolve) => {
    resolve(addOnTags);
  });
};

export const updateTag = async (tag: Tag): Promise<Tag> => {
  //Get all the current notes
  const serverTags: Tag[] = await getTags();

  //the notes without the updated one
  const leftOverTags: Tag[] = serverTags.filter((t) => t.id !== tag.id);

  //update the array
  const newTags: Tag[] = [...leftOverTags, tag];

  //save it in the local storage
  localStorage.setItem(tags_key, JSON.stringify(newTags));

  return new Promise((resolve) => {
    resolve(tag);
  });
};

export const deleteTag = async (tag: Tag): Promise<Tag> => {
  //Get all the current notes
  const oldTags: Tag[] = await getTags();

  //update the notes
  const newTags = oldTags.filter((t) => t.id !== tag.id);

  //save it in the local storage
  localStorage.setItem(tags_key, JSON.stringify(newTags));

  return new Promise((resolve) => {
    resolve(tag);
  });
};
