import React from "react";
import { useState } from "react";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../models/note";
import { useMutation, useQueryClient } from "react-query";
import { AddNote } from "../api/notesAPI";
import { useTagContext } from "../context/TagContextProvider";

export interface InputFieldProps {}

const InputField: React.FunctionComponent<InputFieldProps> = () => {
  //Variables
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { mutateAsync: submitNoteAsyncMutation } = useMutation(AddNote);

  const qryClient = useQueryClient();

  const tagContext = useTagContext();

  // Functions
  const handleChangeOfInput = (val: boolean) => {
    setIsInputFocused(val);
  };

  const handleSubmition = async (note: Note) => {
    await submitNoteAsyncMutation(note);

    tagContext?.noteWasCreated(note);
    qryClient.invalidateQueries("notes");
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
