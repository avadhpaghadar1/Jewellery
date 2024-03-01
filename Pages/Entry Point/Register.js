import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    username: "",
    password: "",
    companyname: "",
    gstno: "",
    category: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((registerInfo) => ({
      ...registerInfo,
      [name]: value,
    }));
  };
  const sendDataToServer = () => {
    axios
      .post("http://localhost:4000/addUser", registerInfo)
      .then((response) => {
        console.log("User added successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToServer();
  };

  return (
    <>
      <div className="register_img">
        <form className="register_form" onSubmit={handleSubmit}>
          <table>
            
            <tr>
              <td>
                <h2><b>Register</b></h2>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  required
                  name="firstname"
                  value={registerInfo.firstname}
                  label="First Name"
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  
                  name="lastname"
                  value={registerInfo.lastname}
                  label="Last Name"
                  type="text"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  name="email"
                  value={registerInfo.email}
                  label="Email"
                  type="email"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
               
                  name="contact"
                  value={registerInfo.contact}
                  label="Contact"
                  type="number"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  name="username"
                  value={registerInfo.username}
                  label="Username"
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
              
                  name="password"
                  value={registerInfo.password}
                  label="Password"
                  type="password"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  name="companyname"
                  value={registerInfo.companyname}
                  label="Company Name"
                  type="text"
                  onChange={handleChange}
                />
              </td>
              <td>
                <TextField
                  name="gstno"
                  value={registerInfo.gstno}
                  label="GST No."
                  type="text"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <FormControl fullWidth >
                  <InputLabel
                    id="demo-simple-select-label"
                  >
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Type"
                    value={registerInfo.category}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Manufacturer"}>Manufacturer</MenuItem>
                    <MenuItem value={"Customer"}>Customer</MenuItem>
                    <MenuItem value={"Wholeseller"}>Wholeseller</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>
            <tr>
              <td>
              <Button variant="contained" className="register_form_btn"
                  type="submit">Register</Button>
              </td>
            </tr>
            <tr style={{fontSize: "85%", paddingTop:"5%"}}>
              <td>
                <p>
                  Already have account?
                  <Link to="/Login" className="navbar_link">
                    <b>Login</b>
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

export default Register;
