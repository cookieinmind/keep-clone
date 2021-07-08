export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <h1>Layout component</h1>
      <p>Here goes the top bar</p>
      {children}
    </>
  );
};

export default Layout;
