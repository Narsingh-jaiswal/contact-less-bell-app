import { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import createUser from "../../../util/createFirebasUser";
import useStyle from "../Login/styles";
import InputTextField from "../TextField";
import { Link } from "react-router-dom";
import appLogo from "../../../assets/appLogo.jpeg";

const SignUp = () => {
  const [signUpDetail, setSignUpDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const styles = useStyle();

  const onChange = (e) => {
    setSignUpDetail({
      ...signUpDetail,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async () => {
    const response = await createUser({
      ...signUpDetail,
      myHouses: [],
      myOffices: [],
      memberOf: [],
      officeData: {
        cabinId: "",
        officeId: "",
        employeeType: "",
      },
    });
  };

  return (
    <Box className={styles.container}>
      <img src={appLogo} alt="" className={styles.logo} />
      <Typography className={styles.title}> Contact less Bell </Typography>

      <InputTextField
        name="name"
        value={signUpDetail.name}
        onChange={onChange}
        label="Name"
      />

      <InputTextField
        name="email"
        value={signUpDetail.email}
        type="email"
        onChange={onChange}
        label="email"
      />

      <InputTextField
        name="password"
        value={signUpDetail.password}
        type="password"
        onChange={onChange}
        label="password"
      />

      <InputTextField
        name="confirmPassword"
        value={signUpDetail.confirmPassword}
        type="password"
        onChange={onChange}
        label="confirm password"
      />
      <Link to={"/login"}>Already have an account ?</Link>
      <Button className={styles.loginButton} onClick={signUp}>
        Sign Up
      </Button>
    </Box>
  );
};

export default SignUp;
