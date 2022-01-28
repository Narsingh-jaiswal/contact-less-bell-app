import { Box, makeStyles } from "@material-ui/core";
import spinner from "../../assets/login/spinner.svg";

const useStyle = makeStyles({
  container: {
    top: "0",
    width: "100%",
    height: "100vh",
    display: "flex",
    zIndex: "2",
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#a59898a3",
  },
  textContainer: {
    background: "#ffffffba",
    borderRadius: 60,
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "#59598b",
    fontSize: 25,
    fontFamily: "monospace",
    fontWeight: 600,
  },
  spinner: {
    animation: "$spinnerAnimation 1s linear 0s infinite",
  },
  "@keyframes spinnerAnimation": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

const Loader = () => {
  const style = useStyle();
  return (
    <Box className={style.container}>
      <Box className={style.textContainer}>
        <img src={spinner} alt="" className={style.spinner} />
      </Box>
    </Box>
  );
};

export default Loader;
