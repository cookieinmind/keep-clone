import React from "react";
import Layout from "./shared/Layout";
import InputField from "./inputFields/InputField";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Layout>
        <InputField
          addnote={(note) => console.log("implement the addNote method")}
        />
      </Layout>
    </Container>
  );
}

export default App;
