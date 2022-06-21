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
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">Register</div>
          <TextField
            id="email"
            placeholder="Email"
            sx={inputStyle}
            margin="normal"
            size="small"
          />
          <TextField
            id="yourname"
            placeholder="Your name"
            margin="normal"
            size="small"
            sx={inputStyle}
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
      </div>
    </div>
  );
};

export default SignUp;
