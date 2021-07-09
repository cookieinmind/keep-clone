import React from "react";
import Layout from "./shared/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { NotesState } from "./state/reducers/noteReducer";
import NoteList from "./NoteList/NoteList";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { GetNotes } from "./API";
import { Note } from "./state/models/note";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();

  // const notes = useSelector<NotesState, NotesState["notes"]>((n) => n.notes);
  const { data: notes } = useQuery<Note[], Error>("notes", GetNotes);

  return (
    <Container className={styles.container}>
      <Layout>
        <InputField />
        {notes !== undefined && notes?.length > 0 && <NoteList notes={notes} />}
      </Layout>
    </Container>
  );
}

export default App;
