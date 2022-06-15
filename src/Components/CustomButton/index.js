import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const CustomBtn = (props) => {
  const { color, children, ...rest } = props;

  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    marginTop: '20px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: color,
    borderWidth: 0,
    width: '90%',
    display: 'block',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: color,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  return <BootstrapButton {...rest}>{children}</BootstrapButton>;
};

export default CustomBtn;
