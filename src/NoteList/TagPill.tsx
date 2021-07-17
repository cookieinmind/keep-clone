import { Box, makeStyles } from "@material-ui/core";
import { Tag } from "../models/tag";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    fontSize: "0.688rem",
    padding: "0.25em 0.75em",
  },
});

export interface TagPillProps {
  tag: Tag;
}

const TagPill: React.FunctionComponent<TagPillProps> = ({ tag }) => {
  const classes = useStyles();

  return <Box className={classes.root}>{tag.name}</Box>;
};

export default TagPill;
