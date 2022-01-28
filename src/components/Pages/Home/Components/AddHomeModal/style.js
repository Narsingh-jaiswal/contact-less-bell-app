import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    height: "100vh",
    backgroundColor: "lightgray",
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  fieldContainer: {
    minWidth: 250,
    padding: "50px",
    backgroundColor: "white",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  textField: {
    width: "70%",
    margin: "10px 0px",
    "& .MuiOutlinedInput-root": {
      borderRadius: 28,
    },
    "& .MuiOutlinedInput-input": {
      padding: "12.5px 14px",
    },
  },
  logo: {
    borderRadius: "50%",
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  cancelLogo: {
    position: "absolute",
    top: 20,
    right: 20,
    cursor: "pointer",
  },
});

export default useStyle;
