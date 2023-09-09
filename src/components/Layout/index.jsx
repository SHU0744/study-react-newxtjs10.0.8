import classes from "src/components/Layout/Layout.module.css";
export const Layout = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};
