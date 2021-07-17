import React from "react";
import { useRef, useState, useEffect } from "react";
import { Note, NoteStatus } from "../models/note";
import { Box, makeStyles, Paper, Button } from "@material-ui/core";
import TagsContainer from "./TagsContainer";
import { Tag } from "../models/tag";

import TextField from "./TextField";

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
    borderRadius: "5px",
  },
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  submitButton: {
    flex: "0",
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
  //Fields
  const hideThisComponent = () => setIsInputFocused(false);
  const classes = useStyles();
  const contentRef = useRef<HTMLInputElement | null>(null);

  const [content, setContent] = useState("");
  const [nameOfTags, setNameOfTags] = useState<string[]>([]);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  //Check if the submit button should be available
  useEffect(() => {
    setCanSubmit(content !== "");
  }, [content]);

  //Focus on the input as soon as it gets rendered
  useEffect(() => {
    contentRef.current?.focus();
  }, [contentRef]);

  //* Methods that change state
  const tryToSubmit = () => {
    //check
    console.log(content, nameOfTags);

    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const note = {
      content,
      date,
      tags: convertStringToTag(nameOfTags),
      status: NoteStatus.alive,
    };

    addNote(note);
    hideThisComponent();
  };

  const handleLostOfFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const userClickedOutsideTheInput = event.relatedTarget === null;
    if (userClickedOutsideTheInput) hideThisComponent();
  };

  //*Tags helper methods
  const convertStringToTag = (names: string[]): Tag[] => {
    return names.map((name) => {
      return {
        name,
      };
    });
  };

  //*Methods to pass to children
  const handleTagDeletion = (tag: string) => {
    const newTags = nameOfTags.filter((t) => t !== tag);
    setNameOfTags(newTags);
  };

  return (
    <Paper square className={classes.container}>
      {/* Content */}
      <TextField
        placeholder="Take a note..."
        submit={tryToSubmit}
        content={content}
        setContent={setContent}
        tags={nameOfTags}
        setTags={setNameOfTags}
        onLostFocus={handleLostOfFocus}
        inputRef={contentRef}
      />

      <Box className={classes.footer}>
        {nameOfTags?.length > 0 && (
          <TagsContainer tags={nameOfTags} onDeletion={handleTagDeletion} />
        )}
        <Button
          className={classes.submitButton}
          onClick={tryToSubmit}
          disabled={!canSubmit}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};
