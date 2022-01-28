import Router from "./Router";
import "./App.css";
import { Box, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  dashboardContainer: {
    color: "#fff",
    width: "100%",
    minHeight: "100vh",
    height: "fit-content",
    position: "relative",
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
});

function App() {
  const style = useStyle();
  return (
    <Box className={style.dashboardContainer}>
      <Router />
    </Box>
  );
}

export default App;
