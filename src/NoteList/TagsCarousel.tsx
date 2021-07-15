import { Box, makeStyles } from "@material-ui/core";
import { Tag } from "../models/tag";
import TagPill from "./TagPill";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "1rem",
    width: "100%",
  },
});

export interface TagCarouselProps {
  tags: Tag[];
}

const TagCarousel: React.FunctionComponent<TagCarouselProps> = ({ tags }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {tags.map((tag) => {
        return <TagPill tag={tag} key={tag.name} />;
      })}
    </Box>
  );
};

export default TagCarousel;
