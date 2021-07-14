import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import { Note } from "../models/note";

export interface NoteCardProps {
  note: Note;
  deteleteNote: (note: Note) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
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
}) => {
  const classes = useStyles();

  const handleNoteDelete = () => {
    deteleteNote(note);
  };

  const getTags = (): string | null => {
    const output = note.tags !== undefined ? note.tags[0] : null;
    return output ? output.name : "unkown";
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        // Title
        title={getTags()}
        titleTypographyProps={{
          variant: "subtitle1",
          component: "span",
          color: "textSecondary",
        }}
        // Date
        subheader={note.date ? "Last edited on " + note.date : "unkown"}
        subheaderTypographyProps={{ variant: "caption", component: "span" }}
        // Add to favorites
        action={
          <IconButton aria-label="delete" onClick={handleNoteDelete}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        }
      />
      {/* NoteContent */}
      <CardContent>
        <Typography variant="body1" component="p">
          {note.content}
        </Typography>
      </CardContent>

      {/* Actions */}
      {/* <CardActions className={classes.actionsContainer}> */}
      {/* Reminder */}
      {/* <IconButton aria-label="add reminder">
          <AddAlertIcon fontSize="small" />
        </IconButton> */}
      {/* Archive */}
      {/* <IconButton aria-label="archive note">
          <ArchiveIcon fontSize="small" />
        </IconButton> */}

      {/* Image */}
      {/* <IconButton aria-label="upload image">
          <ImageIcon fontSize="small" />
        </IconButton> */}

      {/* Options */}
      {/* <IconButton aria-label="more">
          <MoreVertIcon fontSize="small" />
        </IconButton> */}

      {/* Delete */}
      {/* <IconButton aria-label="delete" onClick={handleNoteDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default NoteCard;
