import { createStore } from "redux";
import { notesReducer } from "./reducers/noteReducer";

export const store = createStore(notesReducer);
