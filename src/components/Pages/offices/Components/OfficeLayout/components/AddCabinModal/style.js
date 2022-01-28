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
    zIndex: 1,
  },
  fieldContainer: {
    padding: "50px",
    backgroundColor: "white",
    width: "30%",
    minWidth: 250,
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
    objectFit: "contain",
  },
  cancelLogo: {
    position: "absolute",
    top: 20,
    right: 20,
    cursor: "pointer",
  },
  logoInput: {
    display: "none",
  },
});

export default useStyle;
