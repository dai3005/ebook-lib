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
          <div className="form-header">Sign In</div>
          <TextField
            id="email"
            label="Email"
            variant="filled"
            sx={inputStyle}
            margin="normal"
            size="small"
          />
          <TextField
            id="password"
            label="Password"
            variant="filled"
            margin="normal"
            size="small"
            sx={inputStyle}
          />
          <CustomBtn variant="contained" disableRipple color="#3e8ed0">
            Đăng nhập
          </CustomBtn>

          <CustomBtn variant="contained" disableRipple color={'#cf2122'}>
            Đăng nhập với Google
          </CustomBtn>
        </div>
        <div className="form-footer">
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/sign-up">Forgot Password</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
