import React from "react";
import Styles from './login.styles';
import { useHistory } from "react-router-dom";
import { registerUserData } from "../../services/authentication";
import GoogleAuth from "../../components/googleAuth";



export default function Login() {
  const history = useHistory();
  const onLoginSuccess = async (userData) => {
    try {
      await registerUserData(userData.user);
    } catch (error) {
      console.error(error);
    } finally {
      history.push("/teams");
    }
  };
  return (
    <Styles.PageContainer>
      Login to use the app
      <GoogleAuth loginSuccessCallback={onLoginSuccess} />
    </Styles.PageContainer>
  );
}
