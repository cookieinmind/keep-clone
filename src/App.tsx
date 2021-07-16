import React from "react";
import Layout from "./layout/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";
import NoteList from "./NoteList/NoteList";
import { useServerContext } from "./context/ServerContext";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();

  const { notes, deleteNote, archiveNote } = useServerContext();

  return (
    <Container className={styles.container}>
      <Layout>
        <Switch>
          {/* Status */}
          <Route path="/status/:status" exact>
            <NoteList
              notes={notes}
              deteleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          </Route>
          {/* Tags */}
          <Route path="/:tag?">
            <InputField />
            <NoteList
              notes={notes}
              deteleteNote={deleteNote}
              archiveNote={archiveNote}
            />
          </Route>
        </Switch>
      </Layout>
    </Container>
  );
}

export default App;
