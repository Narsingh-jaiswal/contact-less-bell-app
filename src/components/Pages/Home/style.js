import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  noHouse: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  homeLogo: {
    height: 200,
    width: 200,
    borderRadius: "50%",
    marginBottom: 50,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    padding: "5px 10px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff96",
    marginBottom: "10px",
  },
  noHomeImg: {
    borderRadius: "50%",
  },
});
