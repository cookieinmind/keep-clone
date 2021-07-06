import { Action } from "./actions";

export type Note = {
  id: number;
  content: string;
  tag?: string;
};

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
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
