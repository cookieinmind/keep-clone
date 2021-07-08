import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Note } from "../state/models/note";
import {
  Typography,
  makeStyles,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    backgroundColor: "#121212",
  },
  container: {
    backgroundColor: blue[200],
    width: "100%",
    display: "flex",
    height: "100px",
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
  isInputFocused,
  setIsInputFocused,
}) => {
  const classes = useStyles();

  const noteContentInput = useRef<HTMLInputElement>(null);
  const noteTagInput = useRef<HTMLInputElement>(null);
  const [noteContent, setNoteContent] = React.useState("");
  const [noteTag, setNoteTag] = React.useState("");

  //Focus on the input as soon as it gets rendered
  useEffect(() => {
    noteContentInput.current?.focus();
    console.log("focusing on:", noteContentInput, noteContentInput.current);
  }, [noteContentInput]);

  const handleLostOfFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget === null) setIsInputFocused(false);

    console.log("e:", event);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(event.target.value);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTag(event.target.value);
  };

  const inputStyles = {};

  return (
    <Paper square className={classes.container}>
      <TextField
        placeholder="Take a note..."
        className={classes.textField}
        onBlur={handleLostOfFocus}
        onChange={handleContentChange}
        inputRef={noteContentInput}
        value={noteContent}
      />
      <Button className={classes.submitButton}>Save</Button>
    </Paper>
    // <div style={containerStyles}>
    //   <Typography variant="h6">Hey</Typography>

    //   {/* Content */}
    //   <input
    //     className={classes.test}
    //     // style={inputStyles}
    //     value={noteContent}
    //     ref={noteContentInput}
    //     onBlur={handleLostOfFocus}
    //     onChange={handleContentChange}
    //     type="text"
    //     name="content"
    //     placeholder="FUUUUULLL"
    //   />

    //   {/* Tag */}
    //   <input
    //     style={inputStyles}
    //     value={noteTag}
    //     ref={noteTagInput}
    //     onBlur={handleLostOfFocus}
    //     onChange={handleTagChange}
    //     type="text"
    //     name="tag"
    //     placeholder="FUUUUULLL"
    //   />
    // </div>
  );
};
