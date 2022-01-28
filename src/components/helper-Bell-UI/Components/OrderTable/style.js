import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  tableContainer: {
    marginTop: 20,
  },
  receive: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "green",
    },
  },
  cancel: {
    backgroundColor: "#f90000a6",
    color: "white",
    "&:hover": {
      backgroundColor: "red",
    },
  },
});
