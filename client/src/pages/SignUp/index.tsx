import { TextField } from '@mui/material';
import React from 'react';
import CustomBtn from '../../Components/CustomButton';
import './style.css';

const SignUp = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };

  return (
    <div className="container">
      <div className="form-sign-in">
        <form action="">
          <div className="sign-in-form">
            <div className="form-header">Register</div>

            <TextField
              id="email"
              placeholder="Email"
              type="email"
              name="email"
              sx={inputStyle}
              margin="normal"
              size="small"
              autoFocus
              required
            />
            <TextField
              id="yourname"
              type="text"
              placeholder="Your name"
              margin="normal"
              size="small"
              sx={inputStyle}
              required
            />
            <TextField
              id="password"
              placeholder="Password"
              type="password"
              margin="normal"
              size="small"
              sx={inputStyle}
              required
            />
            <CustomBtn
              variant="contained"
              disableRipple
              backgroundColor="#3e8ed0"
              type="submit"
            >
              Register
            </CustomBtn>

            <CustomBtn
              variant="contained"
              disableRipple
              backgroundColor={'#cf2122'}
            >
              Login with Google
            </CustomBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
