import React, { useState, useEffect } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";
import { register } from "../redux/features/authSlice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return "Password should match";
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <Box className="login-page-wrapper">
      <Paper className="login-page-container" elevation={3}>
        <Typography align="center" variant="h4" component="h4">
          Sign Up
        </Typography>
        <form className="login-page-from" onSubmit={handleSubmit}>
          <TextField
            onChange={onInputChange}
            label="First Name"
            type="text"
            value={firstName}
            name="firstName"
            required
            validation="Please provide first name"
          />
          <TextField
            onChange={onInputChange}
            label="Last Name"
            type="text"
            value={lastName}
            name="lastName"
            required
          />
          <TextField
            onChange={onInputChange}
            label="Email"
            type="email"
            value={email}
            name="email"
            required
          />
          <TextField
            onChange={onInputChange}
            label="Password"
            type="password"
            value={password}
            name="password"
            required
          />
          <TextField
            onChange={onInputChange}
            label="Password Confirm"
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            required
          />
          <br />
          <Button variant="contained" type="submit">
            Register
          </Button>
          <Link className="login-page-register-link" to="/login">
            Already have account ? Sign In
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
