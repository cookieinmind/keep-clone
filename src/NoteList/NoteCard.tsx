import React, { useState } from "react";
import TagCarousel from "./TagsCarousel";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, IconButton, Typography } from "@material-ui/core";
// Icons
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Note } from "../models/note";
import ButtonsCarousel from "./ButtonsCarousel";

export interface NoteCardProps {
  note: Note;
  deteleteNote: (note: Note) => void;
  archiveNote: (note: Note) => void;
}

const useStyles = makeStyles((props) =>
  createStyles({
    root: {
      cursor: "pointer",
      width: "15rem",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      border: "1px solid #c4c4c4",
      borderRadius: "15px",
      gap: "1rem",
      "&:hover": {
        boxShadow:
          "2px 2px 5px 0px rgba(0,0,0,0.1), -1px -1px 5px 0px rgba(0,0,0,0.1)",
      },
      "&:hover #headerButton": {
        visibility: "visible",
      },
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
  })
);

const NoteCard: React.FunctionComponent<NoteCardProps> = ({
  note,
  deteleteNote,
  archiveNote,
}) => {
  const c = useStyles();
  const [hover, setHover] = useState<boolean>(false);

  const handleDeleteNote = () => {
    deteleteNote(note);
  };

  const handleArchiveNote = () => {
    archiveNote(note);
  };

  const mouseIfOverNote = () => {
    setHover(true);
  };

  const mouseLeavesNote = () => {
    setHover(false);
  };

  return (
    <Box
      className={c.root}
      onMouseEnter={mouseIfOverNote}
      onMouseLeave={mouseLeavesNote}
    >
      {/* Header Container: Title + Special Icon container */}
      <Box className={c.headerContainer}>
        {/* Title of the note */}
        {note.title && (
          <Typography className={c.title}>{note.title}</Typography>
        )}
        {!note.title && (
          <Typography className={c.content}>{note.content}</Typography>
        )}

        {/* The special icon */}
        <IconButton className={c.headerButton} id="headerButton">
          <BookmarkIcon />
        </IconButton>
      </Box>

      {/* Content if there's no title*/}
      {note.title && (
        <Typography className={c.content}>{note.content}</Typography>
      )}

      {/* Tags */}
      {note.tags && <TagCarousel tags={note.tags} />}

      {/* Buttons */}
      <ButtonsCarousel
        visible={hover}
        deleteNote={handleDeleteNote}
        archiveNote={handleArchiveNote}
      />
    </Box>
  );
};

export default NoteCard;
