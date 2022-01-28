import { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../../services/firebase/firebase";
import InputTextField from "../TextField";
import useStyle from "./styles";
import { Link } from "react-router-dom";
import appLogo from "../../../assets/appLogo.jpeg";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const styles = useStyle();
  const auth = getAuth(firebaseApp);

  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const signIn = async () => {
    const response = await signInWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    );
  };

  return (
    <Box className={styles.container}>
      <img src={appLogo} alt="" className={styles.logo}/>
      <Typography className={styles.title}> Contact less Bell </Typography>
      <InputTextField
        name="email"
        value={loginData.email}
        onChange={onChange}
        label="Email"
      />

      <InputTextField
        name="password"
        value={loginData.password}
        onChange={onChange}
        type="password"
        label="Password"
      />
      <Link to={"/signUp"}>SignUp</Link>
      <Button className={styles.loginButton} onClick={signIn}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
