import { makeStyles } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import { createStyles, useTheme, Theme } from "@material-ui/core/styles";
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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArchiveIcon from "@material-ui/icons/Archive";
import DeleteIcon from "@material-ui/icons/Delete";
import { useServerContext } from "../context/ServerContext";
import LabelIcon from "@material-ui/icons/Label";
import { Link } from "react-router-dom";
import { useContext, createContext } from "react";
import { Capitalize } from "../utlis/stringHelpers";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      width: "100%",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    homeButton: {
      textDecoration: "none",
      color: "#fff",
    },
    sidebarLink: {
      textDecoration: "none",
      color: "#121212",
      textTransform: "capitalize",
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
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
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

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
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState<string>("");

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

  //!Return
  return (
    <div className={classes.root}>
      {/* Appbar */}
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
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
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>
          {tags &&
            tags.map((tag) => (
              <Link
                key={tag.name}
                to={"/" + tag.name}
                className={classes.sidebarLink}
              >
                <ListItem button>
                  <ListItemIcon>
                    <LabelIcon />
                  </ListItemIcon>
                  <ListItemText primary={tag.name} />
                </ListItem>
              </Link>
            ))}
        </List>

        {tags && <Divider />}

        {/* Archived and Deleted */}
        <List>
          {/* Archived */}
          <Link
            key="Archived"
            to="/status/archived"
            className={classes.sidebarLink}
          >
            <ListItem button>
              <ListItemIcon>
                <ArchiveIcon />
              </ListItemIcon>
              <ListItemText primary="Archived" />
            </ListItem>
          </Link>

          {/* Deleted */}
          <Link
            key="Deleted"
            to="/status/deleted"
            className={classes.sidebarLink}
          >
            <ListItem button>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Bin" />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      {/* Main */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <LayoutContext.Provider value={state}>
          {children}
        </LayoutContext.Provider>
      </main>
    </div>
  );
};

export default Layout;
