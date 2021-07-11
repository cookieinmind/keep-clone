import { makeStyles, Paper, IconButton } from "@material-ui/core";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
export interface TagPillProps {
  tag: string;
  onDeletion: (tag: string) => void;
}

const useStyles = makeStyles({
  tagsContainer: {
    display: "flex",
    padding: "2px 8px",
    borderRadius: "50px",
    alignItems: "center",
  },
});

const TagPill: React.FunctionComponent<TagPillProps> = ({
  tag,
  onDeletion,
}) => {
  const classes = useStyles();

  const onClick = () => {
    onDeletion(tag);
  };

  return (
    <Paper className={classes.tagsContainer}>
      {tag}
      <IconButton aria-label="delete" size="small" onClick={onClick}>
        <ClearRoundedIcon />
      </IconButton>
    </Paper>
  );
};

export default TagPill;
