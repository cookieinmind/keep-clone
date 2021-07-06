import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "./Input";
import { NotesState } from "./noteReducer";
import { addNote } from "./actions";
import { FullInput } from "./FullInput";
import { useState } from "react";
import { Note } from "./noteReducer";

function App() {
  //Variables
  const [isInputFocused, setIsInputFocused] = useState(false);

  const notes = useSelector<NotesState, NotesState["notes"]>((n) => n.notes);

  const dispatch = useDispatch();

  // Functions
  const handleChangeOfInput = (val: boolean) => {
    setIsInputFocused(val);
  };

  const handleSubmition = (note: Note) => {
    dispatch(addNote(note));
  };

  //Styles
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    padding: "50px 100px",
    gridTemplateRows: "1fr 3fr",
    rowGap: "50px",
    height: "calc(100vh - 150px)",
  };

  return (
    <div style={containerStyles}>
      {isInputFocused ? (
        <FullInput
          isInputFocused={isInputFocused}
          setIsInputFocused={handleChangeOfInput}
          addNote={handleSubmition}
        />
      ) : (
        <Input
          isInputFocused={isInputFocused}
          setIsInputFocused={handleChangeOfInput}
        />
      )}
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>{note.content}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
