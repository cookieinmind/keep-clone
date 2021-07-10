import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
// Icons
import AddAlertIcon from "@material-ui/icons/AddAlert";
import ArchiveIcon from "@material-ui/icons/Archive";
import ImageIcon from "@material-ui/icons/Image";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import { Note } from "../state/models/note";

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

  return (
    <Card className={classes.root}>
      <CardHeader
        // Title
        title={note.tag}
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
