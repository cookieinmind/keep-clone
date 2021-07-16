import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { Note, NoteStatus } from "../models/note";
import NoteCard from "./NoteCard";

export interface NoteListProps {
  notes: Note[];
  deteleteNote: (note: Note) => void;
  archiveNote: (note: Note) => void;
}

const breakpoints = {
  default: 4,
  1100: 3,
  700: 2,
  450: 1,
};

const NoteList: React.FunctionComponent<NoteListProps> = ({
  notes,
  deteleteNote,
  archiveNote,
}) => {
  let { tag: tagName, status: statusName } = useParams<{
    tag: string | undefined;
    status: string | undefined;
  }>();

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
    <Masonry
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
    </Masonry>
  );
};

export default NoteList;
