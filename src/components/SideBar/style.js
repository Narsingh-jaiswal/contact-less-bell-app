import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sidebarContainer: {
    backgroundColor: "white",
    position: "fixed",
    left: 30,
    top: 30,
    height: "calc(100% - 60px)",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    width: 280,
    boxShadow:
      "0 0.46875rem 2.1875rem rgba(31,10,6,0.03),0 0.9375rem 1.40625rem rgba(31,10,6,0.03),0 0.25rem 0.53125rem rgba(31,10,6,0.05),0 0.125rem 0.1875rem rgba(31,10,6,0.03)",
  },
  title: {
    padding: 15,
    borderBottom: "rgba(0,0,0,0.04) solid 1px",
    background: "rgba(0,0,0,0.01)",
    color: "#da624a",
    margin: "16px 0px",
    fontWeight: 600,
  },
  sectionContainer: {
    padding: "2px 24px",
    overflow: "auto",
  },
});

export default useStyles;
