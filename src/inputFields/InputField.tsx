import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../state/models/note";
import { addNote } from "../state/actions/actions";

export interface InputFieldProps {}

const InputField: React.FunctionComponent<InputFieldProps> = () => {
  //Variables
  const [isInputFocused, setIsInputFocused] = useState(false);

  const dispatch = useDispatch();

  // Functions
  const handleChangeOfInput = (val: boolean) => {
    setIsInputFocused(val);
  };

  const handleSubmition = (note: Note) => {
    console.log("field");
    dispatch(addNote(note));
  };

  //Styles
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    padding: "50px 100px",
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
