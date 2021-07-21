import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
// import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { useLayoutContext } from "../layout/Layout";
import { Note, NoteStatus } from "../models/note";
import NoteCard from "./NoteCard";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // width: "100%",
    flexDirection: "column",
    gap: "2rem",
  },
});

export interface NoteListProps {
  notes: Note[];
  deteleteNote: (note: Note) => void;
  archiveNote: (note: Note) => void;
}

// const breakpoints = {
//   default: 4,
//   1100: 3,
//   700: 2,
//   450: 1,
// };

enum styles {
  All = "All",
  Archived = "Archive",
  Bin = "Bin",
}

const NoteList: React.FunctionComponent<NoteListProps> = ({
  notes,
  deteleteNote,
  archiveNote,
}) => {
  const classes = useStyles();
  let { tag: tagName, status: statusName } = useParams<{
    tag: string | undefined;
    status: string | undefined;
  }>();

  const { setTitle } = useLayoutContext();
  const [currentStyle, setStyle] = useState<styles>(styles.All);

  useEffect(() => {
    if (tagName) {
      setTitle(tagName);
      setStyle(styles.All);
    } else if (statusName) {
      switch (statusName) {
        case "archived":
          setTitle(styles.Archived);
          setStyle(styles.Archived);
          break;
        case "deleted":
          setTitle(styles.Bin);
          setStyle(styles.Bin);
          break;
        default:
          throw new Error(
            "tried to update the style but the status passed was not found"
          );
      }
    } else {
      setTitle("");
      setStyle(styles.All);
    }
  }, [tagName, statusName, setTitle]);

  const filterByTag = (note: Note) => {
    const thereIsNoTag = !tagName;
    const theTagIsInTheNote =
      note.tags && note.tags.some((t) => t.name === tagName);

    const isNotAchivedOrDeleted = note.status === NoteStatus.alive;

    return isNotAchivedOrDeleted && (thereIsNoTag || theTagIsInTheNote);
  };

  const filterByStatus = (note: Note) => {
    if (!statusName) return;

    const index = statusName as keyof typeof NoteStatus;
    const status: NoteStatus = NoteStatus[index];

    const isTheRightStatus = note.status === status;

    return isTheRightStatus;
  };

  const noFilter = (note: Note) => {
    const isTheRightStatus = note.status === NoteStatus.alive;
    return isTheRightStatus;
  };

  const notesToShow = notes?.filter(
    tagName ? filterByTag : statusName ? filterByStatus : noFilter
  );

  return (
    <Box className={classes.root}>
      {currentStyle === styles.Bin && (
        <Typography align="center">
          Notes in the Recycle Bin are deleted after 7 days.
        </Typography>
      )}

      {/* <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notesToShow.map((note) => (
          <div key={note.id}>
            <NoteCard
              note={note}
              deteleteNote={deteleteNote}
              archiveNote={archiveNote}
            />
          </div>
        ))}
      </Masonry> */}

      <Grid container spacing={3}>
        {notesToShow.map((note) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={note.id}>
            <NoteCard
              note={note}
              deteleteNote={deteleteNote}
              archiveNote={archiveNote}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NoteList;
