import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    width: "25%",
    display: "flex",
    minWidth: "250px",
    margin: "auto",
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: "20px",
    color: "#061524",
    textAlign: "center",
  },
  loginButton: {
    color: "white",
    width: "100%",
    marginTop: "10px",
    backgroundColor: "#061524",
    borderRadius: "0px 0px 7px 7px",
    "&:hover": {
      backgroundColor: "#061524",
    },
  },
  logo: {
    marginTop: "50px",
    borderRadius: "7px 7px 0px 0px",
  },
});

export default useStyle;
