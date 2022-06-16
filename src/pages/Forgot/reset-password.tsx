import { TextField } from '@mui/material';
import React, { FC } from 'react';
import CustomBtn from '../../Components/CustomButton';

type Props = {
  onSubmit: () => void;
};

const ResetPassword: FC<Props> = ({ onSubmit }) => {
  const inputStyle = {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: '5px',
  };
  return (
    <div className="container">
      <div className="form">
        <div className="sign-in-form">
          <div className="form-header">Reset Password</div>
          <TextField
            id="email"
            placeholder="Password"
            type="password"
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
            Reset
          </CustomBtn>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
