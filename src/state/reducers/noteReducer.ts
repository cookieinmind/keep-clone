import { Action } from "../actions/actions";
import { Note } from "../models/note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [action.payload, ...state.notes] };
    default:
      return state;
  }
};
