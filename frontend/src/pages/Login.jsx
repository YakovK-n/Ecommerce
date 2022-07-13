import React, { useState, useEffect } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Login.css";
import { login } from "../redux/features/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate }));
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
          Log In
        </Typography>
        <form className="login-page-from" onSubmit={handleSubmit}>
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
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Link className="login-page-register-link" to="/register">
            Don't Have account, click here
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
