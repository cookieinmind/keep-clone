import React from "react";
import { useRef } from "react";
import { Paper, TextField, makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    backgroundColor: "#121212",
  },
  container: {
    background: blue[500],
    width: "100%",
    gridColumn: "5/9",
    display: "flex",
    justifyContent: "center",
    maxHeight: "100px",
    height: "100px",
    padding: "8px 16px",
    gap: "24px",
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
  const input = useRef(null);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsInputFocused(true);
  };

  return (
    <Paper square className={classes.container}>
      <TextField placeholder="Take a note..." onFocus={handleFocus} />
    </Paper>
  );
};
