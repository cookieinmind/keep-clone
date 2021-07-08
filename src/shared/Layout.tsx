import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    height: "100%",
    width: "100%",
  },
});
export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.box}>
      <h1>Layout component</h1>
      <p>Here goes the top bar</p>
      {children}
    </Box>
  );
};

export default Layout;
