import { Note } from "../models/note";
import {
  saveNote,
  getNotes,
  deleteNote,
  updateNote,
} from "./localStorage/localStorage";

export const GetNotes = async (): Promise<Note[]> => {
  return getNotes();
};

export const DeleteNote = async (note: Note) => {
  return deleteNote(note);
};

export const AddNote = async (note: Note): Promise<Note> => {
  return saveNote(note);
};

export const UpdateNote = async (note: Note) => {
  return updateNote(note);
};
