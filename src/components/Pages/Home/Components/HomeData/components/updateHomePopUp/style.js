import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  img: {
    height: 100,
    width: 100,
    borderRadius: "50%",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    animation: "$change 10s ease-in-out infinite",
    background: "rgb(143,220,250)",
    background:
      "linear-gradient(315deg, rgba(143,220,250,1) 17%, rgba(255,108,152,1) 74%, rgba(255,125,84,0.6194852941176471) 100%)",
    backgroundSize: "400% 400%",
  },
  "@keyframes change": {
    "0%": {
      backgroundPosition: "0 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0 50%",
    },
  },
  fieldContainer: {
    padding: 20,
    background: "#ffffff9c",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: 250,
  },
  textField: {
    marginBottom: 10,
    width: "100%",
    "& .MuiOutlinedInput-input": {
      padding: "8px 14px",
    },
  },
  logoInput: {
    display: "none",
  },
  camera: {
    color: "#ffffff",
    right: "0px",
    bottom: "0px",
    position: "absolute",
    borderRadius: "50%",
  },
  houseLogo: {
    position: "relative",
    marginBottom: 20,
  },
  audioSelector: {
    color: "#413197",
    width: "fit-content",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
});
