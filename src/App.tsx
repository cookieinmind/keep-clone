import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { NotesState } from "./noteReducer";
import { addNote } from "./actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((n) => n.notes);

  const dispatch = useDispatch();

  const handleSubmition = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={handleSubmition} />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
