import BookmarkIcon from "@material-ui/icons/Bookmark";
import { makeStyles, Typography, IconButton, Box } from "@material-ui/core";
import { Note, NoteStatus } from "../models/note";
import ButtonsCarousel from "./ButtonsCarousel";
import TagCarousel from "./TagsCarousel";
import TextField from "../inputFields/TextField";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Tag } from "../models/tag";

const useStyles = makeStyles((props) => {
  return {
    root: {
      height: "32rem",
      width: "50%",
      alignSelf: "center",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #c4c4c4",
      borderRadius: "15px",
      gap: "1rem",
      boxShadow:
        "2px 2px 5px 0px rgba(0,0,0,0.1), -1px -1px 5px 0px rgba(0,0,0,0.1)",
    },
    headerContainer: {
      width: "100%",
      display: "flex",
      gap: "1rem",
      justifyContent: "flex-start",
      alignItems: "start",
    },
    title: {
      flex: "1 1 auto",
      fontSize: "1.375rem",
      fontWeight: props.typography.fontWeightMedium,
    },
    content: {
      flex: "1 1 auto",
      fontSize: "0.875rem",
      fontWeight: props.typography.fontWeightRegular,
    },
    headerButton: {
      padding: 0,
      visibility: "hidden",
    },
    actionsContainer: {
      justifyContent: "flex-start",
    },
    noteTitle: {
      fontSize: "2rem",
    },
  };
});

export interface ExtendedNoteCardProps {
  note: Note;
}

const ExtendedNoteCard: React.FC<ExtendedNoteCardProps> = ({ note }) => {
  //Styles
  const c = useStyles();

  //Refs
  const contentRef = useRef<HTMLInputElement | null>(null);

  //States
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [nameOfTags, setNameOfTags] = useState<string[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [canSubmit, setCanSubmit] = useState<boolean>(false);

  //Helpers
  const tagsToStrings = (tags: Tag[]): string[] => {
    if (!tags || tags.length < 1) return [];
    else return tags.map((t) => t.name);
  };

  const stringsToTags = (names: string[]): Tag[] => {
    return names.map((name) => {
      return {
        name,
      };
    });
  };

  //Effects
  //Focus on the content
  useEffect(() => {
    contentRef.current?.focus();
  }, [contentRef]);

  //Update the strings to tags
  useEffect(() => {
    setTags(stringsToTags(nameOfTags));
  }, [nameOfTags, setNameOfTags, setTags]);

  //Check if the note can be submited
  useEffect(() => {
    setCanSubmit(content !== "" || title !== "");
  }, [content, title]);

  //Set the variables to the various fields
  useEffect(() => {
    setContent(note.content);
    setTags(note.tags);
    setNameOfTags(tagsToStrings(note.tags));
    setTitle(note.title ? note.title : "");
  }, [note, setContent, setTitle, setNameOfTags]);

  const tryToSubmit = () => {
    if (!canSubmit) return;
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

    const newNote = {
      title,
      content,
      date,
      tags: stringsToTags(nameOfTags),
      status: NoteStatus.alive,
    };

    // addNote(note);
    // hideThisComponent();
  };

  return (
    <Box className={c.root}>
      {/* Header Container: Title + Special Icon container */}
      <Box className={c.headerContainer}>
        <TextField
          bold={true}
          placeholder="Title"
          submit={tryToSubmit}
          content={title}
          setContent={setTitle}
          tags={nameOfTags}
          setTags={setNameOfTags}
        />

        {/* The special icon */}
        <IconButton className={c.headerButton} id="headerButton">
          <BookmarkIcon />
        </IconButton>
      </Box>

      {/* Content if there's no title*/}
      <TextField
        bold={false}
        placeholder="Content"
        submit={tryToSubmit}
        content={content}
        setContent={setContent}
        inputRef={contentRef}
        tags={nameOfTags}
        setTags={setNameOfTags}
      />

      {/* Tags */}
      {tags && <TagCarousel tags={tags} />}

      {/* Buttons */}
      <ButtonsCarousel
        visible={true}
        deleteNote={() => console.log("deleting")}
        archiveNote={() => console.log("archiving")}
      />
    </Box>
  );
};

export default ExtendedNoteCard;
