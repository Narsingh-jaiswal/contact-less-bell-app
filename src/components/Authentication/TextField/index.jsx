import { TextField } from "@material-ui/core";
import useStyle from "./styles";

const InputTextField = (props) => {
  const styles = useStyle();

  return (
    <TextField className={styles.textField} {...props} variant="outlined" />
  );
};

export default InputTextField;
