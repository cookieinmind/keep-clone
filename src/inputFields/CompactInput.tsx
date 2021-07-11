import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    backgroundColor: "#121212",
  },
  container: {
    width: "100%",
    gridColumn: "5/9",
    height: "50px",
    padding: "8px 16px",
    borderRadius: "5px",
  },
  input: {
    height: "100%",
    width: "100%",
  },
});

export interface iInputProps {
  isInputFocused: boolean;
  setIsInputFocused: (newVal: boolean) => void;
}

export const CompactInput: React.FC<iInputProps> = ({
  isInputFocused,
  setIsInputFocused,
}) => {
  const classes = useStyles();

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
  };

  return (
    <Paper square className={classes.container}>
      <InputBase
        className={classes.input}
        placeholder="Take a note..."
        onFocus={handleFocus}
      />
    </Paper>
  );
};
