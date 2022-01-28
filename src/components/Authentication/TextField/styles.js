import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  textField: {
    margin: 10,
    width: "100%",
    marginLeft: 0,
    "& .MuiOutlinedInput-input": {
      padding: 16,
    },
  },
});

export default useStyle;
