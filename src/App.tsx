import React from "react";
import Layout from "./shared/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";
import NoteList from "./NoteList/NoteList";
import { useServerContext } from "./context/ServerContext";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();

  const { notes, deleteNote } = useServerContext();

  return (
    <Container className={styles.container}>
      <Layout>
        <InputField />
        {notes !== undefined && notes?.length > 0 && (
          <NoteList notes={notes} deteleteNote={deleteNote} />
        )}
      </Layout>
    </Container>
  );
}

export default App;
