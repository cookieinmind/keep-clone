import { Box, makeStyles } from "@material-ui/core";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton, Tooltip } from "@material-ui/core";
import { IDisappear } from "./IDisappear";

const useStyle = makeStyles((props) => {
  return {
    root: {
      //   marginTop: "1rem",
      display: "flex",
      gap: "1.5rem",
    },
    rootHide: {
      visibility: "hidden",
      display: "flex",
      gap: "1.5rem",
    },
    button: {
      padding: "0px",
    },
    more: {
      flex: "1 1 auto",
      display: "flex",
      placeContent: "end",
    },
  };
});

export interface ButtonsCarouselProps extends IDisappear {
  visible: boolean;
  deleteNote: () => void;
  archiveNote: () => void;
}

const ButtonsCarousel: React.FC<ButtonsCarouselProps> = ({
  visible,
  archiveNote,
  deleteNote,
}) => {
  const c = useStyle();

  return (
    <Box className={visible ? c.root : c.rootHide}>
      <Tooltip title="Archive">
        <IconButton className={c.button} onClick={archiveNote}>
          <ArchiveIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Delete">
        <IconButton className={c.button} onClick={deleteNote}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      {/* To implement the "more" btn*/}
      {/* <Box className={c.more}>
        <Tooltip title="More">
          <IconButton className={c.button}>
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box> */}
    </Box>
  );
};

export default ButtonsCarousel;
