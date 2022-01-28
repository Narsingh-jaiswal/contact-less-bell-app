import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  MainContainer: {
    padding: "30px 0px 0px 00px",
  },
  banner: {
    opacity: "0.7",
    boxShadow: "0px 5px 10px 6px #3f51b5",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 20px 0px 20px",
    fontStyle: "italic",
  },
  userName: {
    color: "white",
  },
});
export default useStyles;
