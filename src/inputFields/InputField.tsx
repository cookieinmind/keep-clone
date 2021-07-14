import React from "react";
import { useState } from "react";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../models/note";
import { useServerContext } from "../context/ServerContext";

export interface InputFieldProps {}

const InputField: React.FunctionComponent<InputFieldProps> = () => {
  //Variables
  const [isInputFocused, setIsInputFocused] = useState(false);

  const tagContext = useServerContext();

  // Functions
  const handleChangeOfInput = (val: boolean) => {
    setIsInputFocused(val);
  };

  const handleSubmition = async (note: Note) => {
    tagContext?.createNote(note);
  };

  //Styles
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    padding: "50px 100px",
  };
  return (
    <div style={containerStyles}>
      {/* <FullInput
        isInputFocused={isInputFocused}
        setIsInputFocused={handleChangeOfInput}
        addNote={handleSubmition}
      /> */}
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
  );
};

export default InputField;
