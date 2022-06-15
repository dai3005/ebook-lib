import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomBtn from '../../Components/CustomButton';
import './style.css';

const SignIn = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };

  return (
    <div className="container">
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">Login</div>
          <TextField
            id="email"
            placeholder="Email"
            sx={inputStyle}
            margin="normal"
            size="small"
          />
          <TextField
            id="password"
            placeholder="Password"
            type="password"
            margin="normal"
            size="small"
            sx={inputStyle}
          />
          <CustomBtn variant="contained" disableRipple color="#3e8ed0">
            Login
          </CustomBtn>

          <CustomBtn variant="contained" disableRipple color={'#cf2122'}>
            Login with Google
          </CustomBtn>
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
