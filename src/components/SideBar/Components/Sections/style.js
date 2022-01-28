import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: "16px 0px",
    color: "#da624a",
    opacity: ".6",
  },
  accordion: {
    boxShadow: "none",
    "&::before": {
      backgroundColor: "transparent",
    },
    "& .MuiAccordionSummary-content.Mui-expanded": {
      margin: 10,
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      minHeight: 34,
    },
  },
  listContainer: {
    width: "100%",
    padding: "0px 20px",
    margin: "0px",
    listStyle: "none",
  },
  list: {
    color: "#da624a",
    background: "#fcf1ef",
    borderRadius: 50,
  },
  listData: {
    lineHeight: 2,
    paddingLeft: 24,
    marginBottom: 15,
  },
});

export default useStyles;
