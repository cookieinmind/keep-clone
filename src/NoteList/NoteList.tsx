import { Note } from "../state/models/note";
import NoteCard from "./NoteCard";
export interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <div>
      Notes
      <ul>
        {notes.map((note) => {
          return <NoteCard key={note.content} note={note} />;
        })}
      </ul>
    </div>
  );
};

export default NoteList;
