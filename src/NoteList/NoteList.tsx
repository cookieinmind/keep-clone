import Masonry from "react-masonry-css";
import { useParams } from "react-router-dom";
import { Note } from "../models/note";
import NoteCard from "./NoteCard";

export interface NoteListProps {
  notes: Note[];
  deteleteNote: (note: Note) => void;
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
}) => {
  let { tag: tagName } = useParams<{ tag: string }>();

  const notesToShow = notes?.filter((note) => {
    const thereIsNoTag = !tagName;
    const theTagIsInTheNote =
      note.tags && note.tags.some((t) => t.name === tagName);

    return thereIsNoTag || theTagIsInTheNote;
  });

  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notesToShow.map((note) => (
        <div key={note.id}>
          <NoteCard note={note} deteleteNote={deteleteNote} />
        </div>
      ))}
    </Masonry>
  );
};

export default NoteList;
