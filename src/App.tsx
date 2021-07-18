import React from "react";
import Layout from "./layout/Layout";
import InputField from "./inputFields/InputField";
import { Box, Container, makeStyles } from "@material-ui/core";
import NoteList from "./NoteList/NoteList";
import { useServerContext } from "./context/ServerContext";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  const { notes, deleteNote, archiveNote } = useServerContext();

  useEffect(() => console.log("this app is running with local storage"), []);

  return (
    <Layout>
      <Container maxWidth="lg">
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
            <Box className={classes.root}>
              <InputField />

              <NoteList
                notes={notes}
                deteleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            </Box>
          </Route>
        </Switch>
      </Container>
    </Layout>
  );
}

export default App;
