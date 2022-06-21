import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface BtnProps extends ButtonProps {
  backgroundColor: string;
}

const CustomBtn: FC<BtnProps> = (props) => {
  const { backgroundColor, children, ...rest } = props;

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    marginTop: '20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: backgroundColor,
    borderWidth: 0,
    width: '90%',
    display: 'block',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: backgroundColor,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  return <BootstrapButton {...rest}>{children}</BootstrapButton>;
};

export default CustomBtn;
