import { Action } from "../actions/actions";
import { Note } from "../models/note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      id: 0,
      content: "Add new notes to the top",
      tag: "to do",
    },
    {
      id: 1,
      content: "Make the fonts sizes uniform",
      tag: "to do",
    },
    {
      id: 2,
      content: "Add a way to check the notes",
      tag: "to do",
    },

    {
      id: 3,
      content: "Add a way to add tags to a note",
      tag: "to do",
    },
    {
      id: 4,
      content: "Add a side menu with each category",
      tag: "to do",
    },
  ],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  console.log("reducer:");
  console.log(state, action);

  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [action.payload, ...state.notes] };
    default:
      return state;
  }
};
