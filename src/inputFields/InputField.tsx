import React from "react";
import { useState } from "react";
import { CompactInput } from "./CompactInput";
import { FullInput } from "./FullInput";
import { Note } from "../models/note";
import { useServerContext } from "../context/ServerContext";
import { Tag } from "../models/tag";
import { useParams } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => {
  return {
    root: {
      width: "100%",
      justifyContent: "center",
    },
  };
});

export interface InputFieldProps {}

const InputField: React.FunctionComponent<InputFieldProps> = () => {
  //Variables
  const classes = useStyles();
  const [isInputFocused, setIsInputFocused] = useState(false);

  const serverContext = useServerContext();

  let { tag: tagName } = useParams<{
    tag: string | undefined;
  }>();

  // Functions
  const handleChangeOfInput = (val: boolean) => {
    setIsInputFocused(val);
  };

  const handleSubmition = async (note: Note) => {
    const cleanNote = cleanTags(note);
    serverContext?.createNote(cleanNote);
  };

  const cleanTags = (note: Note): Note => {
    let cleanNote: Note;

    const itDoesntHaveTags = !note.tags || note.tags.length < 1;
    if (itDoesntHaveTags) {
      cleanNote = {
        ...note,
        tags: [],
      };
    } else {
      const cleanTags: Tag[] = [];

      for (const dirtyTag of note.tags) {
        const cleanTag: Tag = {
          name: dirtyTag.name.replace("#", ""),
        };
        cleanTags.push(cleanTag);
      }

      cleanNote = {
        ...note,
        tags: cleanTags,
      };
    }

    const tag: Tag | undefined = serverContext.tags.find(
      (t) => t.name === tagName
    );

    if (tag) {
      const tagIsNotInAlreadyThere =
        cleanNote.tags.length < 1 ||
        cleanNote.tags.some((t) => t.name !== tag.name);

      if (tag && tagIsNotInAlreadyThere) {
        cleanNote.tags.push(tag);
      }
    }

    return cleanNote;
  };

  return (
    <Grid container className={classes.root}>
      {/* <FullInput
        isInputFocused={isInputFocused}
        setIsInputFocused={handleChangeOfInput}
        addNote={handleSubmition}
      /> */}
      <Grid item xs={10} sm={8} md={6} lg={4}>
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
      </Grid>
    </Grid>
  );
};

export default InputField;
