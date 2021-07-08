import React from "react";
import Layout from "./shared/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { NotesState } from "./state/reducers/noteReducer";
import NoteList from "./NoteList/NoteList";
import { useEffect } from "react";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();
  const notes = useSelector<NotesState, NotesState["notes"]>((n) => n.notes);

  useEffect(() => console.log("notes:", notes), [notes]);

  return (
    <Container className={styles.container}>
      <Layout>
        <InputField />
        {notes?.length > 0 && <NoteList notes={notes} />}
      </Layout>
    </Container>
  );
}

export default App;
