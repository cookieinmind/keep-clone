import { Action } from "../actions/actions";
import { Note } from "../models/note";

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur dictum tincidunt. Vivamus viverra lacinia orci, eu tincidunt neque convallis in. ",
      tag: "work",
    },
    {
      id: 2,
      content:
        "Quisque maximus condimentum lorem et sollicitudin. Donec vitae dui finibus, lacinia lacus at, volutpat urna. Etiam dictum tortor a massa convallis venenatis. Suspendisse pretium quam felis, a blandit leo feugiat nec. Praesent a iaculis nibh. Donec rhoncus quis lorem eu lobortis",
      tag: "work",
    },
    {
      id: 3,
      content:
        "Donec ac mauris nec erat ultricies rhoncus sagittis eu diam. Cras gravida malesuada lectus id dignissim. Proin hendrerit placerat ipsum. ",
      tag: "work",
    },
    {
      id: 4,
      content:
        " Cras scelerisque tortor arcu, volutpat tempor quam vehicula eget. Quisque sed ante eu justo accumsan varius. Ut ut euismod mauris.",
      tag: "work",
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
      return { ...state, notes: [...state.notes, action.payload] };
    default:
      return state;
  }
};
