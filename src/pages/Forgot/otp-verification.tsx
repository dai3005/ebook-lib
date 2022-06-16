import { TextField } from '@mui/material';
import React, { FC } from 'react';
import CustomBtn from '../../Components/CustomButton';

type Props = {
  onSubmit: () => void;
};

const OtpVerification: FC<Props> = ({ onSubmit }) => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };
  return (
    <div className="container">
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">OTP Verification</div>
          <TextField
            id="email"
            placeholder="OTP"
            sx={inputStyle}
            margin="normal"
            size="small"
          />
          <CustomBtn
            variant="contained"
            disableRipple
            backgroundColor="#3e8ed0"
            onClick={onSubmit}
          >
            Send
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
