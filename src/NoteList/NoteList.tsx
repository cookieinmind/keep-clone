import Masonry from "react-masonry-css";
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
  return (
    <Masonry
      breakpointCols={breakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {notes.map((note) => (
        <div key={note.id}>
          <NoteCard note={note} deteleteNote={deteleteNote} />
        </div>
      ))}
    </Masonry>
  );
};

export default NoteList;
