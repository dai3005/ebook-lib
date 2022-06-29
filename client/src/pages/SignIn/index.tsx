import { TextField } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomBtn from '../../Components/CustomButton';
import './style.css';

const SignIn = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };
  let homeNavigate = useNavigate();

  const handleSubmit = () => {
    setTimeout(() => {
      let random = Math.random();
      if (random <= 0.5) {
        homeNavigate('/');
      } else alert('Login Error');
    }, 500);
  };

  return (
    <div className="container">
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">Login</div>
          <form>
            <TextField
              id="email"
              placeholder="Email"
              sx={inputStyle}
              margin="normal"
              size="small"
              autoFocus
            />
            <TextField
              id="password"
              placeholder="Password"
              type="password"
              margin="normal"
              size="small"
              sx={inputStyle}
            />
            <CustomBtn
              variant="contained"
              disableRipple
              backgroundColor="#3e8ed0"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </CustomBtn>

            <CustomBtn
              variant="contained"
              disableRipple
              backgroundColor={'#cf2122'}
            >
              Login with Google
            </CustomBtn>
          </form>
        </div>
        <div className="form-footer">
          <Link to="/sign-up">Register</Link>
          <Link to="/forgot">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
