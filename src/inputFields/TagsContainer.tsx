import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import TagPill from "./TagPill";

export interface TagsContainerProps {
  tags: string[];
  onDeletion: (tag: string) => void;
}

const useStyles = makeStyles({
  tagsContainer: {
    flex: "1 0 auto",
    display: "flex",
    gap: "1rem",
  },
});

const TagsContainer: React.FunctionComponent<TagsContainerProps> = ({
  tags,
  onDeletion,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.tagsContainer}>
      {tags.map((tag) => (
        <TagPill key={tag} tag={tag} onDeletion={onDeletion} />
      ))}
    </Box>
  );
};

export default TagsContainer;
