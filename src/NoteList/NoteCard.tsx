import React, { useState } from "react";
import TagCarousel from "./TagsCarousel";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, IconButton, Paper, Typography } from "@material-ui/core";
// Icons
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Note } from "../models/note";
import ButtonsCarousel from "./ButtonsCarousel";

export interface NoteCardProps {
  note: Note;
  deteleteNote: (note: Note) => void;
  archiveNote: (note: Note) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      cursor: "pointer",
      width: "15rem",
      padding: "2rem 1rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    headerContainer: {
      width: "100%",
      display: "flex",
      gap: "1rem",
      alignItems: "flex-start",
    },
    title: {
      flex: "1 1 auto",
      fontSize: "1rem",
    },
    headerButton: {
      padding: 0,
    },
    headerButtonHide: {
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
    <Paper
      className={c.root}
      onMouseEnter={mouseIfOverNote}
      onMouseLeave={mouseLeavesNote}
    >
      {/* Header Container: Title + Special Icon container */}
      <Box className={c.headerContainer}>
        {/* Title of the note */}
        <Typography className={c.title}>
          {/* <Box fontWeight="fontWeightMedium"></Box> */}
          {note.content}
        </Typography>

        {/* The special icon */}
        <IconButton className={hover ? c.headerButton : c.headerButtonHide}>
          <BookmarkIcon />
        </IconButton>
      </Box>

      {/* Content */}
      {/* To do */}

      {/* Tags */}
      {note.tags && <TagCarousel tags={note.tags} />}

      {/* Buttons */}
      <ButtonsCarousel
        visible={hover}
        deleteNote={handleDeleteNote}
        archiveNote={handleArchiveNote}
      />
    </Paper>
  );
};

export default NoteCard;
