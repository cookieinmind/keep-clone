import { Note } from "./noteReducer";

export type Action = {
  type: "ADD_NOTE";
  payload: Note;
};

export const addNote = (note: Note): Action => ({
  type: "ADD_NOTE",
  payload: note,
});
