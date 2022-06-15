import { TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomBtn from '../../Components/CustomButton';

const Forgot = () => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };

  const [step, setStep] = useState(0);

  const handleSend = () => {};

  return (
    <div className="container">
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">Password Recovery</div>
          <TextField
            id="email"
            placeholder="Email"
            sx={inputStyle}
            margin="normal"
            size="small"
          />
          <CustomBtn variant="contained" disableRipple color="#3e8ed0">
            Send
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
