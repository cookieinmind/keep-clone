import React from "react";
import { useState } from "react";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../models/note";
import { useServerContext } from "../context/ServerContext";
import { Tag } from "../models/tag";

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
    const cleanNote = cleanTags(note);
    tagContext?.createNote(cleanNote);
  };

  const cleanTags = (note: Note): Note => {
    if (!note.tags || note.tags.length < 1) return note;

    const cleanTags: Tag[] = [];

    for (const dirtyTag of note.tags) {
      const cleanTag: Tag = {
        name: dirtyTag.name.replace("#", ""),
      };
      cleanTags.push(cleanTag);
    }

    const cleanNote: Note = {
      // content: note.content,
      // date: note.date,k
      ...note,
      tags: cleanTags,
    };

    return cleanNote;
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
