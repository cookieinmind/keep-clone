import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Note } from "./noteReducer";

export interface iFullInputProps {
  isInputFocused: boolean;
  setIsInputFocused: (newVal: boolean) => void;
  addNote: (note: Note) => void;
}

export const FullInput: React.FC<iFullInputProps> = ({
  isInputFocused,
  setIsInputFocused,
}) => {
  const contentInput = useRef<HTMLInputElement>(null);
  const tagInput = useRef<HTMLInputElement>(null);
  const [noteContent, setNoteContent] = React.useState("");
  const [noteTag, setNoteTag] = React.useState("");

  //Focus on the input as soon as it gets rendered
  useEffect(() => {
    contentInput.current?.focus();
    console.log("focusing");
  }, [contentInput]);

  const containerStyles = {
    padding: "24px 32px",
    border: "solid 1px black",
    gridColumn: "5/9",
    borderRadius: "15px",
    boxShadow: "4px 4px 10px rgba(0, 0,0, 0.25)",
    display: "flex",
    justifyContent: "center",
    maxHeight: "100px",
  };

  const handleLostOfFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget === null) setIsInputFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    setNoteContent(event.target.value);
  };

  const inputStyles = {};

  return (
    <div style={containerStyles}>
      {/* Content */}
      <input
        style={inputStyles}
        value={noteContent}
        ref={contentInput}
        onBlur={handleLostOfFocus}
        onChange={handleChange}
        type="text"
        name="note"
        placeholder="FUUUUULLL"
      />
      {/* Tag */}
      <input
        style={inputStyles}
        ref={tagInput}
        value={noteTag}
        onBlur={handleLostOfFocus}
        onChange={handleChange}
        type="text"
        name="note"
        placeholder="FUUUUULLL"
      />
    </div>
  );
};
