import { Note } from "../../models/note";

export type Action = {
  type: "ADD_NOTE";
  payload: Note;
};

export const addNote = (note: Note): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
