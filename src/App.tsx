import React from "react";
import Layout from "./shared/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";
import NoteList from "./NoteList/NoteList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { DeleteNote, GetNotes } from "./api/notesAPI";
import { Note } from "./models/note";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();
  const queryClient = useQueryClient();

  // const notes = useSelector<NotesState, NotesState["notes"]>((n) => n.notes);
  const { data: notes } = useQuery<Note[], Error>("notes", GetNotes);

  //Method to call to detele a note
  const handleNoteDelete = async (note: Note) => {
    await mutateAsync(note);
  };

  //What happens AFTER a note is deleted from the server
  const onNoteDeletion = () => {
    queryClient.invalidateQueries("notes");
    console.log("note deleted");
  };

  const { mutateAsync } = useMutation(DeleteNote, {
    onSuccess: onNoteDeletion,
  });

  return (
    <Container className={styles.container}>
      <Layout>
        <InputField />
        {notes !== undefined && notes?.length > 0 && (
          <NoteList notes={notes} deteleteNote={handleNoteDelete} />
        )}
      </Layout>
    </Container>
  );
}

export default App;
