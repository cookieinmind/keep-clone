import { Box, makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";

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
      {/* Sidebar */}
      <Sidebar />
      {children}
    </Box>
  );
};

export default Layout;
