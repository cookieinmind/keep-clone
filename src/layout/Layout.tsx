import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { useTheme, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import { useServerContext } from "../context/ServerContext";
import LabelIcon from "@material-ui/icons/Label";
import { Link, useHistory } from "react-router-dom";
import { useContext, createContext } from "react";
import { Capitalize } from "../utlis/stringHelpers";

const drawerWidth = 240;

const useStyles = makeStyles((props: Theme) => {
  return {
    root: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    appBar: {
      zIndex: props.zIndex.drawer + 1,
      transition: props.transitions.create(["width", "margin"], {
        easing: props.transitions.easing.sharp,
        duration: props.transitions.duration.leavingScreen,
      }),
    },
    homeButton: {
      textDecoration: "none",
      color: props.palette.text.primary,
    },
    sidebarLink: {
      textDecoration: "none",
      color: "#121212",
      textTransform: "capitalize",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: props.transitions.create(["width", "margin"], {
        easing: props.transitions.easing.sharp,
        duration: props.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      // marginRight: "36px",
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: props.transitions.create("width", {
        easing: props.transitions.easing.sharp,
        duration: props.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: props.transitions.create("width", {
        easing: props.transitions.easing.sharp,
        duration: props.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: props.spacing(7) + 1,
      [props.breakpoints.up("sm")]: {
        width: props.spacing(9) + 1,
      },
    },
    toolbar: {
      gap: "36px",
    },
    offset: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: props.spacing(0, 1),
      // necessary for content to be below app bar
      ...props.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: props.spacing(3),
    },
  };
});

export interface LayoutProps {
  children: React.ReactNode;
}

const mockState = {
  title: "loading layout context",
  setTitle: (title: string) =>
    console.log("called mock state from layout context "),
};
//* Context stuff
const LayoutContext = createContext<ILayoutState>(mockState);

interface ILayoutState {
  title: string;
  setTitle: (title: string) => void;
}

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  //UI stuff
  const theme = useTheme();
  const classes = useStyles(theme);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState<string>("");

  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Server stuff
  const { tags } = useServerContext();

  const state: ILayoutState = {
    title,
    setTitle,
  };

  const goTo = (link: string) => {
    // console.log("going to", link);
    history.push(link);
  };

  //!Return
  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar
        position="fixed"
        color="primary"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" className={classes.homeButton}>
            <Typography variant="h6" noWrap>
              {title !== "" ? Capitalize(title) : "Keep Clone"}
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {/* <Sidebar /> */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.offset}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        {/* Tags & Home */}
        <List>
          <ListItem
            button
            className={classes.sidebarLink}
            onClick={(event) => goTo("/")}
          >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Keep Clone"} />
          </ListItem>

          {tags && tags.length > 0 && <Divider />}

          {tags &&
            tags.map((tag) => (
              <ListItem
                button
                key={tag.name}
                className={classes.sidebarLink}
                onClick={(e) => goTo("/" + tag.name)}
              >
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={tag.name} />
              </ListItem>
            ))}
        </List>

        <Divider />

        {/* Archived and Deleted */}
        <List>
          {/* Archived */}
          <ListItem
            button
            onClick={(e) => goTo("/status/archived")}
            className={classes.sidebarLink}
            key="Archived"
          >
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText primary="Archived" />
          </ListItem>

          {/* Deleted */}
          <ListItem
            button
            onClick={(e) => goTo("/status/deleted")}
            className={classes.sidebarLink}
            key="Deleted"
            alignItems="flex-start"
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Bin" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main */}
      <main className={classes.content}>
        <div className={classes.offset} />
        <LayoutContext.Provider value={state}>
          {children}
        </LayoutContext.Provider>
      </main>
    </div>
  );
};

export default Layout;
