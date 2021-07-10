import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Note } from "../state/models/note";
import { makeStyles, Paper, Button } from "@material-ui/core";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    backgroundColor: "#121212",
  },
  container: {
    width: "100%",
    display: "flex",
    height: "auto",
    minHeight: "100px",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "8px 16px",
    gap: "24px",
    gridColumn: "4/10",
  },
  submitButton: {
    maxWidth: "100px",
  },
  textField: {
    width: "100%",
    display: "flex",
    border: "0px solid black",
    "&::after": {
      content: "-",
    },
  },
});

export interface iFullInputProps {
  isInputFocused: boolean;
  setIsInputFocused: (newVal: boolean) => void;
  addNote: (note: Note) => void;
}

export const FullInput: React.FC<iFullInputProps> = ({
  setIsInputFocused,
  addNote,
}) => {
  const hideThisComponent = () => setIsInputFocused(false);
  const classes = useStyles();
  const noteContentInput = useRef<HTMLInputElement>(null);
  const [noteContent, setNoteContent] = React.useState("");
  const [canSubmit, setCanSubmit] = React.useState(false);

  //Check if the submit button should be available
  useEffect(() => {
    setCanSubmit(noteContent !== "");
  }, [noteContent]);
  //Focus on the input as soon as it gets rendered
  useEffect(() => {
    noteContentInput.current?.focus();
    console.log("focusing");
  }, [noteContentInput]);

  const handleLostOfFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget === null) hideThisComponent();
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(event.target.value);
  };

  const handleSubmition = () => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    console.log(date);

    addNote({
      content: noteContent,
      date,
    });
    hideThisComponent();
  };

  const handleKeyPressed = (e: React.KeyboardEvent) => {
    const keyIsEnter = e.code === "Enter";
    const isCtrlPressed = e.nativeEvent.ctrlKey;
    if (keyIsEnter && isCtrlPressed) {
      handleSubmition();
    }
  };

  return (
    <Paper square className={classes.container}>
      <InputBase
        placeholder="Take a note..."
        multiline
        className={classes.textField}
        onBlur={handleLostOfFocus}
        onChange={handleContentChange}
        inputRef={noteContentInput}
        value={noteContent}
        onKeyPress={handleKeyPressed}
      />
      <Button
        className={classes.submitButton}
        onClick={handleSubmition}
        disabled={!canSubmit}
      >
        Save
      </Button>
    </Paper>
  );
};
