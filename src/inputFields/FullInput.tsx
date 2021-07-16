import React from "react";
import { useRef, useState, useEffect } from "react";
import { Note, NoteStatus } from "../models/note";
import { InputBase, Box, makeStyles, Paper, Button } from "@material-ui/core";
import TagsContainer from "./TagsContainer";
import { Tag } from "../models/tag";

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
  textField: {
    width: "100%",
    display: "flex",
    border: "0px solid black",
    "&::after": {
      content: "-",
    },
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
  const inputFieldElement = useRef<HTMLInputElement>(null);
  const [noteContent, setNoteContent] = useState("");

  const isCreatingTag = useRef<boolean>(false);
  const tag = useRef<string>("");
  const [nameOfTags, setNameOfTags] = useState<string[]>([]);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  //Check if the submit button should be available
  useEffect(() => {
    setCanSubmit(noteContent !== "");
  }, [noteContent]);

  //Focus on the input as soon as it gets rendered
  useEffect(() => {
    inputFieldElement.current?.focus();
  }, [inputFieldElement]);

  //* Methods that change state
  const handleLostOfFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const userClickedOutsideTheInput = event.relatedTarget === null;
    if (userClickedOutsideTheInput) hideThisComponent();
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteContent(event.target.value);
  };

  const handleKeyPressed = (e: React.KeyboardEvent) => {
    //Ignore the shift stroke
    if (e.key === "Shift") return;

    const pressedHashtag = e.key === "#";
    const pressedSpace = e.key === " ";

    if (pressedHashtag) {
      isCreatingTag.current = true;
    } else if (pressedSpace) isCreatingTag.current = false;

    const thereIsATagToSubmit = tag.current !== "";

    if (isCreatingTag.current) {
      tag.current = updateTag(e.key, tag.current);
    } else if (thereIsATagToSubmit) {
      handleTagSubmition();
    }

    const keyIsEnter = e.code === "Enter";
    const isCtrlPressed = e.nativeEvent.ctrlKey;
    if (keyIsEnter && isCtrlPressed) {
      handleNoteSubmition();
    }
  };

  const handleTagSubmition = () => {
    setNameOfTags([...nameOfTags, tag.current]);
    const cleanContent = cleanTagOfContent(tag.current, noteContent);
    setNoteContent(cleanContent);
    tag.current = "";
  };

  const handleNoteSubmition = () => {
    const thereIsATagToSubmit = tag.current !== "";
    if (thereIsATagToSubmit) handleTagSubmition();

    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const note = {
      content: noteContent,
      date,
      tags: convertStringToTag(nameOfTags),
      status: NoteStatus.alive,
    };

    addNote(note);
    hideThisComponent();
  };

  //*Tags helper methods
  const updateTag = (newTerm: string, oldTag: string): string => {
    let newTag = oldTag;
    if (newTerm === "Backspace") {
      const deleted = oldTag.slice(0, oldTag.length - 1);
      newTag = deleted;
    } else {
      newTag += newTerm;
    }

    return newTag;
  };

  const cleanTagOfContent = (tag: string, content: string): string => {
    let output: undefined | string = "";

    output = content.replace(tag, "");

    return output.trim() + " ";
  };

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
      <InputBase
        placeholder="Take a note..."
        multiline
        className={classes.textField}
        onBlur={handleLostOfFocus}
        onChange={handleContentChange}
        inputRef={inputFieldElement}
        value={noteContent}
        // Using onKeyUp so the backspace can be logged
        onKeyUp={handleKeyPressed}
      />
      <Box className={classes.footer}>
        {nameOfTags?.length > 0 && (
          <TagsContainer tags={nameOfTags} onDeletion={handleTagDeletion} />
        )}
        <Button
          className={classes.submitButton}
          onClick={handleNoteSubmition}
          disabled={!canSubmit}
        >
          Save
        </Button>
      </Box>
    </Paper>
  );
};
