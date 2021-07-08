import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../state/reducers/noteReducer";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../state/models/note";

export interface InputFieldProps {
  addnote: (note: Note) => void;
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  addnote: addNote,
}) => {
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
        <CompactInput
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

    // <div style={containerStyles}>
    //   <FullInput
    //     isInputFocused={isInputFocused}
    //     setIsInputFocused={handleChangeOfInput}
    //     addNote={handleSubmition}
    //   />
    // </div>
  );
};

export default InputField;
