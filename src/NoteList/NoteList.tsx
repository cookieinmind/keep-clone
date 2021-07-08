import { Note } from "../state/models/note";

export interface NoteListProps {
  notes: Note[];
}

const NoteList: React.FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <div>
      Notes
      <ul>
        {notes.map((note) => {
          return <li key={note.content}>{note.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default NoteList;
