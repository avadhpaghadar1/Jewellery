import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// import axios from "axios";


const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  // const sendDataToServer=()=>{
  //   axios.post()
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInfo.username, loginInfo.password);
  };
  return (
    <>
      <div className="login_img">
        <form className="login_form" onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <h2><b>Log In</b></h2>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  id="outlined-required"
                  name="username"
                  value={loginInfo.username}
                  label="Username"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  id="outlined-required"
                  name="password"
                  value={loginInfo.password}
                  label="Password"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="login_form_forgot">
                <p>Forgot Password?</p>
              </td>
            </tr>
            <tr>
              <td>
              <Button variant="contained" className="login_form_btn"
                  type="submit">Login</Button>
{/*               
                <ColorButton
                  variant="contained"
                  type="submit"
                  className="login_form_tr_btn"
                >
                  Login
                </ColorButton> */}
              </td>
            </tr>
            <tr style={{ fontSize: "85%", textAlign: "center", paddingTop:"3%"}}>
              <td>
                <p>
                  Don't have account?
                  <Link to="/Register" className="navbar_link">
                    <b>Register</b>
                  </Link>
                </p>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </>
  );
};
export default Login;
